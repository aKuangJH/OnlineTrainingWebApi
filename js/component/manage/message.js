var path = "../../../img/headpic/";
$(function(){
	getusermsg();
});

//form submit提交
layui.use('form', function() {
	var form = layui.form;
	//监听提交
	form.on('submit(go)', function(data) {
		layer.msg(JSON.stringify(data.field));
		$.ajax({
			dataType: "json",
			type: "POST",
			url: "http://train.online.com/server/user/updatemsg",
			data: data.field,
			success: function(data) {
				//根据返回值类型确定状态
				switch (data.code) {
					case 0:
						layer.msg("更新成功！");
						break;
					case 1:
						layer.msg('更新失败！');
						break;
				};
			}
		})
		return false;
	});
});

//  上传头像
layui.use('upload', function() {
	var upload = layui.upload;
	//执行实例
	var uploadInst = upload.render({
		multiple: true,
		accept: 'images',
		number: 1,
		elem: '#uploadpic' //绑定元素
		,url: 'http://train.online.com/server/user/uploadpic' //上传接口
		,choose: function(obj) { //obj参数包含的信息，跟 choose回调完全一致，可参见上文。
			var files = obj.pushFile();
			$("#selpic").children().remove();
			//预读本地文件，如果是多文件，则会遍历。(不支持ie8/9)
			obj.preview(function(index, file, result) {
				console.log(index); //得到文件索引
				console.log(file); //得到文件对象
				console.log(result); //得到文件base64编码，比如图片

				var picUrl = getObjectURL(file);
				console.log("picUrl=" + picUrl);
				if (picUrl) {

					$("#selpic").append("<div id='imgbox'>" +
						"<img src='" + picUrl + "' />" +
						"</div>")
				}

				//obj.resetFile(index, file, '123.jpg'); //重命名文件名，layui 2.3.0 开始新增

				//这里还可以做一些 append 文件列表 DOM 的操作

				//obj.upload(index, file); //对上传失败的单个文件重新上传，一般在某个事件中使用
				delete files[index]; //删除列表中对应的文件，一般在某个事件中使用
				$("#uimg").val("");
			});

		},
		before: function(obj) { //obj参数包含的信息，跟 choose回调完全一致，可参见上文。
			layer.load(); //上传loading
		},
		done: function(res) {
			layer.closeAll('loading'); //关闭loading
			//上传完毕回调
			if(res.code == 0){
					// let imgurl = $("#uimg").val() +","+ res.creatFileName;
					// alert(imgurl);
                    //let saveurl = imgurl.substring(1,imgurl.length);
					$("#uimg").val(res.creatFileName);
			}
		},
		error: function() {
			//请求异常回调
			layer.closeAll('loading'); //关闭loading
		}
	});
});

// 获取用户信息
function getusermsg(){
	$.ajax({
		async: true,
		dataType: "json",
		type: "POST",
		url: "http://train.online.com/server/user/getmsg",
		// data: ,
		success: function(data) {
			//根据返回值类型确定状态
			switch (data.code) {
				case 0:
				$("#username").val(data.user.username);
				$("input[name='realname']").val(data.user.realname);
				$("input[name='phone']").val(data.user.phone);
				$("input[name='email']").val(data.user.email);
				$("input[name='description']").val(data.user.description);
				$("#selpic").children().remove();
				if (data.user.uimg) {
					let realpic = path + data.user.uimg;
					$("#selpic").append("<div id='imgbox'>" +
						"<img src='" + realpic + "' />" +
						"</div>")
				}else {
					let realpic = path + 'fb7c468b.png';
					$("#selpic").append("<div id='imgbox'>" +
						"<img src='" + realpic + "' />" +
						"</div>")
				}
					break;
				case 1:
					layer.msg('获取失败！');
					break;
			};
		}
	})
}

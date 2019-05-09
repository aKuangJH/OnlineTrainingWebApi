var dataCount = 0;
var path = "../../../img/headpic/";
$(function () {
	getallcomments(1,1);
	pageHelper();

	$("#addcontent").click(function () {
		let content = $("#postcontent").val();
		addcontent(content);
	})
});

// 分页
function pageHelper() {
	layui.use('laypage', function () {
		var laypage = layui.laypage;
		//执行一个laypage实例
		laypage.render({
			elem: 'page' //注意，这里ID，不用加 # 号
			, count: dataCount //数据总数，从服务端得到
			, limit: 10
			, jump: function (obj, first) {
				getallcomments(obj.curr, 10);
			}
		});
	});
}


function getallcomments(pageNo, pageSize) {
	let params = { "infoid": infoid, "pageNo": pageNo, "pageSize": pageSize };
	$.ajax({
		dataType: "json",
		async: false,
		type: "GET",
		url: "http://train.online.com/server/postcomment/getpostcomment",
		data: params,
		success: function (data) {
			//根据返回值类型确定状态
			switch (data.code) {
				case 0:
					dataCount = data.count;
					// alert(dataCount);
					for(let i=0;i<data.comments.length;i++){
						$(".commentlist").append("<div class='comment'>" +
						"<div class='uimg'>" +
						"<div class='upic'><img src='"+path+data.comments[i].user.uimg+"'></div>" +
						"</div>" +
						"<div class='ucontent'>" +
						"<div class='content'>" +
						"<p class='uname'>"+data.comments[i].user.username+"</p>" +
						"<p class='unr'>"+data.comments[i].content+"</p>" +
						"</div>" +
						"<div class='ubmsg'>3月6日08:45</div>" +
						"</div>" +
						"</div>");
					}
					break;
				case 1:
					layer.msg('获取失败，请刷新');
					break;
			};
		}
	})
}

function addcontent(content) {
	let params = { "infoid": infoid, "content": content, };
	// alert(JSON.stringify(params))
	$.ajax({
		dataType: "json",
		type: "GET",
		url: "http://train.online.com/server/postcomment/addcomment",
		data: params,
		success: function (data) {
			//根据返回值类型确定状态
			switch (data.code) {
				case 0:
					window.location.reload();
					break;
				case 1:
					layer.msg('评论失败，请重新发表！');
					break;
			};
		}
	})

}

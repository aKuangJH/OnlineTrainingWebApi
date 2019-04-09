$(function () {

	// 展示题目列表
	showallquestions();

	// 样式状态
	// $(".rightbtn").hover(function () {
	// 	$(this).css({
	// 		"background-color": "#959CA8",
	// 		"cursor": "pointer"
	// 	});
	// }, function () {
	// 	$(".rightbtn").css({
	// 		"background-color": "white"
	// 	});
	// });

	// hover原生js
	// $('.rightbtn').on({
	// 	mouseenter:function(){
	// 		$(this).css({
	// 			"background-color": "#959CA8",
	// 			"cursor": "pointer"
	// 		});
	// 	},
	// 	mouseleave:function(){
	// 		$(".rightbtn").css({
	// 			"background-color": "white"
	// 		}); 
	// 	}
	// });

	// 取消按钮
	$(".cancleupdate").click(function () {
		window.location.reload();
	});

});

// 编辑功能
function edittext(obj) {
	layer.confirm('是否编辑题目', {
		btn: ['确认', '取消'] //可以无限个按钮
	}, function (index, layero) {
		//按钮【按钮一】的回调
		// 可编辑
		$(obj).parent().nextAll().find(".onlyread").removeAttr("disabled");
		// 显示按钮
		$(obj).parent().nextAll(".updatequestion").show();
		// 关闭弹层
		layer.close(layer.index);
	});
}

// 选择题修改提交
function updateselect(obj, qid) {

	let tid = GetQueryString("tid");
	let qtitle = $(obj).parent().prevAll().find(".layui-textarea").val();
	let qanswer = $(obj).parent().prevAll().find("#qanval").val()

	let optionA = $(obj).parent().prevAll().find("#optionA").val();
	let optionB = $(obj).parent().prevAll().find("#optionB").val();
	let optionC = $(obj).parent().prevAll().find("#optionC").val();
	let optionD = $(obj).parent().prevAll().find("#optionD").val();

	let param = { "A": optionA, "B": optionB, "C": optionC, "D": optionD };
	let options = JSON.stringify(param);
	let params = { "qid": qid, "tid": tid, "qstyle": "0", "qanswer": qanswer, "options": options };
	$.ajax({
		dataType: "json",
		type: "GET",
		url: "http://train.online.com/server/question/updatequestion",
		data: param,
		success: function (data) {
			//根据返回值类型确定状态
			switch (data.code) {
				case 0:
					// 关闭弹层
					layer.close(layer.index);
					layer.msg("更新成功！");
					setTimeout(function () {
						window.location.reload();
					}, 500);
					break;
				case 1:
					layer.msg('更新失败，请重新操作！');
					break;
			};
		}
	})
}

// 填空题修改提交
function updatetext(obj, qid) {
	let tid = GetQueryString("tid");
	let qtitle = $(obj).parent().prevAll().find(".layui-textarea").val();
	let qanswer = $(obj).parent().prevAll().find("#qanval").val()

	let param = { "qid": qid, "tid": tid, "qtitle": qtitle, "qstyle": "1", "qanswer":qanswer};
	// alert($(obj).parent().prevAll().find(".layui-textarea").val());
	$.ajax({
		dataType: "json",
		type: "GET",
		url: "http://train.online.com/server/question/updatequestion",
		data: param,
		success: function (data) {
			//根据返回值类型确定状态
			switch (data.code) {
				case 0:
					// 关闭弹层
					layer.close(layer.index);
					layer.msg("更新成功！");
					setTimeout(function () {
						window.location.reload();
					}, 500);
					break;
				case 1:
					layer.msg('更新失败，请重新操作！');
					break;
			};
		}
	})
}

// 删除功能
function deltext(qid) {
	layer.confirm('是否删除题目', {
		btn: ['确认', '取消'] //可以无限个按钮
	}, function (index, layero) {
		//按钮【按钮一】的回调
		let param = { "qid": qid };
		$.ajax({
			dataType: "json",
			type: "GET",
			url: "http://train.online.com/server/question/deletequestion",
			data: param,
			success: function (data) {
				//根据返回值类型确定状态
				switch (data.code) {
					case 0:
						// 关闭弹层	
						layer.close(layer.index);
						layer.msg("删除成功！");
						setTimeout(function () {
							window.location.reload();
						}, 500);

						break;
					case 1:
						layer.msg('删除失败，请重新操作！');
						break;
				};
			}
		})

	});
}

// 获取题目列表
function showallquestions() {
	let tid = GetQueryString("tid");
	let param = { "tid": tid };
	$.ajax({
		dataType: "json",
		type: "POST",
		url: "http://train.online.com/server/question/showallquestions",
		data: param,
		success: function (data) {
			//根据返回值类型确定状态
			switch (data.code) {
				case 0:
					for (let i = 0; i < data.questionlist.length; i++) {
						if (data.questionlist[i].qstyle == 0) {
							$(".questionlist").append("<div class='questionitem'>" +
								"<div class='headoption'>" +
								"<i class='layui-icon layui-icon-circle-dot' title='题号'>" + i + "</i>" +
								"<i class='layui-icon layui-icon-close-fill rightbtn' title='删除' onclick='deltext(" + data.questionlist[i].qid + ")'></i>" +
								"<i class='layui-icon layui-icon-edit rightbtn' title='编辑' onclick='edittext(this)'></i>" +
								"</div>" +
								"<div class='questionname'>" +
								"<h4>题目：</h4>" +
								"<textarea required lay-verify='required' placeholder='请输入' class='layui-textarea onlyread' disabled='disabled'>" + data.questionlist[i].qtitle + "</textarea>" +
								"</div>" +
								"<div class='options'>" +
								"<div class='option'>" +
								"选项A：" +
								"<div class='layui-input-inline' style='width: 300px;'>" +
								"<input type='text' id='optionA' value='" + data.questionlist[i].options.optionA + "' autocomplete='off' class='layui-input onlyread'  disabled='disabled'>" +
								"</div>" +
								"</div>" +
								"<div class='option'>" +
								"选项B：" +
								"<div class='layui-input-inline' style='width: 300px;'>" +
								"<input type='text' id='optionB' value='" + data.questionlist[i].options.optionB + "' autocomplete='off' class='layui-input onlyread' disabled='disabled'>" +
								"</div>" +
								"</div>" +
								"<div class='option'>" +
								"选项C：" +
								"<div class='layui-input-inline' style='width: 300px;'>" +
								"<input type='text' id='optionC' value='" + data.questionlist[i].options.optionC + "' autocomplete='off' class='layui-input onlyread' disabled='disabled'>" +
								"</div>" +
								"</div>" +
								"<div class='option' >" +
								"选项D：" +
								"<div class='layui-input-inline' style='width: 300px;'>" +
								"<input type='text' id='optionD' value='" + data.questionlist[i].options.optionD + "' autocomplete='off' class='layui-input onlyread' disabled='disabled'>" +
								"</div>" +
								"</div>" +
								"</div>" +
								"<div class='qanswer'>" +
								"答案:" +
								"<div class='layui-input-inline' style='width: 400px;'>" +
								"<input type='text' id='qanval' value='" + data.questionlist[i].qanswer + "' autocomplete='off' class='layui-input onlyread' disabled='disabled'>" +
								"</div>" +
								"</div>" +
								"<div class='updatequestion'>" +
								"<button class='layui-btn layui-btn-warm' onclick='updateselect(this," + data.questionlist[i].qid + ")'>修改</button>" +
								"<button class='layui-btn layui-btn-warm cancleupdate'>取消</button>" +
								"</div>" +
								"</div>");
						} else if (data.questionlist[i].qstyle == 1) {
							$(".questionlist").append("<div class='questionitem'>" +
								"<div class='headoption'>" +
								"<i class='layui-icon layui-icon-circle-dot' title='题号'>" + i + "</i>" +
								"<i class='layui-icon layui-icon-close-fill rightbtn' title='删除' onclick='deltext(" + data.questionlist[i].qid + ")'></i>" +
								"<i class='layui-icon layui-icon-edit rightbtn' title='编辑' onclick='edittext(this)'></i>" +
								"</div>" +
								"<div class='questionname'>" +
								"<h4>题目：</h4>" +
								"<textarea required lay-verify='required' placeholder='请输入' class='layui-textarea onlyread' disabled='disabled'>" + data.questionlist[i].qtitle + "</textarea>" +
								"</div>" +
								"<div class='qanswer'>" +
								"答案:" +
								"<div class='layui-input-inline' style='width: 400px;'>" +
								"<input type='text' id='qanval' value='" + data.questionlist[i].qanswer + "' autocomplete='off' class='layui-input onlyread' disabled='disabled'>" +
								"</div>" +
								"</div>" +
								"<div class='updatequestion'>" +
								"<button class='layui-btn layui-btn-warm' onclick='updatetext(this," + data.questionlist[i].qid + ")'>修改</button>" +
								"<button class='layui-btn layui-btn-warm cancleupdate'>取消</button>" +
								"</div>" +
								"</div>");
						}

					}
					break;
				case 1:
					layer.msg('更新失败，请重新获取！');
					break;
			};
		}
	})
}

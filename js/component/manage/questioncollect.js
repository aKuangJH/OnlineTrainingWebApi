$(function () {
    getallqcollection();
});


function getallqcollection() {

    $.ajax({
        dataType: "json",
        type: "GET",
        url: "http://train.online.com/server/questioncollection/showallqcollection",
        // data: params,
        success: function (data) {
            //根据返回值类型确定状态
            switch (data.code) {
                case 0:
                    for (let i = 0; i < data.questionlist.length; i++) {
                        if (data.questionlist[i].qstyle == 1) {
                            //填空题
                            $(".collectlist").append("<div class='collectitem'>" +
                            "<div class='questionname'>" +
                            "<h4><"+ data.questionlist[i].qid +">----题目：<i class='layui-icon layui-icon-close-fill btnright' title='取消收藏' onclick='canclecollect(" + data.questionlist[i].qid + ")'></i></h4>" +
                            "<textarea required  class='layui-textarea onlyread' disabled='disabled'>"+data.questionlist[i].qtitle+"</textarea>" +
                            "</div>" +
                        
                            "<div class='qanswer'>" +
                            "答案:" +
                            "<div class='layui-input-inline' style='width: 400px;'>" +
                            "<input type='text' id='qanval' value='" + data.questionlist[i].qanswer + "'  class='layui-input onlyread' disabled='disabled'>" +
                            "</div>" +
                            "</div>" +

                            "</div>")
                        } else if (data.questionlist[i].qstyle == 0) {
                            //选择题
                            $(".collectlist").append("<div class='collectitem'>" +
                                "<div class='questionname'>" +
                                "<h4><"+ data.questionlist[i].qid +">----题目：<i class='layui-icon layui-icon-close-fill btnright' title='取消收藏' onclick='canclecollect(" + data.questionlist[i].qid + ")'></i></h4>" +
                                "<textarea required  class='layui-textarea onlyread' disabled='disabled'>"+data.questionlist[i].qtitle+"</textarea>" +
                                "</div>" +
                                "<div class='options'>" +
                                "<div class='option'>" +
                                "选项A：" +
                                "<div class='layui-input-inline' style='width: 300px;'>" +
                                "<input type='text' id='optionA' value='" + data.questionlist[i].options.optionA + "' class='layui-input onlyread' disabled='disabled'>" +
                                "</div>" +
                                "</div>" +

                                "<div class='option'>" +
                                "选项B：" +
                                "<div class='layui-input-inline' style='width: 300px;'>" +
                                "<input type='text' id='optionB' value='" + data.questionlist[i].options.optionB + "' class='layui-input onlyread' disabled='disabled'>" +
                                "</div>" +
                                "</div>" +

                                "<div class='option'>" +
                                "选项C：" +
                                "<div class='layui-input-inline' style='width: 300px;'>" +
                                "<input type='text' id='optionC' value='" + data.questionlist[i].options.optionC + "' class='layui-input onlyread' disabled='disabled'>" +
                                "</div>" +
                                "</div>" +

                                "<div class='option'>" +
                                "选项D：" +
                                "<div class='layui-input-inline' style='width: 300px;'>" +
                                "<input type='text' id='optionD' value='" + data.questionlist[i].options.optionD + "' class='layui-input onlyread' disabled='disabled'>" +
                                "</div>" +
                                "</div>" +
                                "</div>" +

                                "<div class='qanswer'>" +
                                "答案:" +
                                "<div class='layui-input-inline' style='width: 400px;'>" +
                                "<input type='text' id='qanval' value='" + data.questionlist[i].qanswer + "'  class='layui-input onlyread' disabled='disabled'>" +
                                "</div>" +
                                "</div>" +

                                "</div>")
                        }
                    }

                    // 样式状态
					$(".btnright").hover(function () {
						$(this).css({
							"background-color": "#959CA8",
							"cursor": "pointer"
						});
					}, function () {
						$(".btnright").css({
							"background-color": "white"
						});
					});
                    break;
                case 1:
                    layer.msg('暂无收藏试题！');
                    break;
            }
        }
    })
}

function canclecollect(qid){
    layer.confirm('是否取消收藏此题', {
		btn: ['确认', '取消'] //可以无限个按钮
	}, function (index, layero) {
		//按钮【按钮一】的回调
		let param = { "qid": qid };
		$.ajax({
			dataType: "json",
			type: "GET",
			url: "http://train.online.com/server/questioncollection/canclecollect",
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
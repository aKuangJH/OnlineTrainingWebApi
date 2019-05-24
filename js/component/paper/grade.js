$(function(){
    var tid = GetQueryString('tid');
    getgrade(tid);
})

function getgrade(tid){
    let param = {"tid":tid};
    $.ajax({
		dataType: "json",
		type: "GET",
		url: "http://train.online.com/server/grade/getgrade",
		data: param,
		success: function (data) {
			//根据返回值类型确定状态
			switch (data.code) {
				case 0:
                    $("#testname").val(data.grade.testname);
                    $("#grade").val(data.grade.grade);
                    $("#username").val(data.grade.username);
                    $("#createtime").val(data.grade.answertime);
                    break;
				case 1:
					layer.msg('获取失败，请重新操作！');
					break;
			};
		}
	})
}
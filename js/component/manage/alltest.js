$(function() {
	getalltest();
});

// 查询
function showquestions(tid){
	// alert(tid);
	window.location.href = "http://train.online.com/html/manage/showquestions.html?tid="+tid;
}
// 删除
function deletetest(tid){
	alert(tid);
}

// 获取所有
function getalltest() {
	$.ajax({
		dataType: "json",
		type: "POST",
		url: "http://train.online.com/server/test/getalltest",
		// data: params,
		success: function(data) {
			//根据返回值类型确定状态
			switch (data.code) {
				case 0:
				for(let i=0;i<data.testlist.list.length;i++){
					$(".testlist").append("<div class='testitem'>"+
						"<h4 class='testname'><b>"+data.testlist.list[i].tname+"</b></h4>"+
						"<div class='createdate'><span>创建日期：</span><span class='date'>"+parseTime(data.testlist.list[i].createtime)+"</span></div>"+
						"<div class='teststatus'><span>状态：</span><span class='status'>"+data.testlist.list[i].status+"</span></div>"+						
						"<div class='allbtn'><span class='querybtn'><button class='layui-btn layui-btn-normal' onclick='showquestions("+data.testlist.list[i].tid+")'>查询</button></span><span class='deletebtn'><button class='layui-btn layui-btn-danger' onclick='deletetest("+data.testlist.list[i].tid+")'>删除</button></span></div>"+
						"</div>");
				}	
					break;
				case 1:
					layer.msg('更新失败，请重新获取！');
					break;
			};
		}
	})
}




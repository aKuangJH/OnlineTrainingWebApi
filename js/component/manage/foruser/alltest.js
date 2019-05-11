var dataCount = 0;
$(function() {
	getalltest(1,3)
	pageHelper()
	// getalltest(1,6);
});

// 分页
function pageHelper() {
    layui.use('laypage', function () {
        var laypage = layui.laypage;
        //执行一个laypage实例
        laypage.render({
            elem: 'pagehelper' //注意，这里ID，不用加 # 号
            , count: dataCount //数据总数，从服务端得到
            , limit: 3
            , jump: function (obj, first) {
                getalltest(obj.curr,3);
            }
        });
    });
}

// 查询
function showquestions(tid){
	// alert(tid);
	window.location.href = "http://train.online.com/html/manage/foruser/showquestions.html?tid="+tid;
}
// 删除
function deletetest(tid){
	alert(tid);
}

// 获取所有
function getalltest(pageNo, pageSize) {
	let params = {"pageNo":pageNo,"pageSize":pageSize}
	$.ajax({
		dataType: "json",
		type: "POST",
		url: "http://train.online.com/server/test/getalltest",
		data: params,
		async: false,
		success: function(data) {
			//根据返回值类型确定状态
			switch (data.code) {
				case 0:
				$(".testlist").html("");
				dataCount = data.count;

				// alert("===>"+dataCount)
				for(let i=0;i<data.testlist.length;i++){
					$(".testlist").append("<div class='testitem'>"+
						"<h4 class='testname'><b>"+data.testlist[i].tname+"</b></h4>"+
						"<div class='createdate'><span>创建日期：</span><span class='date'>"+parseTime(data.testlist[i].createtime)+"</span></div>"+
						"<div class='teststatus'><span>状态：</span><span class='status'>"+data.testlist[i].status+"</span></div>"+						
						"<div class='allbtn'><span class='querybtn'><button class='layui-btn layui-btn-normal' onclick='showquestions("+data.testlist[i].tid+")'>查询</button></span><span class='deletebtn'><button class='layui-btn layui-btn-danger' onclick='deletetest("+data.testlist[i].tid+")'>删除</button></span></div>"+
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




var dataCount = 0;
$(function(){
    getanswerhistory(1,10);
    pageHelper();
})

// 分页
function pageHelper() {
    layui.use('laypage', function () {
        var laypage = layui.laypage;
        //执行一个laypage实例
        laypage.render({
            elem: 'pagehelper' //注意，这里ID，不用加 # 号
            , count: dataCount //数据总数，从服务端得到
            , limit: 10
            , jump: function (obj, first) {
                getanswerhistory(obj.curr, 10);
            }
        });
    });
}

function getanswerhistory(pageNo,pageSize){
    let params = {"pageNo":pageNo,"pageSize":pageSize};
    $.ajax({
        async: false,
        dataType: "json",
        type: "GET",
        url: "http://train.online.com/server/grade/getgradehistory",
        data: params,
        success: function (data) {
            //根据返回值类型确定状态
            switch (data.code) {
                case 0:
                    $("tbody").html("");
                    dataCount = data.count;
                    for(let i=0;i<data.gradelist.length;i++){
                        $("tbody").append("<tr>"+
                        "<td>"+data.gradelist[i].gid+"</td>"+
                        "<td>"+data.gradelist[i].testname+"</td>"+
                        "<td>"+data.gradelist[i].grade+"</td>"+
                        "<td>"+data.gradelist[i].answertime+"</td>"+
                        "<td><button class='layui-btn layui-btn-sm' onclick='showmeanswer("+data.gradelist[i].tid+","+data.gradelist[i].aid+","+data.gradelist[i].gid+")'>查看答案</button></td>"+
                    "</tr>")
                    }
                    // layer.msg("获取成功！");
                    break;
                case 1:
                    // layer.msg('获取失败，请重新操作！');
                    break;
            };
        }
    })
}

function showmeanswer(tid,aid,gid){
    // alert(tid+","+aid+","+gid);
    window.location.href = "http://train.online.com/html/main/paper/questionresult.html?tid="+tid+"&aid="+aid+"&gid="+gid;
}
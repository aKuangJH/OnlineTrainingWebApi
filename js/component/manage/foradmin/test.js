//type 0:所有不论状态 1:所有未审核 2:所有已审核 3:所有公开已审核 
var type = 0;
var dataCount = 0;
$(function () {
    // getTotalCount(type)?pageHelper(type,dataCount):pageHelper(type,dataCount);
    getTotalCount(type);
    pageHelper(type,dataCount);
})

// 分页
function pageHelper(type,dataCount){
    layui.use('laypage', function(){
        var laypage = layui.laypage;
        //执行一个laypage实例
        laypage.render({
             elem: 'pagehelper' //注意，这里ID，不用加 # 号
            ,count: dataCount //数据总数，从服务端得到
            ,limit:12
            ,jump: function(obj, first){
                getalltest(type,obj.curr,12);
            }
        });
    });
}

// 获取数据总数，用于统计分页数
function getTotalCount(type){
    let param = {"type":type};
    $.ajax({
        async: false,
        dataType: "json",
        type: "GET",
        url: "http://train.online.com/server/test/gettotalcount",
        data: param,
        success: function (data) {
            //根据返回值类型确定状态
            switch (data.code) {
                case 0:
                    dataCount = data.totalCount;
                    break;
                case 1:
                    dataCount = -1;
                    break;
            };
        }
    })
}


function getalltest(type,pageNo,pageSize) {
    //type 0:所有不论状态 1:所有未审核 2:所有已审核 3:所有公开已审核 
    let params = { "pageNo": pageNo, "pageSize": pageSize, "type": type }

    $.ajax({
        dataType: "json",
        type: "GET",
        url: "http://train.online.com/server/test/testallcount",
        data: params,
        success: function (data) {
            //根据返回值类型确定状态
            switch (data.code) {
                case 0:
                    layer.msg("获取成功！");
                    // 清空html
                    $("tbody").html("")
                    for(let i=0;i<data.testlist.length;i++){
                        //数据处理
                        let authority = handleAuthority(data.testlist[i].testauthority);

                        $("tbody").append("<tr>"+
                        "<td>"+data.testlist[i].tid+"</td >"+
                        "<td>"+data.testlist[i].tname+"</td>"+
                        "<td>"+data.testlist[i].status+"</td>"+
                        "<td>"+authority+"</td>"+
                        "<td>"+data.testlist[i].createtime+"</td>"+
                        "<td>"+data.testlist[i].answercount+"</td>"+
                        "<td><button class='layui-btn layui-btn-sm'>删除</button></td>"+
                        "</tr >")
                    }
                    break;
                case 1:
                    layer.msg('获取失败，请重新操作！');
                    break;
            };
        }
    })
}

//审核状态处理
function handleAuthority(testauthority){
    if(testauthority == 0){
        return "未审核";
    }else if(testauthority == 1){
        return "已审核";
    }
}
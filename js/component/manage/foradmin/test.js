//type 0:所有不论状态 1:所有未审核 2:所有已审核 3:所有公开已审核 
var type = 0;
var dataCount = 0;
$(function () {
    // getTotalCount(type)?pageHelper(type,dataCount):pageHelper(type,dataCount);
    // getTotalCount(type);
    // getalltest(0,1,12);
    pageHelper(type, dataCount);

    $(".type0").click(function(){
        type = 0;
        pageHelper(type, dataCount);
    })
    $(".type1").click(function(){
        type = 1;
        pageHelper(type, dataCount);
    })
    $(".type2").click(function(){
        type = 2;
        pageHelper(type, dataCount);
    })
})

// 分页
function pageHelper(type, dataCount) {
    layui.use('laypage', function () {
        var laypage = layui.laypage;
        //执行一个laypage实例
        laypage.render({
            elem: 'pagehelper' //注意，这里ID，不用加 # 号
            , count: dataCount //数据总数，从服务端得到
            , limit: 12
            , jump: function (obj, first) {
                getalltest(type, obj.curr, 12);
            }
        });
    });
}

// 获取数据总数，用于统计分页数
function getTotalCount(type) {
    let param = { "type": type };
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


function getalltest(type, pageNo, pageSize) {
    //type 0:所有不论状态 1:所有未审核 2:所有已审核 3:所有公开已审核 
    let params = { "pageNo": pageNo, "pageSize": pageSize, "type": type }

    $.ajax({
        async: false,
        dataType: "json",
        type: "GET",
        url: "http://train.online.com/server/test/testallcount",
        data: params,
        success: function (data) {
            //根据返回值类型确定状态
            switch (data.code) {
                case 0:
                    // layer.msg("获取成功！");
                    dataCount = data.count;
                    // 清空html
                    $("tbody").html("")
                    if(type == 0){
                        for (let i = 0; i < data.testlist.length; i++) {
                            //数据处理
                            let authority = handleAuthority(data.testlist[i].testauthority);
                            $("tbody").append("<tr>" +
                                "<td>" + data.testlist[i].tid + "</td >" +
                                "<td>" + data.testlist[i].tname + "</td>" +
                                "<td>" + data.testlist[i].status + "</td>" +
                                "<td>" + authority + "</td>" +
                                "<td>" + data.testlist[i].createtime + "</td>" +
                                "<td>" + data.testlist[i].answercount + "</td>" +
                                "<td><button class='layui-btn layui-btn-sm' onclick='deleteTest("+data.testlist[i].tid+")'>删除</button></td>" +
                                "</tr >")
                        }
                    }else{
                        for (let i = 0; i < data.testlist.length; i++) {
                            //数据处理
                            let authority = handleAuthority(data.testlist[i].testauthority);
                            $("tbody").append("<tr>" +
                                "<td>" + data.testlist[i].tid + "</td >" +
                                "<td>" + data.testlist[i].tname + "</td>" +
                                "<td>" + data.testlist[i].status + "</td>" +
                                "<td>" + authority + "</td>" +
                                "<td>" + data.testlist[i].createtime + "</td>" +
                                "<td>" + data.testlist[i].answercount + "</td>" +
                                "<td><button class='layui-btn layui-btn-sm' onclick='changetype("+data.testlist[i].tid+")'>审核</button></td>" +
                                "</tr >")
                        }
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
function handleAuthority(testauthority) {
    if (testauthority == 0) {
        return "未审核";
    } else if (testauthority == 1) {
        return "已审核";
    }
}

function deleteTest(tid) {
    //弹层
    layer.confirm('删除此条记录', {
        btn: ['确认', '取消'] //可以无限个按钮
    }, function (index, layero) {
        //按钮【按钮一】的回调
        let param = { "tid": tid };
        alert(tid)

        $.ajax({
            async: false,
            dataType: "json",
            type: "GET",
            url: "http://train.online.com/server/test/deletetest",
            data: param,
            success: function (data) {
                //根据返回值类型确定状态
                switch (data.code) {
                    case 0:
                        // 关闭弹层	
                        layer.close(layer.index);
                        layer.msg('删除成功')
                        window.location.reload;
                        break;
                    case 1:
                        // 关闭弹层	
                        layer.close(layer.index);
                        layer.msg('删除失败，请重新操作！');
                        break;
                };
            }
        })

    });

}

function changetype(tid){
    let t = 0;
    if(type == 1){
        t = 1;
    }
    let params = {"tid":tid,"type":t};
    $.ajax({
        async: false,
        dataType: "json",
        type: "GET",
        url: "http://train.online.com/server/test/changetype",
        data: params,
        success: function (data) {
            //根据返回值类型确定状态
            switch (data.code) {
                case 0:
                    layer.msg('成功')
                    window.location.reload();
                    break;
                case 1:
                    layer.msg('失败，请重新操作！');
                    break;
            };
        }
    })
}
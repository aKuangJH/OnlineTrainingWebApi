var dataCount = 0;
$(function () {
    showallinformation(1,10);
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
                showallinformation(obj.curr, 10);
            }
        });
    });
}

function showallinformation(pageNo,pageSize) {
    let params = {"pageNo":pageNo,"pageSize":pageSize};
    $.ajax({
        async: false,
        dataType: "json",
        type: "GET",
        url: "http://train.online.com/server/informationcollection/showallinformationcollection",
        data: params,
        success: function (data) {
            //根据返回值类型确定状态
            switch (data.code) {
                case 0:
                    $("tbody").html("");
                    dataCount = data.count;
                    for (let i = 0; i < data.infolist.length; i++) {
                        $("tbody").append("<tr>"+
                        "<td>"+i+"</td>"+
                        "<td>"+data.infolist[i].infotitle+"</td>"+
                        "<td>"+data.infolist[i].collecttime+"</td>"+
                        "<td>"+
                            "<button class='layui-btn layui-btn-normal layui-btn-sm' onclick='showinformationdetail("+data.infolist[i].infoid+")'>查看</button>"+
                            "<button class='layui-btn layui-btn-warm layui-btn-sm' onclick='canclecollect("+data.infolist[i].icid+")'>取消收藏</button>"+
                        "</td>"+
                    "</tr>")
                    }
                    break;
                case 1:
                    layer.msg('获取失败，请重新操作！');
                    break;
            };
        }
    })
}

function canclecollect(icid){
    //弹层
    layer.confirm('确认取消收藏', {
        btn: ['确认', '取消'] //可以无限个按钮
    }, function (index, layero) {
        //按钮【按钮一】的回调
        let param = {"icid":icid};
        $.ajax({
            dataType: "json",
            type: "GET",
            url: "http://train.online.com/server/informationcollection/cancleinformationcollection",
            data: param,
            success: function (data) {
                //根据返回值类型确定状态
                switch (data.code) {
                    case 0:
                        layer.msg("成功！");
                        setTimeout(() => {
                            window.location.reload();
                        }, 500);
                        break;
                    case 1:
                        layer.msg('失败，请重新操作！');
                        break;
                };
            }
        })

    });
}

function showinformationdetail(infoid){
    window.location.href = "http://train.online.com/html/main/information/informationdetail.html?infoid="+infoid;
}
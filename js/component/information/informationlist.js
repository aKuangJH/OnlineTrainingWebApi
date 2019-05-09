var style= 0;
$(function(){
    getstylelist();
    getstyleinfo();
    gethotinfo();
})

function getstylelist(){
    $.ajax({
        dataType: "json",
        async: false,
        type: "GET",
        url: "http://train.online.com/server/style/stylelist",
        // data: param,
        success: function (data) {
            //根据返回值类型确定状态
            switch (data.code) {
                case 0:
                for(let i=0;i<data.style.length;i++){
                    $(".leftlist").append("<dd><a href='#' onclick='changeinfo("+data.style[i].istyid+")'>"+data.style[i].style+"</a></dd>");
                }
                    break;
                case 1:
                    layer.msg('加载失败，请刷新');
                    break;
            };
        }
    })
}


function changeinfo(istyid){
    style = istyid;
    getstyleinfo();
}

function getstyleinfo(){
    layui.use('table', function () {
        var table = layui.table;
        // alert("====>"+style)
        //按照类型获取帖子
           table.render({
            elem: '#tablelist'
            ,where: {style: style}
            // ,height: 312
            , url: 'http://train.online.com/server/information/getinformationbystyle' //数据接口
            , cols: [[ //表头
                { field: 'infotitle', title: '标题', width: 200, sort: true, fixed: 'left', align: 'center' }
                , { field: 'infocontent', title: '内容', align: 'center' }
                , { field: 'createtime', title: '创建时间', width: 200, align: 'center' }
                , { field: 'createusername', title: '发帖人', width: 200, align: 'center'}
            ]]
            , page: true //开启分页
            , limit: 10
        });
    
        
        // 监听行单击事件
        table.on('row(test)', function (obj) {
            addhistory(obj.data.infoid);
            window.location.href = "http://train.online.com/html/main/information/informationdetail.html?infoid="+obj.data.infoid;
        });
    
        // //监听行双击事件
        // table.on('rowDouble(test)', function (obj) {
        //    alert("shuangji")
    
        // });
    
    });
}

function gethotinfo(){
    layui.use('table', function () {
        var table = layui.table;
    
           //第一个实例
           table.render({
            elem: '#hotlist'
            // ,height: 312
            , url: 'http://train.online.com/server/information/getallinformationlist' //数据接口
            , cols: [[ //表头
                { field: 'infotitle', title: '标题', width: 200, sort: true, fixed: 'left', align: 'center' }
                , { field: 'infocontent', title: '内容', align: 'center' }
                , { field: 'createtime', title: '创建时间', width: 200, align: 'center' }
                , { field: 'createusername', title: '发帖人', width: 200, align: 'center'}
            ]]
            // , page: true //开启分页
            , limit: 15
        });
    
        
        // 监听行单击事件
        table.on('row(test)', function (obj) {
            window.location.href = "http://train.online.com/html/main/information/informationdetail.html?infoid="+obj.data.infoid;
        });
    
        // //监听行双击事件
        // table.on('rowDouble(test)', function (obj) {
        //    alert("shuangji")
    
        // });
    
    });
}
    
function addhistory(infoid){

    let param ={"infoid":infoid};
    $.ajax({
        dataType: "json",
        type: "GET",
        data: param,
        url: "http://train.online.com/server/history/addinfohistory",
        // data: param,
        success: function (data) {
            //根据返回值类型确定状态
            switch (data.code) {
                case 0:
                    break;
                case 1:
                    break;
            };
        }
    })
}
    
$(function(){
    layer.msg("ssss");
})


layui.use('table', function () {
    var table = layui.table;

       //第一个实例
       table.render({
        elem: '#tablelist'
        // ,height: 312
        , url: 'http://train.online.com/server/information/getallinformationlist' //数据接口
        , cols: [[ //表头
            { field: 'infoid', title: '标题', width: 200, sort: true, fixed: 'left', align: 'center' }
            , { field: 'style', title: '内容', align: 'center' }
            , { field: 'createtime', title: '创建时间', width: 200, align: 'center' }
            , { field: 'infotitle', title: '发帖人', width: 200, align: 'center'}
        ]]
        , page: true //开启分页
        , limit: 10
    });

    
    // 监听行单击事件
    table.on('row(test)', function (obj) {
       alert("oooo")
    });

    //监听行双击事件
    table.on('rowDouble(test)', function (obj) {
       alert("shuangji")

    });

});
    
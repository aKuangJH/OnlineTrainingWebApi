layui.use('table', function () {
    var table = layui.table;

    //第一个实例
    table.render({
        elem: '#informationmanage'
        // ,height: 312
        , url: 'http://train.online.com/server/information/getallinformationlist' //数据接口
        , cols: [[ //表头
            { field: 'infoid', title: 'ID', width: 100, sort: true, fixed: 'left', align: 'center' }
            , { field: 'style', title: '类型', width: 100, align: 'center' }
            , { field: 'createtime', title: '时间', width: 200, align: 'center' }
            , { field: 'infotitle', title: '标题', align: 'center'}
            , { field: 'createusername', title: '创建者', width: 100, align: 'center' }
        ]]
        , page: true //开启分页
        , limit: 10
    });

    //监听行单击事件
    // table.on('row(test)', function (obj) {
    //     console.log(obj.tr) //得到当前行元素对象
    //     console.log(obj.data) //得到当前行数据
    //     //obj.del(); //删除当前行
    //     //obj.update(fields) //修改当前行数据
    // });

    //监听行双击事件
    table.on('rowDouble(test)', function (obj) {
        let ihid = obj.data.ihid;
        console.log(obj.data) //得到当前行元素对象

        //弹层
        layer.confirm('删除此条记录', {
            btn: ['确认', '取消'] //可以无限个按钮
        }, function (index, layero) {
            //按钮【按钮一】的回调
            let param = { "ihid": ihid };
            
            $.ajax({
                dataType: "json",
                type: "GET",
                url: "http://train.online.com/server/information/deleteinformation",
                data: param,
                success: function (data) {
                    //根据返回值类型确定状态
                    switch (data.code) {
                        case 0:
                            // 关闭弹层	
                            layer.close(layer.index);
                            layer.msg("删除成功！");
                            // obj.del();
                            setTimeout(function () {
                                window.location.reload();
                            }, 500);
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
    });

});
    
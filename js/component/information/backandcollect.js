function collectinformation(){
    // alert(infoid);
    let param = {"infoid":infoid};
    $.ajax({
        dataType: "json",
        async: false,
        type: "GET",
        url: "http://train.online.com/server/informationcollection/collectinformation",
        data: param,
        success: function (data) {
            //根据返回值类型确定状态
            switch (data.code) {
                case 0:
                    layer.msg("收藏成功！")
                    break;
                case 1:
                    layer.msg('失败，请重新操作！');
                    break;
                case -1:
                    layer.msg("已收藏！");
                    break; 
            };
        }
    })
}
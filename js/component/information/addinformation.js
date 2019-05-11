$(function(){
    $("#addinfo").click(function(){
        let infostyle = $("#infostyle option:selected").val();
        let infotitle = $("#infotitle").val();
        let infocontent = $("#infocontent").val();
        // alert(infostyle+"===="+infotitle+"===="+infocontent);
        if(!infotitle){
            layer.msg("请输入标题！")
            return false;
        }
        if(!infocontent){
            layer.msg("内容不能为空！")
            return false;
        }
        addinformation(infostyle,infotitle,infocontent);
    })
})

function addinformation(infostyle,infotitle,infocontent){
    let params = {"infotitle":infotitle,"infocontent":infocontent,"istyid":infostyle};
    $.ajax({
        dataType: "json",
        async: false,
        type: "GET",
        url: "http://train.online.com/server/information/addinformation",
        data: params,
        success: function (data) {
            //根据返回值类型确定状态
            switch (data.code) {
                case 0:
                    layer.msg("发表成功");
                    window.location.href = "http://train.online.com/html/main/information/informationdetail.html?infoid="+data.infoid;
                    break;
                case 1:
                    layer.msg('加载失败，请刷新');
                    break;
            };
        }
    })

}
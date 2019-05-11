var infoid = 0;
$(function(){
    if(GetQueryString("infoid")){
        infoid = GetQueryString("infoid");
    }
    getinformationdetail();
    addhistory();
})


function getinformationdetail(){
    let param = {"infoid":infoid};
    $.ajax({
        dataType: "json",
        async: false,
        type: "GET",
        url: "http://train.online.com/server/information/getinformationdetail",
        data: param,
        success: function (data) {
            //根据返回值类型确定状态
            switch (data.code) {
                case 0:
                    $("#title").text(data.info.infotitle);
                    $("#username").text(data.info.createusername);
                    $("#createtime").text(data.info.createtime);
                    $("#content").text(data.info.infocontent);
                    break;
                case 1:
                    layer.msg('获取失败，请刷新');
                    break;
            };
        }
    })
}

function addhistory(){

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


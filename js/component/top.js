var path = '../../../img/headpic/'
$(function () {
    //设置用户信息
    let uimg = get_cookie('uimg');
    let username = get_cookie('username');
    let role = get_cookie('role');

    // $(".headpic").attr("src", path + uimg);
    $(".usermsg img").attr("src", path + uimg);
    if (role == 1) {
        $(".usermsg span").text("管理员");
    } else if(role == 0){
        $(".usermsg span").text(username);
    }

    //清空Cookie
    $(".quit").click(function () {
        setCookie('uid', '', '-1');
        setCookie('username', '', '-1');
        setCookie('uimg', '', '-1');
        setCookie('role', '', '-1');
    })


    $(".navmenu").mouseover(function () {
        $(this).children("ul").show();
        // $(this).children("ul").append("<li><a href='#'>个人信息</a> </li>"+
        // "<li><a href='#'>考试记录</a> </li>"+
        // "<li><a href='#'>历史浏览</a> </li>")
    })

    $(".navmenu").mouseout(function () {
        $(this).children("ul").hide();
    })

})

// function addanswer(){
//     alert("llalal")
//     let param = {"0":"C","1":"D","2":"A","3":"D"}
//     let answer = JSON.stringify(param);
//     alert(answer)
//     let params = {"tid":"1","answer":answer};
//     $.ajax({
//         dataType: "json",
//         type: "POST",
//         url: "http://train.online.com/server/answer/loganswer",
//         data: params,
//         success: function (data) {
//             //根据返回值类型确定状态
//             switch (data.code) {
//                 case 0:

//                     break;
//                 case 1:
//                     layer.msg('删除失败，请重新操作！');
//                     break;
//             };
//         }
//     })
// }
function junpindex(){
    alert("haha")
    let role = get_cookie("role");
    if(role == 0){
        window.location.href = "http://train.online.com/html/main/index/index.html";
    }
}
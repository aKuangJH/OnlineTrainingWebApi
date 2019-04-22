var path = '../../img/headpic/'
$(function () {
    //设置用户信息
    let uimg = get_cookie('uimg');
    let username = get_cookie('username');
    let role = get_cookie('role');

    $(".layui-nav-img").attr("src",path + uimg);
    if(role == 1){
        $(".usermsg span").text("管理员");
    }else{
        $(".usermsg span").text(username);
    }
    
    //清空Cookie
    $(".quit").click(function(){
        setCookie('uid','','-1');
        setCookie('username','','-1');
        setCookie('uimg','','-1');
    })

})
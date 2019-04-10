$(document).ready(function() {
	init();
    baseParamInit();
    baseEventInit();
});
//显示信息的jq对象
var $message;
//所有事件初始化
function init(){
	$("#message").hide();
    $("#mask").addClass("login");
    $("#register_block").hide();
    //鼠标监听事件，用于背景图片特效
    document.onmousemove=function(e){
        var win_w=window.innerWidth ;
        var win_h=window.innerHeight ;
        var e=e? e:window.event;
        document.getElementById("index_bg_img").style.left = e.screenX/win_w*(-10)+"%";
        document.getElementById("index_bg_img").style.top = e.screenY/win_h*(-10)+"%";
    }
}
// 参数初始化
function baseParamInit(){
    $message = $("#message");
};
//事件注册及初始化
function baseEventInit(){
    //点击logo跳转主页
    $("#logo").click(function(){
        location.href="index.html";
    });
    //注册和登陆切换
    $("#nav_login").click(function(){
        $("#mask").removeClass("register").addClass("login");
        $("#mask").css("height","44vh");
        $("#login_block").fadeIn();
        $("#register_block").fadeOut();
    });
    $("#nav_register").click(function(){
        $("#mask").removeClass("login").addClass("register");
        $("#mask").css("height","58vh");
        $("#login_block").fadeOut();
        $("#register_block").fadeIn();
    });
    //业务逻辑实现
    loginAction();
    registerAction();
};
//登陆业务实现
function loginAction(){
    //登陆按钮点击
    $("#login").click(function(){
        var account = $("#login_account").val();
        var password = $("#login_password").val();
        //判断表单是否为空
        if(account==""&&$message.is(":hidden")){
            $message.html("请输入用户名").fadeIn(300).delay(2000).fadeOut(300);
        }
        if(password==""&&$message.is(":hidden")){
            $message.html("请输入密码").fadeIn(300).delay(2000).fadeOut(300);
        }
        params = {"uname":account,"upsw":password};
        $.ajax({
            dataType : "json",
            type : "POST",
            url : "../user/login",
            data : params,
            success : function(data) {
                //根据返回值类型确定状态
                switch(data.code){
                    case 0:
                        $message.html("No ueser or password error!").fadeIn(300).delay(2000).fadeOut(300);
                        break;
                    case 1:
                        location.href="zone/myzone.jsp";
                        // location.href="forum/allposts.jsp";
                        break;
                };
            }
        })
    })
}
//注册业务实现
function registerAction(){
    //登陆按钮点击
    $("#register").click(function(){
        var account = $("#register_account").val();
        var password = $("#register_password").val();
        var password1 = $("#register_password1").val();
        //判断表单是否为空
        if(account==""&&$message.is(":hidden")){
            $message.html("请输入用户名").fadeIn(300).delay(2000).fadeOut(300);
            return;
        }
        if(password==""&&$message.is(":hidden")){
            $message.html("请输入密码").fadeIn(300).delay(2000).fadeOut(300);
            return;
        }
        if(password1==""&&$message.is(":hidden")){
            $message.html("请输入确认密码").fadeIn(300).delay(2000).fadeOut(300);
            return;
        }
        if(password!=password1){
            $message.html("两次密码不一致").fadeIn(300).delay(2000).fadeOut(300);
            return;
        }
        params = {"uname":account,"upsw":password};
        $.ajax({
            dataType : "json",
            type : "post",
            url : "RegisterAction",
            data : {
                account : account,
                password : password
            },
            success : function(data) {
                //根据返回值类型确定状态
                switch(data.state){
                    case 0:
                        $message.html("Already existing users!").fadeIn(300).delay(2000).fadeOut(300);
                        break;
                    case 1:
                        location.href="index.html";
                        break;
                };
            }
        })
    })
};
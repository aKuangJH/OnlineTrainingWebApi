$(function () {
    showDiffList();
})

//根据权限展示不同列表
function showDiffList() {
    let role = get_cookie("role");
    if (role == 1) {
        $(".layui-nav-tree").html("<li class='layui-nav-item layui-nav-itemed'>"+
            "<a href = 'javascript:;' >帖子模块</a >"+
            "<dl class='layui-nav-child'>"+
                "<dd><a href='http://train.online.com/html/manage/foradmin/allinformation.html'>帖子管理</a></dd>"+
                "<dd><a href='#'>帖子审核</a></dd>"+
            "</dl>"+
            "</li >"+
            "<li class='layui-nav-item layui-nav-itemed'>"+
                "<a href='javascript:;'>套题模块</a>"+
                "<dl class='layui-nav-child'>"+
                    "<dd><a href='#'>套题管理</a></dd>"+
                    "<dd><a href='#'>套题审核</a></dd>"+
                "</dl>"+
            "</li>"+
            "<li class='layui-nav-item layui-nav-itemed' style='line-height: 50px'>"+
                "<a href='javascript:;'>权限管理</a>"+
                "<dl class='layui-nav-child'>"+
                    "<dd><a href='#'>用户权限</a></dd>"+
                "</dl>"+
            "</li>");
    }

}
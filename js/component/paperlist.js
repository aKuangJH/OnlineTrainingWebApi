var dataCount = 0;
$(function() {
    getAllTest(1,6);
    pageHelper(dataCount);
    // getAllTest();
});

// 分页
function pageHelper(dataCount){
    layui.use('laypage', function(){
        var laypage = layui.laypage;
        //执行一个laypage实例
        laypage.render({
             elem: 'pagehelper' //注意，这里ID，不用加 # 号
            ,count: dataCount //数据总数，从服务端得到
            ,limit:6
            ,jump: function(obj, first){
                getAllTest(obj.curr,6);
            }
        });
    });
}

function getAllTest(pageNo, pageSize){
    let params = {"pageNo":pageNo,"pageSize":pageSize};
    $.ajax({
        async: false,
        type: 'post',
        url: 'http://train.online.com/server/test/gettotaltest',
        data: params,
        dataType: 'json',
        error: function(XmlHttpRequest, textStatus, errorThrown) {
            console.log("操作失败!");
        },
        success: function(data) {
            switch(data.code){
                case 0:
                    dataCount = data.count;
                    // alert(dataCount)
                    $('.paperlist').html("");
                    for(var i=0;i<data.testlist.length;i++){
                      var time = parseTime(`${data.testlist[i].createtime}`);
                      $('.paperlist').append(`
                      <div class="item">
                          <div class="details">
                              <h3>${data.testlist[i].tname}</h3>
                              <i class="logo"></i>
                              <i class="creater">创建者：${data.testlist[i].uid}</i>
                              <i class="hoti">创建时间：${time}</i>
                          </div>
                      </div>`);
                    }
                  break;
                case 1:
                  layer.msg('更新失败，请重新获取！');
                  break;
          }
      }});
}
$(document).ready(function(){
    // 切换试题库标签
    var plabel1=document.getElementsByClassName('label')[0];
    var plabel2=document.getElementsByClassName('label')[1];
    plabel1.onclick=function(){
        if(plabel1.className=='label'){
            plabel1.className="label active";
        }else{
            plabel1.className="label";
        }
        plabel2.className="label";
    };
    plabel2.onclick=function(){
        if(plabel2.className=='label'){
            plabel2.className="label active";
        }else{
            plabel2.className="label";
        }
        plabel1.className="label";
    };
});

(
    function(){
        let param = {"tid":19};
        $.ajax({
            type: 'post',
            url: 'http://train.online.com/server/question/showallquestions',
            dataType: 'json',
            data: param,
            error: function (XmlHttpRequest, textStatus, errorThrown) {
                console.log("操作失败!");
            },
            success: function (data) {
                switch (data.code) {
                    case 0:
                        var problems = document.getElementsByClassName('problems')[0];
                        var list = problems.getElementsByClassName('list')[0];
                        if (data.questionlist.length != 0) {
                            for (var i = 0; i < data.questionlist.length; i++) {
                                var oLi = U.create('li');
                                var q = U.create('div');
                                q.className = 'question';
                                q.innerHTML = `<span class="index">${i + 1}.</span>${data.questionlist[i].qtitle}`;
                                var Awrap = U.create('div');
                                Awrap.className = 'answer';
                                if (data.questionlist[i].qstyle == 0) {
                                    //选择
                                    $('.type').innertext = `[选择题]`;
                                    for (var j in data.questionlist[i].options) {
                                        var As = U.create('a');
                                        As.setAttribute('href', 'javascript:void(0);');
                                        As.setAttribute('id', `choice_${data.questionlist[i].qid}_${j}`);
                                        if(j=='A'){
                                            As.name=0;
                                        }else if(j=='B'){
                                            As.name=1;
                                        }else if(j=='C'){
                                            As.name=2;
                                        }else if(j=='D'){
                                            As.name=3;
                                        }
                                        As.className = 'options';
                                        var Alabel = U.create('label');
                                        Alabel.className = 'radio';
                                        var icon = U.create('span');
                                        icon.className = 'icons';
                                        var choose = U.create('class', 'choose');
                                        choose.className = 'choose';
                                        var inp = U.create("input");
                                        var pre = U.create('pre');
                                        pre.innerHTML=`${data.questionlist[i].options[j]}`;
                                        inp.setAttribute('type','radio');
                                        inp.setAttribute('checked','checked');
                                        inp.name=`choiceinp_${data.questionlist[i].qid}_${j}`;
                                        As.status = 1; 
                                        U.append(icon, choose);
                                        U.append(Alabel, icon);
                                        U.append(Alabel, inp);
                                        U.append(Alabel, pre);
                                        U.append(As, Alabel);
                                        U.append(Awrap, As);
                                    }
                                } else if (data.questionlist[i].qstyle == 1) {
                                    //填空
                                    $('.type').innertext = `[填空题]`;
                                    Awrap.innerHTML = `<span>你的回答：</span>
                                    <input type="text" id='blank_${data.questionlist[i].qid}' class="blankanswer"/>`
                                }
                                U.append(oLi, q);
                                U.append(oLi, Awrap);
                                U.append(list, oLi);

                            }
                        }

                        // 第二次调用接口
                        $.ajax({
                            type: 'post',
                            url: 'http://train.online.com/server/answer/gettestanswer?tid=19&aid=34&gid=10',
                            dataType: 'json',
                            error: function(XmlHttpRequest, textStatus, errorThrown) {
                                console.log("操作失败!");
                            },
                            success: function(data) {
                                switch(data.code){
                                    case 0:
                                        $('.msg').innerHTML=`<p class="time">创建时间：${data.answer.createtime}</p>
                                        <p class="grade">历史得分：${data.answer.grade}</p>`;
                                        var useranswer = transformObjToArr(data.answer.uanswer);                        
                                        var rightanswer = transformObjToArr(data.answer.ranswer);
                                        if($('.type').innertext=`[选择题]`){
                                            $.each(useranswer,function(index,value){
                                                // console.log(index+"..."+value);
                                                $.each(rightanswer,function(i,val){
                                                    if(index==i&&value==val){
                                                        $('.list li').each(function(ii,vv){
                                                            var a = $(this).children('.answer').children('a');
                    
                                                            a.each(function(){
                                                                if($(this).attr('name')==index){
                                                                    //选择
                                                                    $(this).find('.choose').css({
                                                                        display: 'inline-block'
                                                                    });
                                                                    $(this).find('pre').css({
                                                                        color: "#25bb9b"
                                                                    });
                                                                    $(this).siblings().find('.choose').css({
                                                                        display: 'none'
                                                                    });
                                                                    $(this).siblings().find('pre').css({
                                                                        color: '#333'
                                                                    });
                                                                }
                                                            })
                                                            
                                                        });
                                                    }else if(index==i&&value!=val&&value!=''){
                                                        //    console.log('不行',index);
                                                        $('.list li').each(function(ii,vv){
                                                            var a = $(this).children('.answer').children('a');
                    
                                                            a.each(function(){
                                                                if($(this).attr('name')==i){
                                                                    //正确答案
                                                                    $(this).find('.choose').css({
                                                                        display: 'inline-block'
                                                                    });
                                                                    $(this).find('pre').css({
                                                                        color: "#25bb9b"
                                                                    });
                                                                    
                                                                }
                                                                if($(this).attr('name')==index){
                                                                    //用户答案
                                                                    $(this).find('.choose').css({
                                                                        display: 'inline-block',
                                                                        color:'#ff0000'
                                                                    });
                                                                    $(this).find('pre').css({
                                                                        color: "#ff0000"
                                                                    });
                                                                    
                                                                }
                                                                $(this).siblings().find('.choose').css({
                                                                    display: 'none'
                                                                });
                                                                $(this).siblings().find('pre').css({
                                                                    color: '#333'
                                                                });
                                                            })
                                                            
                                                        });
                                                    }
                                               });
                                           });
                                        }else if($('.type').innertext=`[填空题]`){
                                           
                                        }
                            
                                        
                                        
                                      break;
                                    case 1:
                                      layer.msg('更新失败，请重新获取！');
                                      break;
                                }
                            }
                        })

                        break;
                    case 1:
                      layer.msg('更新失败，请重新获取！');
                      break;
                }
        }});

    }
)();
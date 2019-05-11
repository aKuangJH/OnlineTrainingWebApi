(   
   
    function(){
        let tid = GetQueryString('tid');
        let param = {"tid":tid};

        var cache=[{
            tid:'',
            answer:''
        }];
        
        var answerArr=[],answerObj={};
        $.ajax({
            type: 'post',
            url: 'http://train.online.com/server/question/showallquestions',
            dataType: 'json',
            data:param,
            error: function(XmlHttpRequest, textStatus, errorThrown) {
                console.log("操作失败!");
            },
            success: function(data) {
                switch(data.code){
                    case 0:
                        var problems = document.getElementsByClassName('problems')[0];
                        var list = problems.getElementsByClassName('list')[0];
                        if(data.questionlist.length!=0){
                            var oLi = U.create('li');
                            var q = U.create('div');
                            oLi.index=i;
                            q.className='question';
                            q.innerHTML=`<span class="index">${i+1}.</span>${data.questionlist[i].qtitle}`;
                            var Awrap = U.create('div');
                            Awrap.className='answer';
                            if(data.questionlist[i].qstyle==0){
                                //选择
                                $('.type').innertext=`[选择题]`;
                                for(var i=0;i<data.questionlist.length;i++){

                                    for(var j in data.questionlist[i].options){
                                        var As = U.create('a');
                                        As.setAttribute('href','javascript:void(0);');
                                        As.setAttribute('id',`choice_${data.questionlist[i].qid}_${j}`);
                                        As.className='options';
                                        var Alabel = U.create('label');
                                        Alabel.className='radio';         
                                        var icon = U.create('span');
                                        icon.className='icons';
                                        var choose = U.create('class','choose');
                                        choose.className='choose';
                                        var inp = U.create("input");
                                        var pre = U.create('pre');
                                        pre.innerHTML=`${data.questionlist[i].options[j]}`;
                                        inp.setAttribute('type','radio');
                                        inp.setAttribute('checked','checked');
                                        inp.name=`choice_${data.questionlist[i].qid}`;
                                        As.status = 1; 
                                        As.onclick=function(){
                                            $(this).find('.choose').css({
                                                display:'inline-block'
                                            });   
                                            $(this).find('pre').css({
                                                color:"#25bb9b"
                                            });     
                                            $(this).siblings().find('.choose').css({
                                                display:'none'
                                            });
                                            $(this).siblings().find('pre').css({
                                                color:'#333'
                                            });
                                            //存入cache
                                            cache.tid=GetQueryString("tid");
                                            answerArr.push($(this).id.charAt($(this).id.length-1));
                                        }

                                        U.append(icon,choose);
                                        U.append(Alabel,icon);
                                        U.append(Alabel,inp);
                                        U.append(Alabel,pre);
                                        U.append(As,Alabel);
                                        U.append(Awrap,As);
                                    }
                                    
                                }
                            }else if(data.questionlist[i].qstyle==1){
                                //填空
                                $('.type').innertext=`[填空题]`;
                                for(var i=0;i<data.questionlist.length;i++){
                                    Awrap.innerHTML=`<span>你的回答：</span>
                                    <input type="text" id='blank_${data.questionlist[i].qid}' class="blankanswer"/>`
                                     //存入cache
                                     cache.tid=GetQueryString("tid");
                                     answerArr.push($('.blankanswer').value);
                                 }
                            }
                            U.append(oLi,q);
                            U.append(oLi,Awrap);  
                            U.append(list,oLi);

                            for (index in answerArr) {
                                answerObj[index] = answerArr[index];
                            }
                        }
                        cache.answer=JSON.stringify(answerObj);
                        
                        // 填空选择分离展示 不方便控制答案的传回数据库 修改为上面的效果
                        // var choiceData=[];
                        // var blankData=[];
                        // for(var i=0;i<data.questionlist.length;i++){
                        //     if(data.questionlist[i].qstyle==0){
                        //         choiceData.push(data.questionlist[i]);
                        //     }else if(data.questionlist[i].qstyle==1){
                        //         blankData.push(data.questionlist[i]);
                        //     }
                        // }
                        
                        // console.log(choiceData);
                        // console.log(blankData);
                        // // 填空
                        // var blank = document.getElementsByClassName('blank')[0];
                        // blank.className='blank';
                        // var blankList = blank.getElementsByClassName('list')[0];
                        // blankList.className='list';
                        // if(blankData.length!=0){
                        //     for(var i=0;i<blankData.length;i++){
                        //         var oLi = U.create('li');
                        //         var q = U.create('div');
                        //         q.className='question';
                        //         q.innerHTML=`<span class="index">${i+1}.</span>${blankData[i].qtitle}`;
                        //         var Awrap = U.create('div');
                        //         Awrap.className='answer';
                        //         Awrap.innerHTML=`<span>你的回答：</span>
                        //         <input type="text" id='blank_${blankData[i].qid}' class="blankanswer"/>`
                        //         U.append(oLi,q);
                        //         U.append(oLi,Awrap);
                        //         U.append(blankList,oLi);
                        //     }
                        //     U.append(blank,blankList);
                        // }else{
                        //     $('.blank').css({
                        //         display:'none'
                        //     })
                        // }

                        // // 选择
                        // if(choiceData.length!=0){
                        //     for(var i=0;i<choiceData.length;i++){
                        //         var oLi = U.create('li');
                        //         oLi.index=i;
                        //         var q = U.create('div');
                        //         q.className='question';
                        //         q.innerHTML=`<span class="index">${i+1}.</span>${choiceData[i].qtitle}`;
                        //         var Awrap = U.create('div');
                        //         Awrap.className='answer';
                        //         console.log(choiceData[i].options);
                        //         for(var j in choiceData[i].options){
                        //             var As = U.create('a');
                        //             As.setAttribute('href','javascript:void(0);');
                        //             As.setAttribute('id',`choice_${choiceData[i].qid}_${j}`);
                        //             As.className='options';
                        //             var Alabel = U.create('label');
                        //             Alabel.className='radio';         
                        //             var icon = U.create('span');
                        //             icon.className='icons';
                        //             var choose = U.create('class','choose');
                        //             choose.className='choose';
                        //             var inp = U.create("input");
                        //             var pre = U.create('pre');
                        //             pre.innerHTML=`${choiceData[i].options[j]}`;
                        //             inp.setAttribute('type','radio');
                        //             inp.setAttribute('checked','checked');
                        //             inp.name=`choice_${choiceData[i].qid}`;
                        //             As.status = 1; 
                        //             As.onclick=function(){
                        //                 $(this).find('.choose').css({
                        //                     display:'inline-block'
                        //                 });   
                        //                 $(this).find('pre').css({
                        //                     color:"#25bb9b"
                        //                 });     
                        //                 $(this).siblings().find('.choose').css({
                        //                     display:'none'
                        //                 });
                        //                 $(this).siblings().find('pre').css({
                        //                     color:'#333'
                        //                 });
                        //                 //存入cache
                        //                 cache.tid=GetQueryString("tid");
                        //                 if(){

                        //                 }
                        //                 answer.push($(this).id.charAt($(this).id.length-1));
                                        
                        //                 // answer.push({$(this).parent().parent().index:$(this).id.charAt($(this).id.length-1)});
                        //             }

                        //             U.append(icon,choose);
                        //             U.append(Alabel,icon);
                        //             U.append(Alabel,inp);
                        //             U.append(Alabel,pre);
                        //             U.append(As,Alabel);
                        //             U.append(Awrap,As);
    
                        //             U.append(oLi,q);
                        //             U.append(oLi,Awrap);
                                    
                        //         }
                        //         U.append(list,oLi);
                        //     }
                        // }else{
                        //     $('.choice').css({
                        //         display:'none'
                        //     })
                        // }    

                        

                      break;
                    case 1:
                      layer.msg('更新失败，请重新获取！');
                      break;
              }
          }});
        $('.yes').click(function(){
            $('.alertwrap').css({
                display:'block'
            });
            $('.alert').css({
                display:'block'
            });
        })
        $('.icon-close').click(function(){
            $('.alertwrap').css({
                display:'none'
            });
            $('.alert').css({
                display:'none'
            })
        });
        $('.choose .no').click(function(){
            // alert('返回答题界面');
            $('.alertwrap').css({
                display:'none'
            });
            $('.alert').css({
                display:'none'
            });
        });
        $('.choose .yes').click(function(){
            //点击确认时，发送数据cache
            // alert('提交');
            $('.alertwrap').css({
                display:'none'
            });
            $('.alert').css({
                display:'none'
            });
            $.ajax({
                type: 'post',
                url: 'http://train.online.com/server/answer/loganswer',
                dataType: 'json',
                data:{cache},
                error: function(XmlHttpRequest, textStatus, errorThrown) {
                    console.log("传递数据失败!");
                },
                success: function(data) {
                    if(data){
                        window.open('','_blank');
                        alert('提交成功');
                    }else{
                        alert('failed');
                    }

                }
            })
        });
    }
)();

(   
   
    function(){
        let tid = GetQueryString('tid');
        let param = {"tid":tid};
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
                        var choiceData=[];
                        var blankData=[];
                        for(var i=0;i<data.questionlist.length;i++){
                            if(data.questionlist[i].qstyle==0){
                                choiceData.push(data.questionlist[i]);
                            }else if(data.questionlist[i].qstyle==1){
                                blankData.push(data.questionlist[i]);
                            }
                        }
                        console.log(choiceData);
                        console.log(blankData);
                        var choice = document.getElementsByClassName('choice')[0];
                        var list = choice.getElementsByClassName('list')[0];
                        // 选择
                        if(choiceData.length!=0){
                            for(var i=0;i<choiceData.length;i++){
                                var oLi = U.create('li');
                                var q = U.create('div');
                                q.className='question';
                                q.innerHTML=`<span class="index">${i+1}.</span>${choiceData[i].qtitle}`;
                                var Awrap = U.create('div');
                                Awrap.className='answer';
                                console.log(choiceData[i].options);
                                for(var j in choiceData[i].options){
                                    var As = U.create('a');
                                    As.setAttribute('href','javascript:void(0);');
                                    As.setAttribute('id',`${choiceData[i].qid}`);
                                    As.setAttribute('value',`${j}`);
                                    As.className='options';
                                    var Alabel = U.create('label');
                                    Alabel.className='radio';         
                                    var icon = U.create('span');
                                    icon.className='icons';
                                    var choose = U.create('class','choose');
                                    choose.className='choose';
                                    var inp = U.create("input");
                                    var pre = U.create('pre');
                                    pre.innerHTML=`${choiceData[i].options[j]}`;
                                    inp.setAttribute('type','radio');
                                    inp.setAttribute('id','radiogroup');
                                    // inp.setAttribute('checked','checked');
                                    inp.name=`choice_${choiceData[i].qid}`;
                                    inp.setAttribute('value',`${j}`)
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
                                    }

                                    U.append(icon,choose);
                                    U.append(Alabel,icon);
                                    U.append(Alabel,inp);
                                    U.append(Alabel,pre);
                                    U.append(As,Alabel);
                                    U.append(Awrap,As);
    
                                    U.append(oLi,q);
                                    U.append(oLi,Awrap);
                                    
                                }
                                U.append(list,oLi);
                            }
                        }else{
                            $('.choice').css({
                                display:'none'
                            })
                        }       

                        // 填空
                        var blank = document.getElementsByClassName('blank')[0];
                        blank.className='blank';
                        var blankList = blank.getElementsByClassName('list')[0];
                        blankList.className='list';
                        if(blankData.length!=0){
                            for(var i=0;i<blankData.length;i++){
                                var oLi = U.create('li');
                                var q = U.create('div');
                                q.className='question';
                                q.innerHTML=`<span class="index">${i+1}.</span>${blankData[i].qtitle}`;
                                var Awrap = U.create('div');
                                Awrap.className='answer';
                                Awrap.innerHTML=`<span>你的回答：</span>
                                <input type="text" id='blank_${blankData[i].qid}' class="blankanswer"/>`
                                U.append(oLi,q);
                                U.append(oLi,Awrap);
                                U.append(blankList,oLi);
                            }
                            U.append(blank,blankList);
                        }else{
                            $('.blank').css({
                                display:'none'
                            })
                        }


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

        $('.alert .no').click(function(){
            $('.alertwrap').css({
                display:''
            });
            $('.alert').css({
                display:''
            });
        })

        $('.alert .yes').click(function(){
            let qanswerli = $(".choice .list li");
            let tanswerli = $(".blank .list li");

            alert($(".choice .list li").eq(0).children("#radiogroup:checked").val());
            // for(let i=0;i<qanswerli.length;i++){
            //     let a = $(".choice .list li")
            // }

        
            // for(let i=0;i<qanswerli.length;i++){
            //     console.log(qans)
            // }
            // $.ajax({
            //     dataType: "json",
            //     type: "GET",
            //     url: "http://train.online.com/server/history/deleteinfohistory",
            //     data: param,
            //     success: function (data) {
            //         //根据返回值类型确定状态
            //         switch (data.code) {
            //             case 0:
            //                 // 关闭弹层	
            //                 layer.close(layer.index);
            //                 layer.msg("删除成功！");
            //                 // obj.del();
            //                 setTimeout(function () {
            //                     window.location.reload();
            //                 }, 500);
            //                 break;
            //             case 1:
            //                 // 关闭弹层	
            //                 layer.close(layer.index);
            //                 layer.msg('删除失败，请重新操作！');
            //                 break;
            //         };
            //     }
            // })
        })
        
        
    }
)();

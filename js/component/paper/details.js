(
    function(){
        var data=[{
            qid:'1',
            sid:'214',
            qtitle:'你饿了吗？',
            qstyle:0,
            options:['饿','不饿','没想过','稍微']
        },{
            qid:'3',
            sid:'154',
            qtitle:'你___',
            qstyle:1
        },{
            qid:'1324',
            sid:'323',
            qtitle:'你冷吗？',
            qstyle:0,
            options:['冷','不冷','热','稍微']
        }];
        var choiceData=[];
        var blankData=[];
        for(var i=0;i<data.length;i++){
            if(data[i].qstyle==0){
                choiceData.push(data[i]);
            }else if(data[i].qstyle==1){
                blankData.push(data[i]);
            }
        }
        console.log(choiceData);
        console.log(blankData);
        var choice = document.getElementsByClassName('choice')[0];
        var list = choice.getElementsByClassName('list')[0];

        // 选择        
        for(var i=0;i<choiceData.length;i++){
            var oLi = U.create('li');
            var q = U.create('div');
            q.className='question';
            q.innerHTML=`<span class="index">${i+1}.</span>${choiceData[i].qtitle}`;
            var Awrap = U.create('div');
            Awrap.className='answer';
            for(var j=0;j<choiceData[i].options.length;j++){
                var As = U.create('a');
                As.setAttribute('href','javascript:void(0);');
                As.setAttribute('id',`choice_${choiceData[i].qid}_${j}`);
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
                inp.setAttribute('checked','checked');
                inp.name=`choice_${choiceData[i].qid}`;
                As.status = 1; 
                As.onclick=function(){
                    // console.log(this);
                    $(this).className='options';
                    $(this).siblings().className='options';//不起作用
                    if(this.className=="options"){
                        this.className='options selected';
                        $(this).siblings().className="options";
                        $(this).find('pre').css({
                            color:"#25bb9b"
                        });
                        $(this).find('.choose').css({
                            display:"inline-block"
                        });
                        As.status = 2; 
                    }else if(this.className=='options selected'){
                        this.className='options';
                        $(this).siblings().className="options";
                        $(this).find('pre').css({
                            color:"#333"
                        });
                        $(this).find('.choose').css({
                            display:"none"
                        });
                        As.status = 1; 
                    }     
                    if($(this).siblings('options selected')){
                        $(this).siblings().className="options";
                    }         
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

        var blank = document.getElementsByClassName('blank')[0];
        blank.className='blank';
        var blankList = blank.getElementsByClassName('list')[0];
        blankList.className='list';
        // 填空
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
    }
)();

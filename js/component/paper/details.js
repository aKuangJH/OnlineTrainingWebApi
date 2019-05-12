(

    function () {
        let tid = GetQueryString('tid');
        let param = { "tid": tid };

        var cache = [{
            tid: '',
            answer: ''
        }];

        var answerArr = [], answerObj = {};
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
                                        As.onclick=function(){
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
                                    //存入cache
                                    cache.tid = GetQueryString("tid");

                                }
                                U.append(oLi, q);
                                U.append(oLi, Awrap);
                                U.append(list, oLi);

                            }
                        }

                        break;
                    case 1:
                      layer.msg('更新失败，请重新获取！');
                      break;
                }
          }});
        $('.yes').click(function(){
            $('.alertwrap').css({
                display: 'block'
            });
            $('.alert').css({
                display: 'block'
            });
        })
        $('.icon-close').click(function () {
            $('.alertwrap').css({
                display: 'none'
            });
            $('.alert').css({
                display: 'none'
            })
        });
        $('.choose .no').click(function () {
            // alert('返回答题界面');
            $('.alertwrap').css({
                display: 'none'
            });
            $('.alert').css({
                display: 'none'
            });
        });
        $('.choose .yes').click(function () {
            //点击确认时，发送数据cache
            // alert('提交');
            $('.alertwrap').css({
                display: 'none'
            });
            $('.alert').css({
                display: 'none'
            });
            // 存入cache
            $('.list li').each(function () {
                var a = $(this).children('.answer').children('a');
                var span = $(this).children('.answer').children('span');

                if(a.length!=0){
                    a.each(function(){
                        console.log($(this).find('pre').css('color'));
                        if($(this).find('pre').css('color')=="rgb(37, 187, 155)"){
                            //选择
                            answerArr.push($(this).find('pre').siblings('input').attr("name").slice(-1));
                        }
                    })
                }else if(a.length==0&&span.length==1){
                    //填空
                    answerArr.push($('.blankanswer').val());
                }
            });
            for (index in answerArr) {
                answerObj[index] = answerArr[index];
            }
            console.log(JSON.stringify(answerObj))

            cache.answer = JSON.stringify(answerObj);
            let params = {"tid":tid,"answer":cache.answer};
            $.ajax({
                type: 'post',
                url: 'http://train.online.com/server/answer/loganswer',
                dataType: 'json',
                data: params,
                error: function (XmlHttpRequest, textStatus, errorThrown) {
                    console.log("传递数据失败!");
                },
                success: function (data) {
                    if (data) {
                        // window.location.
                        alert('提交成功');
                    } else {
                        alert('failed');
                    }

                }
            })
        });
    }
)();

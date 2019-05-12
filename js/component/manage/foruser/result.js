$(function () {
    var tid = GetQueryString("tid");
    var aid = GetQueryString("aid");
    var gid = GetQueryString("gid");
    showallquestions(tid,aid,gid);
    // getanswer();
})

function getanswer(tid, aid, gid) {
    let params = { "tid": tid, "aid": aid, "gid": gid };
    $.ajax({
        // async: false,
        dataType: "json",
        type: "GET",
        url: "http://train.online.com/server/answer/gettestanswer",
        data: params,
        success: function (data) {
            //根据返回值类型确定状态
            switch (data.code) {
                case 0:
                    let myanswer = JSON.parse(data.answer.uanswer);
                    let ranswer = JSON.parse(data.answer.ranswer);
                    // for (var p in myanswer) {
                        let chooselength = $(".questionlist #choose").length;
                        let writelength = $(".questionlist #write").length;
                        // alert(chooselength);
                        //选择题
                        for(let p=0;p<chooselength;p++){
                        // $(".questionlist .questionitem").eq(p).find("#qs").eq(0).css("background-color","#66DD00");
                        // $(".questionlist .questionitem").eq(p).find("#qs").eq(0).css("background-color","#FF3333");
                        // console.log(p + "===>" + myanswer[p]);
                        // console.log(p + "===>" + ranswer[p]);
                        if (myanswer[p] == ranswer[p]) {
                            //答案相同
                            console.log(p + "相等" + ranswer[p]);
                            if (ranswer[p] == 'A') {
                                $(".questionlist .questionitem").eq(p).find("#qa").css("background-color", "#66DD00");
                            } else if (ranswer[p] == 'B') {
                                $(".questionlist .questionitem").eq(p).find("#qb").css("background-color", "#66DD00");
                            } else if (ranswer[p] == 'C') {
                                $(".questionlist .questionitem").eq(p).find("#qc").css("background-color", "#66DD00");
                            } else if (ranswer[p] == 'D') {
                                $(".questionlist .questionitem").eq(p).find("#qd").css("background-color", "#66DD00");
                            }
                        } else {
                            console.log(p + "我的答案===>" + myanswer[p]);
                            console.log(p + "正确答案===>" + ranswer[p]);
                            //答案不同
                            //正确答案填色
                            if (ranswer[p] == 'A') {
                                $(".questionlist .questionitem").eq(p).find("#qa").css("background-color", "#66DD00");
                            } else if (ranswer[p] == 'B') {
                                $(".questionlist .questionitem").eq(p).find("#qb").css("background-color", "#66DD00");
                            } else if (ranswer[p] == 'C') {
                                $(".questionlist .questionitem").eq(p).find("#qc").css("background-color", "#66DD00");
                            } else if (ranswer[p] == 'D') {
                                $(".questionlist .questionitem").eq(p).find("#qd").css("background-color", "#66DD00");
                            }
                            // 错误答案填色
                            if (myanswer[p] == 'A') {
                                $(".questionlist .questionitem").eq(p).find("#qa").css("background-color","#FF3333");
                            } else if (myanswer[p] == 'B') {
                                $(".questionlist .questionitem").eq(p).find("#qb").css("background-color","#FF3333");
                            } else if (myanswer[p] == 'C') {
                                $(".questionlist .questionitem").eq(p).find("#qc").css("background-color","#FF3333");
                            } else if (myanswer[p] == 'D') {
                                $(".questionlist .questionitem").eq(p).find("#qd").css("background-color","#FF3333");
                            }
                        }
                        
                    }

                    //填空
                    for(let i=writelength;i>0;i--){
                        let p = 10-i;
                        if(myanswer[p] == ranswer[p]){
                            $(".questionlist .questionitem").eq(p).find("#qs").css("background-color", "#66DD00");
                        }else{
                            $(".questionlist .questionitem").eq(p).find("#qs").css("background-color", "#FF3333");
                        }
                    }
                    break;
                case 1:
                    layer.msg('答题记录获取失败！');
                    break;
            };
        }
    })
}

function collectionquestion(qid){
    let param = {"qid":qid};
    $.ajax({
        dataType: "json",
        type: "POST",
        url: "http://train.online.com/server/questioncollection/collectquestion",
        data: param,
        success: function(data) {
            //根据返回值类型确定状态
            switch (data.code) {
                case 0:
                    layer.msg("成功收藏！");	
                    break;
                case 1:
                    layer.msg('收藏失败！');
                    break;
                case -1:
                    layer.msg("已收藏！");
                    break;    
            };
        }
    })
}


function showallquestions(tid,aid,gid) {
    let param = { "tid": tid };
    $.ajax({
        async: false,
        dataType: "json",
        type: "GET",
        url: "http://train.online.com/server/question/showallquestions",
        data: param,
        success: function (data) {
            //根据返回值类型确定状态
            switch (data.code) {
                case 0:
                    layer.msg("ok");
                    for (let i = 0; i < data.questionlist.length; i++) {
                        if (data.questionlist[i].qstyle == 0) {
                            $(".questionlist").append("<div class='questionitem' id='choose'>" +
                                "<div class='collectoption'>" +
                                "<span class='qid'>" + i + "</span>" +
                                "<button id='col' class='layui-btn layui-btn-xs layui-btn-warm' onclick='collectionquestion("+data.questionlist[i].qid+")'>收藏</button>" +
                                "</div>" +
                                "<div class='qtitle'>" +
                                "问题:" +
                                "<p class='title'>" + data.questionlist[i].qtitle + "</p>" +
                                "</div>" +
                                "<div id='qa' class='layui-form-item'>" +
                                "<label class='layui-form-label'>选项A:</label>" +
                                "<div class='layui-input-block'>" +
                                "<input type='text' class='layui-input' disabled value='" + data.questionlist[i].options.optionA + "'>" +
                                "</div>" +
                                "</div>" +
                                "<div id='qb' class='layui-form-item'>" +
                                "<label class='layui-form-label'>选项B:</label>" +
                                "<div class='layui-input-block'>" +
                                "<input type='text' class='layui-input' disabled value='" + data.questionlist[i].options.optionB + "'>" +
                                "</div>" +
                                "</div>" +
                                "<div id='qc' class='layui-form-item'>" +
                                "<label class='layui-form-label'>选项C:</label>" +
                                "<div class='layui-input-block'>" +
                                "<input type='text' class='layui-input' disabled value='" + data.questionlist[i].options.optionC + "'>" +
                                "</div>" +
                                "</div>" +
                                "<div id='qd' class='layui-form-item'>" +
                                "<label class='layui-form-label'>选项D:</label>" +
                                "<div class='layui-input-block'>" +
                                "<input type='text' class='layui-input' disabled value='" + data.questionlist[i].options.optionD + "'>" +
                                "</div>" +
                                "</div>" +
                                "</div>");
                        } else if (data.questionlist[i].qstyle == 1) {
                            $(".questionlist").append("<div class='questionitem' id='write'>" +
                                "<div class='collectoption'>" +
                                "<span class='qid'>" + i + "</span>" +
                                "<button id='col' class='layui-btn layui-btn-xs layui-btn-warm' onclick='collectionquestion("+data.questionlist[i].qid+")'>收藏</button>" +
                                "</div>" +
                                "<div class='qtitle'>" +
                                "问题:" +
                                "<p class='title'>" + data.questionlist[i].qtitle + "</p>" +
                                "</div>" +
                                "<div id='qs' class='layui-form-item'>" +
                                "<label class='layui-form-label'>答案:</label>" +
                                "<div class='layui-input-block'>" +
                                "<input type='text' class='layui-input' disabled value='" + data.questionlist[i].qanswer + "'>" +
                                "</div>" +
                                "</div>" +
                                "</div>")
                        }
                    }
                    getanswer(tid,aid,gid);
                    break;
                case 1:
                    layer.msg('获取失败，请重新操作！');
                    break;
            };
        }
    })
}
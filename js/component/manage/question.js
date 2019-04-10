$(function() {
	
	// 默认选择题
	$(".qanswer").hide();
	
	// 监听下拉列表题目类型，显示对应必填项
	$(".questiontype").change(function() {
		let type = $(".questiontype option:checked").val();
		if (type == 1) {
			$(".qsel").hide();
			$(".qanswer").show();
		}else if(type == 0) {
			$(".qsel").show();
			$(".qanswer").hide();
		}
	});
	
	// 录入按钮
	$(".addquesrion").click(function(){
		addquestion();
	});

});

function addquestion(){
	let tid = GetQueryString("tid");
	// alert(tid);
	let qtitle = $("#desc").val();
	if(qtitle){
		let type = $(".questiontype option:checked").val();
		// 选择题
		if(type == 0){
			let optionA = $("#optionA").val();
			let optionB = $("#optionB").val();
			let optionC = $("#optionC").val();
			let optionD = $("#optionD").val();
			let rightanswer = $('input[name="rans"]:checked').val();
			// alert("rightanswer===>"+rightanswer);
			
			let param = {"A":optionA,"B":optionB,"C":optionC,"D":optionD};
			let options = JSON.stringify(param);
			let params = {"tid":tid,"qtitle":qtitle,"qanswer":rightanswer,"qstyle":type,"options":options};
			
			$.ajax({
				dataType: "json",
				type: "POST",
				url: "http://train.online.com/server/question/addquestion",
				data: params,
				success: function(data) {
					//根据返回值类型确定状态
					switch (data.code) {
						case 0:
							layer.msg("录入成功！");	
							setTimeout(function(){ 
								window.location.href = "http://train.online.com/html/manage/showquestions.html?tid="+tid;
							}, 2000);				
							break;
						case 1:
							layer.msg('录入失败，请重新录入！');
							break;
						case 2:
							layer.msg('试题数已满！');	
							setTimeout(function(){ 
								window.location.href = "http://train.online.com/html/manage/showquestions.html?tid="+tid;
							}, 2000);
					};
				}
			})
		}else if(type == 1){//填空题
			let rightanswer = $("input[name=qanval]").val();
			let params = {"tid":tid,"qtitle":qtitle,"qanswer":rightanswer,"qstyle":type};

			$.ajax({
				dataType: "json",
				type: "POST",
				url: "http://train.online.com/server/question/addquestion",
				data: params,
				success: function(data) {
					//根据返回值类型确定状态
					switch (data.code) {
						case 0:
						layer.msg("录入成功！");
						setTimeout(function(){ 
							window.location.href = "http://train.online.com/html/manage/showquestions.html?tid="+tid;
						}, 2000);
							break;
						case 1:
							layer.msg('录入失败，请重新录入！');
							break;
						case 2:
							layer.msg('试题数已满！');	
							setTimeout(function(){ 
								window.location.href = "http://train.online.com/html/manage/showquestions.html?tid="+tid;
							}, 2000);
							break;
					};
				}
			})
		}
	}else {
		layer.msg("请录入题目！");
	}
	 
}

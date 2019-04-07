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

// 获取url上对应参数
function GetQueryString(name)
{
　　var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
　　var r = window.location.search.substr(1).match(reg);
　　if(r!=null)return unescape(r[2]);
   return null;
}

function addquestion(){
	let status = GetQueryString("status");
	let title = GetQueryString("title");
	alert(title);
	let qtitle = $("#desc").val();
	if(qtitle){
		let type = $(".questiontype option:checked").val();
		if(type == 0){
			let optionA = $("#optionA").val();
			let optionB = $("#optionB").val();
			let optionC = $("#optionC").val();
			let optionD = $("#optionD").val();
			let rightanswer = $('input[name="rans"]:checked').val();
			// alert("rightanswer===>"+rightanswer);
			
			let param = {"A":optionA,"B":optionB,"C":optionC,"D":optionD};
			let options = JSON.stringify(param);
			let params = {"tname":title,"status":status,"qtitle":qtitle,"qanswer":rightanswer,"qstyle":type};
			
			$.ajax({
				dataType: "json",
				type: "POST",
				url: "http://train.online.com/server/test/addtest",
				data: params,
				success: function(data) {
					//根据返回值类型确定状态
					switch (data.code) {
						case 0:
						alert("okokok");
							break;
						case 1:
							layer.msg('更新失败，请重新获取！');
							break;
					};
				}
			})
		}
	}else {
		layer.msg("请录入题目！");
	}
	 
}

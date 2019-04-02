$(function() {
	
	let status = GetQueryString("status");
	let title = GetQueryString("title");
	
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
	
	$(".addquesrion").click(function(){
		
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

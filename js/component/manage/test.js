$(function(){
	
	// 下一步按钮
	$(".testnext").click(function(){
		let title = $("#title").val();
		let status = $("#status option:selected").val();
		if(title){
			window.location.href = "./addquestion.html?title="+title+"&status="+status;
		}
	});
});
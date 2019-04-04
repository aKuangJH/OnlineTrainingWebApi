$(function(){
	
	// 下一步按钮
	$(".testnext").click(function(){
		let title = $("#title").val();
		let status = $("#status option:selected").val();
		if(title){
			// window.location.href = "./addquestion.html?title="+title+"&status="+status;
			let params = {"tname":title,"status":status}
			$.ajax({
				// async:true,
				dataType: "json",
				type: "POST",
				url: "http://train.online.com/train/test/addtest",
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
		}else {
			layer.msg("请输入套题名！");
		}
	});
});
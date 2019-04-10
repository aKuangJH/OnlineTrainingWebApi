$(function() {
	// 样式状态
	$(".rightbtn").hover(function() {
		$(this).css({
			"background-color": "#959CA8",
			"cursor": "pointer"
		});
	}, function() {
		$(".rightbtn").css({
			"background-color": "white"
		});
	});

	// 编辑按钮
	$(".layui-icon-edit").click(function() {
		layer.confirm('是否编辑题目', {
			btn: ['确认', '取消'] //可以无限个按钮
		}, function(index, layero) {
			//按钮【按钮一】的回调
			// 可编辑
			$(".onlyread").removeAttr("disabled");
			// 显示按钮
			$(".updatequestion").show();
			// 关闭弹层
			layer.close(layer.index);
		});
		
	});
	
	// 删除按钮
	$(".layui-icon-close-fill").click(function() {
		layer.confirm('是否删除题目', {
			btn: ['确认', '取消'] //可以无限个按钮
		}, function(index, layero) {
			//按钮【按钮一】的回调
			
			layer.close(layer.index);
		});
		
	});

	// 取消按钮
	$(".cancleupdate").click(function(){
		window.location.reload();
	});
});

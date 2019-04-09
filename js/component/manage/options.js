$(function(){
	
});

function addnewquestion(){
	let tid = GetQueryString("tid");
	// alert("跳转新增问题页");
	window.location.href = "http://train.online.com/html/manage/addquestion.html?tid="+tid;
}
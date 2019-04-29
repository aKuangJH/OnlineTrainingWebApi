$(function(){
	
});

function addnewquestion(){
	// alert("跳转新增问题页");
	let tid = GetQueryString("tid");
	window.location.href = "http://train.online.com/html/manage/foruser/addquestion.html?tid="+tid;
}
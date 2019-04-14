 
// 获取Cookie值
function get_cookie(Name) {
   var search = Name + "="//查询检索的值
   var returnvalue = "";//返回值
   if (document.cookie.length > 0) {
     sd = document.cookie.indexOf(search);
     if (sd!= -1) {
        sd += search.length;
        end = document.cookie.indexOf(";", sd);
        if (end == -1)
         end = document.cookie.length;
         //unescape() 函数可对通过 escape() 编码的字符串进行解码。
        returnvalue=unescape(document.cookie.substring(sd, end))
      }
   } 
   return returnvalue;
}

//设置cookie
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}


//日期类型转换
function parseTime(timestamp) {
	var date = new Date(parseInt(timestamp)).toLocaleDateString();
	//输出结果为2016/8/9
	date = formatDate(date);
	//输出结果为2016-08-09，满足YYYY-MM-DD格式要求
	return date;
}

//日期格式转换
function formatDate(date) {
	dates = date.split("/");
	if (dates.length == 3) {
		if (dates[1].length == 1) {
			dates[1] = "0" + dates[1];
		}
		if (dates[2].length == 1) {
			dates[2] = "0" + dates[2];
		}
		date = dates.join("-");
		return date;
	} else {
		return null;
	}
}

// 获取url上对应参数
function GetQueryString(name)
{
　　var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
　　var r = window.location.search.substr(1).match(reg);
　　if(r!=null)return unescape(r[2]);
   return null;
}

//建立一個可存取到該file的url  
function getObjectURL(file) {
	var url = null;
	if (window.createObjectURL != undefined) {
		url = window.createObjectURL(file);
	} else if (window.URL != undefined) {
		url = window.URL.createObjectURL(file);
	} else if (window.webkitURL != undefined) {
		url = window.webkitURL.createObjectURL(file);
	}
	return url;
}

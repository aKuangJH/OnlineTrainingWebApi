$(function () {
	$('#switch_qlogin').click(function () {
		$('#switch_login').removeClass("switch_btn_focus").addClass('switch_btn');
		$('#switch_qlogin').removeClass("switch_btn").addClass('switch_btn_focus');
		$('#switch_bottom').animate({
			left: '0px',
			width: '70px'
		});
		$('#qlogin').css('display', 'none');
		$('#web_qr_login').css('display', 'block');

	});
	$('#switch_login').click(function () {

		$('#switch_login').removeClass("switch_btn").addClass('switch_btn_focus');
		$('#switch_qlogin').removeClass("switch_btn_focus").addClass('switch_btn');
		$('#switch_bottom').animate({
			left: '154px',
			width: '70px'
		});

		$('#qlogin').css('display', 'block');
		$('#web_qr_login').css('display', 'none');
	});
	if (getParam("a") == '0') {
		$('#switch_login').trigger('click');
	}


// 登陆逻辑
	var verifyCode = new GVerify("v_container");

	document.getElementById("login_btn").onclick = function () {
		var res = verifyCode.validate(document.getElementById("code_input").value);
		if (res) {
			layer.msg("验证正确");
			var username = $("#u").val();
			var password = $("#p").val();
			// alert("用户名：" + username + ",密码：" + password);
			params = { "username": username, "password": password };
			$.ajax({
				dataType: "json",
				type: "GET",
				url: "http://train.online.com/server/user/login",
				data: params,
				success: function (data) {
					//根据返回值类型确定状态
					switch (data.code) {
						case 0:
							let role = get_cookie("role");
							// alert(role)
							if(role == 1) {
								window.location.href = "../../manage/foradmin/allinformation.html";
							}else if(role == 0){
								window.location.href = "../index/index.html";
							}
							break;
						case 1:
							layer.msg('登录失败，请重新输入!');
							break;
					};
				}
			})
		} else {
			layer.msg("验证码错误");
		}
	}


});

function logintab() {
	scrollTo(0);
	$('#switch_qlogin').removeClass("switch_btn_focus").addClass('switch_btn');
	$('#switch_login').removeClass("switch_btn").addClass('switch_btn_focus');
	$('#switch_bottom').animate({
		left: '154px',
		width: '96px'
	});
	$('#qlogin').css('display', 'none');
	$('#web_qr_login').css('display', 'block');

}


//根据参数名获得该参数 pname等于想要的参数名 
function getParam(pname) {
	var params = location.search.substr(1); // 获取参数 平且去掉？ 
	var ArrParam = params.split('&');
	if (ArrParam.length == 1) {
		//只有一个参数的情况 
		return params.split('=')[1];
	} else {
		//多个参数参数的情况 
		for (var i = 0; i < ArrParam.length; i++) {
			if (ArrParam[i].split('=')[0] == pname) {
				return ArrParam[i].split('=')[1];
			}
		}
	}
}


var reMethod = "POST",
	pwdmin = 6;

var re = {
	user: /^.{4,16}$/,
	pas: eval('/^[a-zA-Z0-9]{' + pwdmin + ',16}$/'),
	email: /^\w+@[a-z0-9]+(\.[a-z]+){1,3}$/
};
$(document).ready(function () {
	// 用户名
	$('#user').blur(function () {
		var val = this.value.trim();
		if (!val) {
			$('#user').css({
				borderColor: "red"
			});
			$('#userCue').html("<b>用户名不能为空</b>");
			$('#userCue').css({
				display: 'block'
			});
			$('.namebox+.check').css({
				display: 'none'
			});
			setTimeout(function () {
				$('#userCue').css({
					display: 'none',
					borderColor: "#D7D7D7"
				});
			}, 1500);
		} else if (!re.user.test(val)) {
			$('#user').css({
				borderColor: "red"
			});
			$('#userCue').html("<b>请输入4-16位的用户名</b>");
			$('#userCue').css({
				display: 'block'
			})
			$('.namebox+.check').css({
				display: 'none'
			});
			setTimeout(function () {
				$('#userCue').css({
					display: 'none',
					borderColor: "#D7D7D7"
				});
			}, 1500);
		} else {
			$('.userinp').css({
				borderColor: "#D7D7D7"
			});
			$('.namebox+.check').css({
				display: 'inline-block'
			});
		}
	})
	// 密码
	$('#passwd').blur(function () {
		var val = this.value.trim();
		if (!val && !$('#passwd').val()) {
			$('#passwd').css({
				borderColor: "red"
			});
			$('#userCue').html("<b>密码不能为空</b>");
			$('#userCue').css({
				display: 'block'
			});
			setTimeout(function () {
				$('#userCue').css({
					display: 'none',
					borderColor: "#D7D7D7"
				});
			}, 1500);
			return false;
		} else if ((val.length > 0 && val.length < pwdmin) || val.length > 16) {
			// alert(1111);
			$('#passwd').css({
				borderColor: "red"
			});
			$('#userCue').html("<b>请输入" + pwdmin + "-16位的密码</b>");
			$('#userCue').css({
				display: 'block'
			});
			setTimeout(function () {
				$('#userCue').css({
					display: 'none',
					borderColor: "#D7D7D7"
				});
			}, 1500);
			return false;
		} else {
			$('#userCue').css({
				display: 'none'
			});
			$('.pwdinp').css({
				borderColor: "#D7D7D7"
			});
		}
	})
	// 重复密码
	$('#passwd2').blur(function () {
		var val = this.value.trim();
		console.log(val != $('#passwd').val().trim());
		if (val != $('#passwd').val().trim()) {
			$('.pwdbox+.check').css({
				display: 'none'
			});
			$('.pwdbox2+.check').css({
				display: 'none'
			});
			$('#passwd').css({
				borderColor: "red"
			});
			$('#passwd2').css({
				borderColor: "red"
			});
			$('#userCue').html("<b>两次密码不一致！</b>");
			$('#userCue').css({
				display: 'block',
				borderColor: "#D7D7D7"
			});
			setTimeout(function () {
				$('#userCue').css({
					display: 'none',
					borderColor: "#D7D7D7"
				});
				$('#passwd').css({
					borderColor: "#D7D7D7"
				});
			}, 1500);
			$('#passwd2').val("");
			return false;
		} else {
			$('#passwd2').css({
				borderColor: "#D7D7D7"
			});
			$('#userCue').css({
				display: 'none'
			}).html('');
			$('.pwdbox+.check').css({
				display: 'inline-block'
			});
			$('.pwdbox2+.check').css({
				display: 'inline-block'
			});
		}
	})
	// 邮箱
	$('#email').blur(function () {
		var val = this.value.trim();
		if (!re.email.test(val)) {
			$('.emailbox+.check').css({
				display: 'none'
			});
			$('#email').css({
				borderColor: "red"
			});
			$('#userCue').html("<b>请输入合法的邮箱</b>");
			$('#userCue').css({
				display: 'block'
			});
			setTimeout(function () {
				$('#userCue').css({
					display: 'none',
					borderColor: "#D7D7D7"
				});
			}, 1500);
			return false;
		} else {
			$('.emailbox').after(`<span class='check'></span>`);
			$('.emailinp').css({
				borderColor: "#D7D7D7"
			});
			$('.emailbox+.check').css({
				display: 'inline-block'
			});
		}
	})

	$('#reg').click(function () {
		switch (true) {
			case !re.user.test($('#user').val()):
				$('#userCue').html("<font color='red'><b>请输入正确的用户名</b></font>");
				setTimeout(function () {
					$('#userCue').css({
						display: 'none',
						borderColor: "#D7D7D7"
					});
				}, 1500);
				return false;

			case !re.pas.test($('#pas').val()):
				$('#userCue').html("<font color='red'><b>请输入正确的密码</b></font>");
				setTimeout(function () {
					$('#userCue').css({
						display: 'none',
						borderColor: "#D7D7D7"
					});
				}, 1500);
				return false;

			case $('#passwd').val() !== $('#passwd2').val():
				$('#userCue').html("<font color='red'><b>两次密码必须一致</b></font>");
				setTimeout(function () {
					$('#userCue').css({
						display: 'none',
						borderColor: "#D7D7D7"
					});
				}, 1500);
				return false;

			case !re.email.test($('#email').val()):
				$('#userCue').html("<font color='red'><b>请输入合法的邮箱</b></font>");
				setTimeout(function () {
					$('#userCue').css({
						display: 'none',
						borderColor: "#D7D7D7"
					});
				}, 1500);
				return false;
		}
		$.ajax({
			type: reMethod,
			url: "http://127.0.0.1:8083/login/register",
			data: $('#regUser').serialize(),
			dataType: 'json',
			success: function (result) {
				layer.msg('注册成功');

				setTimeout("window.location.href = './manage/address.html'", 5000);

				//根据返回值类型确定状态
				switch (data.code) {
					case 0:
						layer.msg('注册成功');
						break;
					case 1:
						layer.msg('注册失败，请重新操作!');
						break;
				};
			}
		});
		$('#regUser').submit();
	});


});


var islogin_ul = $('#islogin_ul');
var quit_Btn = islogin_ul.children('li').eq(2);
var login_ul = $('#login_ul');
var register_Btn = login_ul.children('li').eq(2);
var login_Btn = login_ul.children('li').eq(0);

var login_box = $('.login-box');
var register_box = $('.register-box');

var r_l_box = $('.r-l-box')
	//检查COOKIE
checkCookie();
//设置cookie
function setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires=" + d.toUTCString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	}
	//获取cookie

function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1);
			if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
		}
		return "";
	}
	//清除cookie  

function clearCookie(name) {
	setCookie(name, "", -1);
}
setCookie("status", "islogin", 1)

function checkCookie() {
	var status = getCookie("status");
	if (status == "islogin") {
		islogin_ul.removeClass('hidden');
		login_ul.addClass('hidden')
	} else {
		login_ul.removeClass('hidden');
		islogin_ul.addClass('hidden')
	}
}
quit_Btn.click(function() {
	clearCookie('status');
	checkCookie();
})

//辅助css
r_l_box.css("top",$('.header-top').height(true))

function setBoxStaus() {
    r_l_box.addClass('hidden')
	login_box.hide()
	register_box.hide()
}
setBoxStaus()

login_Btn.click(function() {
	r_l_box.removeClass('hidden')
	register_box.hide(function(){
		login_box.slideDown()
	})
	
})
register_Btn.click(function() {
	r_l_box.removeClass('hidden')
	login_box.hide(function(){
		register_box.slideDown()
	})
})
r_l_box.mouseleave(function (){
	setBoxStaus()
})

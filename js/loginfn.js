window.onload = function() {
	var islogin_ul = $('#islogin_ul');
	var quit_Btn = islogin_ul.children('li').eq(2);
	var login_ul = $('#login_ul');
	var register_Btn = login_ul.children('li').eq(2);
	var login_Btn = login_ul.children('li').eq(0);

	var login_box = $('.login-box');
	var register_box = $('.register-box');

	var r_l_box = $('.r-l-box')
	

	

	//辅助css
	r_l_box.css("top", $('.header-top').outerHeight(true))

	function setBoxStaus() {
		r_l_box.addClass('hidden')
		login_box.hide()
		register_box.hide()
	}
	setBoxStaus()

	login_Btn.click(function() {
		r_l_box.removeClass('hidden')
		register_box.hide(function() {
			login_box.slideDown()
		})




	})
	register_Btn.click(function() {
		r_l_box.removeClass('hidden')
		login_box.hide(function() {
			register_box.slideDown()
		})
	})
	r_l_box.mouseleave(function() {
		setBoxStaus()
	})
}
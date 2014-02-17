
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var ct_sanpham = {};	// @button
	var ct_nhanvien = {};	// @button
	var ct_khachhang = {};	// @button
	var ct_thietlap = {};	// @button
	var login1 = {};	// @login
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	ct_sanpham.click = function ct_sanpham_click (event)// @startlock
	{// @endlock
		// Add your code here
		window.location.href = '../DangKySanPham';
	};// @lock

	ct_nhanvien.click = function ct_nhanvien_click (event)// @startlock
	{// @endlock
		// Add your code here
		window.location.href = '../employees';
	};// @lock

	ct_khachhang.click = function ct_khachhang_click (event)// @startlock
	{// @endlock
		// Add your code here
		window.location.href = '../customer';
	};// @lock

	ct_thietlap.click = function ct_thietlap_click (event)// @startlock
	{// @endlock
		// Add your code here
		window.location.href = '../setting';
	};// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		// Add your code here
		logout_user();
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		// Add your code here
		if(WAF.directory.currentUser()!=null)
		{
			username = WAF.directory.currentUser().fullName;  
			/* Neu kiem tra user hien tai dang thuoc group nao thi dung
			WAF.directory.currentUserBelongsTo('admin') -> true
			*/			
			console.log(username);
		}
		else
			window.location.href = '../login';
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("ct_sanpham", "click", ct_sanpham.click, "WAF");
	WAF.addListener("ct_nhanvien", "click", ct_nhanvien.click, "WAF");
	WAF.addListener("ct_khachhang", "click", ct_khachhang.click, "WAF");
	WAF.addListener("ct_thietlap", "click", ct_thietlap.click, "WAF");
	WAF.addListener("login1", "logout", login1.logout, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock

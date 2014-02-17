
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var login1 = {};	// @login
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		checkNeku();
	};// @lock
	function checkNeku()
	{
		
		if(WAF.directory.currentUser()!=null)
		{
			window.location.href = '../home';
		}
	}
	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		checkNeku();
		// Add your code here
		var loginManager = $$('login1');
		var htmlObject = $($$('login1').containerNode);
		var html = ""; 
		function loginButton(event)
		{
			
			var userName = $("#container1 .waf-login-dialog-user input").val();			
			var password = $("#container1 .waf-login-dialog-password input").val();			
//			loginManager.dialog.dialog("close");
			loginManager.login(userName, password);
			$("#container1 .waf-login-dialog-password input").val('');	
		} 		
		var dataTheme = "";
		var existingClasses = htmlObject.prop('class')+" waf-login-dialog";
		existingClasses.split(" ").forEach(function(className) {
			if (className != "inherit" && className.substr(0,4) != "waf-") {
				dataTheme += className+" ";
			}
		}); 
		html += '<div class="waf-widget-body waf-login-body '+dataTheme+'" title="'+loginManager.labels.loginTitle+'">';
		html += '<form class="waf-login-form" action="#" methos="POST">';
		html += '<div class="waf-login-div waf-login-dialog-user">';
		html += '<label class="waf-widget waf-label waf-login-label '+dataTheme+'">' + loginManager.labels.userLabel + '</label>';
		html += '<div><input id="name_login_'+loginManager.divID+'" type="text" data-type="textField" data-lib="WAF" class="waf-widget waf-textField '+dataTheme+'" size="20"/></div>';
		html += '</div>';
		html += '<div class="waf-login-div waf-login-dialog-password">';
		html += '<label class="waf-widget waf-label waf-login-label '+dataTheme+'">' + loginManager.labels.passwordLabel + '</label>';
		html += '<div>';
		html += '<input id="password_login_'+loginManager.divID+'" type="password" data-type="textField" data-lib="WAF" class="waf-widget waf-textField '+dataTheme+'" size="20"/>';
		html += '<button id="button_login_'+loginManager.divID+'" class="waf-login-button waf-widget waf-button '+dataTheme+'" data-lib="WAF" data-type="button" data-text="'+loginManager.labels.loginButton+'">';
		html += '<span>' + loginManager.labels.loginButton + '</span>';
		html += '</button>';
		html += '</div>';
		html += '</form>';
		html += '</div>';
		html += '</div>';
		var $html = $(html); 
		$html.addClass(existingClasses);
		$html.addClass('waf-widget waf-login-dialog').find('.ui-widget-header').addClass("waf-widget-header").removeClass('ui-corner-all');	
		$html.removeClass("waf-login");	
		$html.removeClass("waf-login");
			
		var tabDom = $('[data-type]', $html);
		for (var i = 0, nbComponent = tabDom.length; i < nbComponent; i++) {
			var domobj = tabDom[i];
			WAF.tags.createComponent(domobj, false);
		} 
		var string2 = '<div class="waf-widget-body waf-login-body '+dataTheme+'" title="'+loginManager.labels.loginTitle+'">';
		string2+=$html.html();
		string2+='</div>';
		$("#container1").append(string2);			
		$(".waf-login-button").bind("click", function (event) {
			event.preventDefault();
			loginButton(event);
		});
		$(".waf-login-form").bind("submit", function (event) {
			event.preventDefault();
			loginButton(event);
		}); 
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("login1", "login", login1.login, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock

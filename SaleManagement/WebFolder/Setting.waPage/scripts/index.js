
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var settingEvent = {};	// @dataSource
	var btnSave = {};	// @button
	var btnCancel = {};	// @button
	var documentEvent = {};	// @document
	var login1 = {};	// @login
// @endregion// @endlock

// eventHandlers// @lock

	settingEvent.onCollectionChange = function settingEvent_onCollectionChange (event)// @startlock
	{// @endlock
		// Add your code here
		if(this.length==0){
			sources.setting.newEntity();
			sources.setting.companyName = "van teo";
			sources.setting.save({onSuccess:function(){
				sources.setting.addEntity(sources.setting.getCurrentElement()); 
			}});	
		}
	};// @lock

	btnSave.click = function btnSave_click (event)// @startlock
	{// @endlock
		// Add your code here
		sources.setting.save();
	};// @lock

	btnCancel.click = function btnCancel_click (event)// @startlock
	{// @endlock
		// Add your code here
		window.location.href = '../home';
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

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		// Add your code here
		logout_user();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("setting", "onCollectionChange", settingEvent.onCollectionChange, "WAF");
	WAF.addListener("btnSave", "click", btnSave.click, "WAF");
	WAF.addListener("btnCancel", "click", btnCancel.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("login1", "logout", login1.logout, "WAF");
// @endregion
};// @endlock

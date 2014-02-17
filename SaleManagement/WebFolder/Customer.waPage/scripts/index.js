WAF.Widget.prototype.center = function(){
 var jQObject = this.$domNode;
 jQObject.css({
  "position" : "absolute",
  "top"  : (($(window).height() - jQObject.outerHeight()) / 2) +  $(window).scrollTop() - 70,
  "left"  : (($(window).width() - jQObject.outerWidth()) / 2) + $(window).scrollLeft()
 });
 
 // Bonus : center the $$ object even if we resize the window
 $(window).resize(function(){
  jQObject.css({
   "position" : "absolute",
   "top"  : (($(window).height() - jQObject.outerHeight()) / 2) +  $(window).scrollTop() - 70,
   "left"  : (($(window).width() - jQObject.outerWidth()) / 2) + $(window).scrollLeft()
  });
 });
 return this;
}

WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var richText19 = {};	// @richText
	var richText18 = {};	// @richText
	var dlglast = {};	// @icon
	var dlgfirst = {};	// @icon
	var login2 = {};	// @login
	var login1 = {};	// @login
	var txtEmail = {};	// @textField
	var txtFax = {};	// @textField
	var txtTel = {};	// @textField
	var txtSeq = {};	// @textField
	var txtCountry = {};	// @textField
	var txtZipcode = {};	// @textField
	var cusGrid = {};	// @dataGrid
	var btnCreate = {};	// @button
	var btnconfirmok = {};	// @button
	var btnconfirmcancel = {};	// @button
	var dlgdelete = {};	// @icon
	var txtAdress = {};	// @textField
	var txtName = {};	// @textField
	var dlgprev = {};	// @icon
	var dlgnext = {};	// @icon
	var btnMessageOK = {};	// @button
	var dlgsave = {};	// @icon
	var dlgclose = {};	// @icon
	var documentEvent = {};	// @document
	var dlgcloseicon = {};	// @icon
// @endregion// @endlock

// eventHandlers// @lock

	richText19.click = function richText19_click (event)// @startlock
	{// @endlock
		// Add your code here
		window.location.href = '../employees';
	};// @lock

	richText18.click = function richText18_click (event)// @startlock
	{// @endlock
		// Add your code here
		window.location.href = '../DangKySanPham';
	};// @lock

	dlglast.click = function dlglast_click (event)// @startlock
	{// @endlock
		// Add your code here
		var isNew = sources.customer.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
		    sources.customer.save({
		        onSuccess: function(event) {
		            var last = sources.customer.length;
		            if (last > 1) {
		                sources.customer.select(last - 1, {
		                    onError: function(error) {
		                        //Set message
		                        $$("rtxtmessage").setValue(error['error'][0].message);

		                        //Show dialog
		                        $$('messagedlg').center()
		                        $$('messagedlg').displayDialog();
		                    }
		                });
		            }
		        },
		        onError: function(error) {
		            //Set message
		            $$("rtxtmessage").setValue(error['error'][0].message);

		            //Show dialog
		            $$('messagedlg').center()
		            $$('messagedlg').displayDialog();
		        }
		    });
		}
	};// @lock

	dlgfirst.click = function dlgfirst_click (event)// @startlock
	{// @endlock
		// Add your code here
		var isNew = sources.customer.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
			sources.customer.save({
		        onSuccess: function(event) {
		        	sources.customer.select(0,
		        	{
				        onError: function(error) {
				        	//Set message
				        	$$("rtxtmessage").setValue(error['error'][0].message);
				        	        	
				        	//Show dialog
				        	$$('messagedlg').center()
				        	$$('messagedlg').displayDialog();
				        }
				    });
		        },
		        onError: function(error) {
		        	//Set message
		        	$$("rtxtmessage").setValue(error['error'][0].message);
		        	        	
		        	//Show dialog
		        	$$('messagedlg').center()
		        	$$('messagedlg').displayDialog();
		        }
		    });
		}
	};// @lock

	login2.logout = function login2_logout (event)// @startlock
	{// @endlock
		// Add your code here
		logout_user();
	};// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		// Add your code here
		logout_user();
	};// @lock

	txtEmail.keydown = function txtEmail_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			var seq = $.trim($$("txtSeq").getValue());
			if(seq!=""){
				var isNew = sources.customer.isNewElement();
				sources.customer.save({
			        onSuccess: function(event) {
			        	if(isNew){
				        	//Set message
				        	$$("rtxtmessage").setValue("保存しました。");
				        	
				        	//Show dialog
				        	$$('messagedlg').center()
				        	$$('messagedlg').displayDialog();
				        }else{
				        	//Close Input
							$$("tabCustomer").selectTab(1);
				        }
			        },
			        onError: function(error) {
			        	//Set message
			        	$$("rtxtmessage").setValue(error['error'][0].message);
			        	        	
			        	//Show dialog
			        	$$('messagedlg').center()
			        	$$('messagedlg').displayDialog();
			        }
			    });
			}else{
				$$("txtSeq").focus();
			}
		}
	};// @lock

	txtFax.keydown = function txtFax_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtEmail").focus();
		}
	};// @lock

	txtTel.keydown = function txtTel_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtFax").focus();
		}
	};// @lock

	txtSeq.keydown = function txtSeq_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtName").focus();
		}
	};// @lock

	txtCountry.keydown = function txtCountry_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtTel").focus();
		}
	};// @lock

	txtZipcode.keydown = function txtZipcode_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtCountry").focus();
		}
	};// @lock

	cusGrid.onRowDblClick = function cusGrid_onRowDblClick (event)// @startlock
	{// @endlock
		//Show Input
		$$("tabCustomer").selectTab(2);
		
		//Set readonly cho input
		$$("txtSeq").setReadOnly(true);
		
		//Set focus cho input
		$$("txtName").focus();
	};// @lock

	btnCreate.click = function btnCreate_click (event)// @startlock
	{// @endlock
		//New Entity
		sources.customer.newEntity();
		
		//Show Input
		$$("tabCustomer").selectTab(2);
		
		//Remove readonly cho input
		$$("txtSeq").setReadOnly(false);
		
		//Set focus cho input
		$$("txtSeq").focus();
	};// @lock

	btnconfirmok.click = function btnconfirmok_click (event)// @startlock
	{// @endlock
		$$('confirmdlg').closeDialog(); //ok button
	};// @lock

	btnconfirmcancel.click = function btnconfirmcancel_click (event)// @startlock
	{// @endlock
		$$('confirmdlg').closeDialog(); //cancel button
	};// @lock

	dlgdelete.click = function dlgdelete_click (event)// @startlock
	{// @endlock
		var isNew = sources.customer.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
			//set text confirm
			$$("rtxtconfirm").setValue("本当にこのレコードを削除してよろしいですか。?");
			//Show dialog
        	$$('confirmdlg').center()
        	$$('confirmdlg').displayDialog();
		}
	};// @lock

	txtAdress.keydown = function txtAdress_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtZipcode").focus();
		}
	};// @lock

	txtName.keydown = function txtName_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13){
			$$("txtAdress").focus();
		}
	};// @lock

	dlgprev.click = function dlgprev_click (event)// @startlock
	{// @endlock
		var isNew = sources.customer.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
			sources.customer.save({
		        onSuccess: function(event) {
		        	sources.customer.selectPrevious();
		        },
		        onError: function(error) {
		        	//Set message
		        	$$("rtxtmessage").setValue(error['error'][0].message);
		        	        	
		        	//Show dialog
		        	$$('messagedlg').center()
		        	$$('messagedlg').displayDialog();
		        }
		    });
		}
	};// @lock

	dlgnext.click = function dlgnext_click (event)// @startlock
	{// @endlock
		var isNew = sources.customer.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
			sources.customer.save({
		        onSuccess: function(event) {
		        	sources.customer.selectNext();
		        },
		        onError: function(error) {
		        	//Set message
		        	$$("rtxtmessage").setValue(error['error'][0].message);
		        	        	
		        	//Show dialog
		        	$$('messagedlg').center()
		        	$$('messagedlg').displayDialog();
		        }
		    });
		}
	};// @lock

	btnMessageOK.click = function btnMessageOK_click (event)// @startlock
	{// @endlock
		//Cap nhat datasource cho customer
		sources.customer.addEntity(sources.customer.getCurrentElement());
		
		//New Entity
		sources.customer.newEntity();
		
		//Close dialog
		$$('messagedlg').closeDialog();
		
		//Set focus cho input
		$$("txtName").focus();
		
	};// @lock

	dlgsave.click = function dlgsave_click (event)// @startlock
	{// @endlock
		var isNew = sources.customer.isNewElement();
		sources.customer.save({
	        onSuccess: function(event) {
	        	if(isNew){
		        	//Set message
		        	$$("rtxtmessage").setValue("Successfully");
		        	
		        	//Show dialog
		        	$$('messagedlg').center()
		        	$$('messagedlg').displayDialog();
		        }else{
		        	//Close Input
					$$("tabCustomer").selectTab(1);
		        }
	        },
	        onError: function(error) {
	        	//Set message
	        	$$("rtxtmessage").setValue(error['error'][0].message);
	        	        	
	        	//Show dialog
	        	$$('messagedlg').center();
	        	$$('messagedlg').displayDialog();
	        }
	    });
	};// @lock

	dlgclose.click = function dlgclose_click (event)// @startlock
	{// @endlock
		//Close Input
		$$("tabCustomer").selectTab(1);
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		if(WAF.directory.currentUser()!=null)
		{
			username = WAF.directory.currentUser().fullName;  
			/* Neu kiem tra user hien tai dang thuoc group nao thi dung
			WAF.directory.currentUserBelongsTo('admin') -> true
			*/			
			console.log(username);
			$$("tabCustomer").center();
		}
		else
			window.location.href = '../login';
		
	};// @lock

	dlgcloseicon.click = function dlgcloseicon_click (event)// @startlock
	{// @endlock
		//Close Input
		$$("tabCustomer").selectTab(1);
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("richText19", "click", richText19.click, "WAF");
	WAF.addListener("richText18", "click", richText18.click, "WAF");
	WAF.addListener("dlglast", "click", dlglast.click, "WAF");
	WAF.addListener("dlgfirst", "click", dlgfirst.click, "WAF");
	WAF.addListener("login2", "logout", login2.logout, "WAF");
	WAF.addListener("login1", "logout", login1.logout, "WAF");
	WAF.addListener("txtEmail", "keydown", txtEmail.keydown, "WAF");
	WAF.addListener("txtFax", "keydown", txtFax.keydown, "WAF");
	WAF.addListener("txtTel", "keydown", txtTel.keydown, "WAF");
	WAF.addListener("txtSeq", "keydown", txtSeq.keydown, "WAF");
	WAF.addListener("txtCountry", "keydown", txtCountry.keydown, "WAF");
	WAF.addListener("txtZipcode", "keydown", txtZipcode.keydown, "WAF");
	WAF.addListener("cusGrid", "onRowDblClick", cusGrid.onRowDblClick, "WAF");
	WAF.addListener("btnCreate", "click", btnCreate.click, "WAF");
	WAF.addListener("btnconfirmok", "click", btnconfirmok.click, "WAF");
	WAF.addListener("btnconfirmcancel", "click", btnconfirmcancel.click, "WAF");
	WAF.addListener("dlgdelete", "click", dlgdelete.click, "WAF");
	WAF.addListener("txtAdress", "keydown", txtAdress.keydown, "WAF");
	WAF.addListener("txtName", "keydown", txtName.keydown, "WAF");
	WAF.addListener("dlgprev", "click", dlgprev.click, "WAF");
	WAF.addListener("dlgnext", "click", dlgnext.click, "WAF");
	WAF.addListener("btnMessageOK", "click", btnMessageOK.click, "WAF");
	WAF.addListener("dlgsave", "click", dlgsave.click, "WAF");
	WAF.addListener("dlgclose", "click", dlgclose.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("dlgcloseicon", "click", dlgcloseicon.click, "WAF");
// @endregion
};// @endlock

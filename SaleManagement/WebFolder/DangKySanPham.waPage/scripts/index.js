
WAF.Widget.prototype.center = function(){
	var jQObject = this.$domNode;
	jQObject.css({
		"position"	: "absolute",
		"top"		: (($(window).height() - jQObject.outerHeight()) / 2) +  $(window).scrollTop() - 70,
		"left"		: (($(window).width() - jQObject.outerWidth()) / 2) + $(window).scrollLeft()
	});
	
	// Bonus : center the $$ object even if we resize the window
	$(window).resize(function(){
		jQObject.css({
			"position"	: "absolute",
			"top"		: (($(window).height() - jQObject.outerHeight()) / 2) +  $(window).scrollTop() - 70,
			"left"		: (($(window).width() - jQObject.outerWidth()) / 2) + $(window).scrollLeft()
		});
	});
	return this;
}

WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var richText23 = {};	// @richText
	var richText22 = {};	// @richText
	var richText21 = {};	// @richText
	var richText19 = {};	// @richText
	var button12 = {};	// @button
	var button11 = {};	// @button
	var btnDelete = {};	// @button
	var dlgsave = {};	// @icon
	var dlgdelete = {};	// @icon
	var dlgnext = {};	// @icon
	var dlgprev = {};	// @icon
	var dlgclose = {};	// @icon
	var button7 = {};	// @button
	var dataGrid2 = {};	// @dataGrid
	var button1 = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	richText23.click = function richText23_click (event)// @startlock
	{// @endlock
		// Add your code here
		window.location.href = '../employees';
	};// @lock

	richText22.click = function richText22_click (event)// @startlock
	{// @endlock
		// Add your code here
		
	};// @lock

	richText21.click = function richText21_click (event)// @startlock
	{// @endlock
		// Add your code here
		window.location.href = '../customer';
	};// @lock

	richText19.click = function richText19_click (event)// @startlock
	{// @endlock
		// Add your code here
		
	};// @lock

	button12.click = function button12_click (event)// @startlock
	{// @endlock
		$$('dialog1').closeDialog(); //ok button
	};// @lock

	button11.click = function button11_click (event)// @startlock
	{// @endlock
		$$('dialog1').closeDialog(); //cancel button
	};// @lock

	btnDelete.click = function btnDelete_click (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

	dlgsave.click = function dlgsave_click (event)// @startlock
	{// @endlock
	    var isNew = sources.product.isNewElement();
		sources.product.save({
	        onSuccess: function(event) {
	        	if(isNew){
		        	//Set message
		        	//$$("rtxtmessage").setValue("Successfully");
		       
            sources.product.addEntity(sources.product.getCurrentElement()); 
                // put the current entity in the datasource's entity collection
        
		        	//Show dialog
		        	//$$('messagedlg').center()
		        	//$$('messagedlg').displayDialog();
		        	$$("tabView1").selectTab(1);
		        }else{
		        	//Close Input
					$$("tabView1").selectTab(1);
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

	dlgdelete.click = function dlgdelete_click (event)// @startlock
	{// @endlock
		var isNew = sources.product.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
			//set text confirm
			//$$("rtxtconfirm").setValue("本当にこのレコードを削除してよろしいですか。?");
			//Show dialog
        	//$$('confirmdlg').center()
        	//$$('confirmdlg').displayDialog();
		}
	};// @lock

	dlgnext.click = function dlgnext_click (event)// @startlock
	{// @endlock
		var isNew = sources.product.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
			sources.product.save({
		        onSuccess: function(event) {
		        	sources.product.selectNext();
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

	dlgprev.click = function dlgprev_click (event)// @startlock
	{// @endlock
		var isNew = sources.product.isNewElement();
		if (isNew) {
		    return false;
		}
		else {
			sources.product.save({
		        onSuccess: function(event) {
		        	sources.product.selectPrevious();
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

	dlgclose.click = function dlgclose_click (event)// @startlock
	{// @endlock
		//Close Input
		$$("tabView1").selectTab(1);
	};// @lock

	button7.click = function button7_click (event)// @startlock
	{// @endlock
		//New Entity
		sources.product.newEntity();
		
		//Show Input
		$$("tabView1").selectTab(2);
		
		//Remove readonly cho input
	//	$$("txtSeq").setReadOnly(false);
		
		//Set focus cho input
	//	$$("txtSeq").focus();
	};// @lock

	dataGrid2.onRowDblClick = function dataGrid2_onRowDblClick (event)// @startlock
	{// @endlock
		//Show Input
		$$("tabView1").selectTab(2);
		
		//Set readonly cho input
	//	$$("txtSeq").setReadOnly(true);
		
		//Set focus cho input
	//	$$("txtName").focus();
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		// Add your code here
		$$('tabView1').center();
	 //  $$('contanDanhsachsanpham').center();
	   //   $('#contanDanhsachsanpham').center();
		//employees = employee.allemployees();
		
		//sources.employees.sync();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("richText23", "click", richText23.click, "WAF");
	WAF.addListener("richText22", "click", richText22.click, "WAF");
	WAF.addListener("richText21", "click", richText21.click, "WAF");
	WAF.addListener("richText19", "click", richText19.click, "WAF");
	WAF.addListener("button12", "click", button12.click, "WAF");
	WAF.addListener("button11", "click", button11.click, "WAF");
	WAF.addListener("btnDelete", "click", btnDelete.click, "WAF");
	WAF.addListener("dlgsave", "click", dlgsave.click, "WAF");
	WAF.addListener("dlgdelete", "click", dlgdelete.click, "WAF");
	WAF.addListener("dlgnext", "click", dlgnext.click, "WAF");
	WAF.addListener("dlgprev", "click", dlgprev.click, "WAF");
	WAF.addListener("dlgclose", "click", dlgclose.click, "WAF");
	WAF.addListener("button7", "click", button7.click, "WAF");
	WAF.addListener("dataGrid2", "onRowDblClick", dataGrid2.onRowDblClick, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock

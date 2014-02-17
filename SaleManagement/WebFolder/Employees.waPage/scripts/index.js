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
	var btnClearSearch = {};	// @button
	var btnAddSearch = {};	// @button
	var btnOK = {};	// @button
	var btnCancel = {};	// @button
	var documentEvent = {};	// @document
	var richText5 = {};	// @richText
	var richText6 = {};	// @richText
	var richText11 = {};	// @richText
	var richText3 = {};	// @richText
	var button7 = {};	// @button
	var button5 = {};	// @button
	var button4 = {};	// @button
	var btnSearch = {};	// @button
	var button2 = {};	// @button
	var button1 = {};	// @button
	var image7 = {};	// @image
	var imgCancel = {};	// @image
	var btnAdd = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	btnClearSearch.click = function btnClearSearch_click (event)// @startlock
	{// @endlock
		// Add your code here
		$$('ctnSearch_1').hide();
	};// @lock

	btnAddSearch.click = function btnAddSearch_click (event)// @startlock
	{// @endlock
		// Add your code here
		$$('ctnSearch_1').show();
		
	};// @lock

	btnOK.click = function btnOK_click (event)// @startlock
	{// @endlock
		
		var curSet = sources.employee.getEntityCollection();
	
		var count,nameAndOr,nameContainer,stringQuery,newSet;
		//nameAndOr=$$('cbxAndOr').getValue();
		var exact=$$('cbxExact').getValue();
		var valSearch="*"+$$('txtValSearch').getValue()+"*";
		
		if(exact=="Exact"){
			valSearch=$$('txtValSearch').getValue();
		}
		var fieldSearch= $$('cbxFieldSearch').getValue();
		stringQuery=fieldSearch+' = '+'"'+valSearch+'"';
		//var listparams=valSearch+','+
		
		for(count=1;count<2;count++)
		{
			//$$('txtTest').setValue(count);
			nameContainer='ctnSearch'+'_'+count;
			if($$(nameContainer).isVisible()==true)
			{
				
				paramsCount=count+1;
				nameAndOr='cbxAndOr'+'_'+count;
				nameFieldSearch='cbxFieldSearch'+'_'+count;
				nameValueSearch='txtValSearch'+'_'+count;
				var valSearchn="*"+$$(nameValueSearch).getValue()+"*";
				//valSearchn=$$(nameValueSearch).getValue();
				
				stringQuery=stringQuery + ' ' + $$(nameAndOr).getValue()+' '+$$(nameFieldSearch).getValue()+' = '+'"'+valSearchn+'"';
			}
			
			
		}
		//stringQuery=stringQuery+ '"'+valSearch+'"';

		//var paramString=valSearch + "," + valSearchn;
		
		
		if($$('chxSearchAll').getValue()==true){
			$$('txtTest').setValue(stringQuery +' '+ $$('chxSearchAll').getValue());
			sources.employee.filterQuery(stringQuery);
		}else{
			//sources.employee.all();
			//var allSet=sources.employee.all();
			sources.employee.query(stringQuery);
			var allSet=sources.employee.getEntityCollection();
			$$('txtTest').setValue(allSet.length);
//		sources.employee.query(stringQuery, { onSuccess: function(event) // execute the query on the entity collection (and not on the datasource)
//    	{
//  		  	  newSet = event.entityCollection; // put the resulting entity collection into newSet
  		  	  //$$('txtTest').setValue(allSet.length);
    		  allSet.each({ onSuccess: function(event) // execute the query on the entity collection (and not on the datasource)
   	  		  {
   	  			curSet.add(event.entity);
     			//$$('txtTest').setValue(curSet.length);
  	  		  }});
  	  		        		
//  		}});
  		
		sources.employee.setEntityCollection(curSet); // replace the datasource's current entity collection
		}
		//$$('txtTest').setValue(newSet.length);
		
		//$$('rtxTest').setValue(fieldSearch);
		//sources.employee.query('EmployeeName= :1',{params: [valSearch]});
		$$('dlgSearch').closeDialog(); //ok button

	};// @lock

	btnCancel.click = function btnCancel_click (event)// @startlock
	{// @endlock
		$$('dialog1').closeDialog(); //cancel button
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

	richText5.click = function richText5_click (event)// @startlock
	{// @endlock
		// Add your code here
		window.location.href = '../customer';
	};// @lock

	richText6.click = function richText6_click (event)// @startlock
	{// @endlock
		// Add your code here
		window.location.href = '../DangKySanPham';
	};// @lock

	richText11.click = function richText11_click (event)// @startlock
	{// @endlock
		// Add your code here
		//window.location.href = '../employees';
	};// @lock

	richText3.click = function richText3_click (event)// @startlock
	{// @endlock
		// Add your code here
		
	};// @lock

	button7.click = function button7_click (event)// @startlock
	{// @endlock
		// Add your code here
		
		//New Entity
		sources.employee.newEntity();
		//
		//Show Input
		$$('tabView1').selectTab(2);
		
					
	};// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		// Add your code here
		
		//New Entity
		sources.employee.newEntity();
		//
		//Show Input
		$$('tabView1').selectTab(2);
		
					
	};// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		// Add your code here
		
		//New Entity
		sources.employee.newEntity();
		//
		//Show Input
		$$('tabView1').selectTab(2);
		
					
	};// @lock

	btnSearch.click = function btnSearch_click (event)// @startlock
	{// @endlock
		// Add your code here
		$$('dlgSearch').center();
		$$('dlgSearch').displayDialog();
					
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		// Add your code here
		
		//New Entity
		sources.employee.newEntity();
		//
		//Show Input
		$$('tabView1').selectTab(2);
		
					
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		// Add your code here
		
		sources.employee.all();
		
					
	};// @lock

	image7.click = function image7_click (event)// @startlock
	{// @endlock
		// Add your code here
		//var isNew = sources.customer.isNewElement();
		sources.employee.save({onSuccess:function(event) //  save the current entity
        {
            	sources.employee.addEntity(sources.employee.getCurrentElement()); 
                // put the current entity in the datasource's entity collection
        } });
        $$('tabView1').selectTab(1);
	};// @lock

	imgCancel.click = function imgCancel_click (event)// @startlock
	{// @endlock
		// Add your code here
		$$('tabView1').selectTab(1);
	};// @lock

	btnAdd.click = function btnAdd_click (event)// @startlock
	{// @endlock
		// Add your code here
		
		//New Entity
		sources.employee.newEntity();
		//
		//Show Input
		$$('tabView1').selectTab(2);
		
					
	};// @lock
	

// @region eventManager// @startlock
	WAF.addListener("btnClearSearch", "click", btnClearSearch.click, "WAF");
	WAF.addListener("btnAddSearch", "click", btnAddSearch.click, "WAF");
	WAF.addListener("btnOK", "click", btnOK.click, "WAF");
	WAF.addListener("btnCancel", "click", btnCancel.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("richText5", "click", richText5.click, "WAF");
	WAF.addListener("richText6", "click", richText6.click, "WAF");
	WAF.addListener("richText11", "click", richText11.click, "WAF");
	WAF.addListener("richText3", "click", richText3.click, "WAF");
	WAF.addListener("button7", "click", button7.click, "WAF");
	WAF.addListener("button5", "click", button5.click, "WAF");
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("btnSearch", "click", btnSearch.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("image7", "click", image7.click, "WAF");
	WAF.addListener("imgCancel", "click", imgCancel.click, "WAF");
	WAF.addListener("btnAdd", "click", btnAdd.click, "WAF");
// @endregion
};// @endlock

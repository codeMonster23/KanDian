// JavaScript Document
jQuery.divselect = function(textword,droplist,changetext) {
        textword.unbind("click").click(function(e){
		droplist.hide();
        if($(this).siblings(droplist).css("display")=="none"){
           $(this).siblings(droplist).slideDown("fast");
        }else{
            $(this).siblings(droplist).slideUp("fast");
        }
		e.stopPropagation();
    });
    	changetext.click(function(e){
        var txt = $(this).text();
        $(this).parent().siblings(textword).html(txt);
        droplist.hide();
        e.stopPropagation();
    });
		$(document).click(function(){
		droplist.hide();
	});
};

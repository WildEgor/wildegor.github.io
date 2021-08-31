$(document).ready(function(){
    if (localStorage['user']) {
        $('#R_form').addClass("hide"); 
        $('#L_form').addClass("hide");
        $('UserNameShow').addClass('hide');
    } else
    {

    }
    
});
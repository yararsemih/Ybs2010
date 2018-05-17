$(document).ready(function(){

	$('#nav-button').click(function(){
		$('#side_nav').animate({
    		left: "59%"
		},800);
    	$('#nav-button').hide();
	});

	$('#close_Lmenu').click(function(){
		$('#side_nav').animate({
    		left: "-59%"
		},800);
    	$('#nav-button').show(900);
	});

	$('#left_menu a').click(function(e){
		$('section').hide();
		var s_id = $(this).attr("href");
		$(s_id).fadeIn(1000);
	});

	

});
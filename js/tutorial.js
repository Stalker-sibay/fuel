

$(document).ready(function() {
	
	//if submit button is clicked
	$('#submit').click(function () {		
		
		//Get the data from all the fields
		var name = $('input#name');
		var email = $('input#email');
		var website = $('select#website');
		var comment = $('input#comment');

		//Simple validation to make sure user entered something
		//If error found, add hightlight class to the text field
		if (name.val()=='') {
			name.addClass('hightlight');
			return false;
		} else name.removeClass('hightlight');
		
		if (email.val()=='') {
			email.addClass('hightlight');
			return false;
		} else email.removeClass('hightlight');
		
		if (comment.val()=='') {
			comment.addClass('hightlight');
			return false;
		} else comment.removeClass('hightlight');
		
		//organize the data properly
		var data = 'name=' + name.val() + '&email=' + email.val() + '&website=' + 
		website.val() + '&comment='  + encodeURIComponent(comment.val());
		
		//disabled all the text fields
		//$('.text').attr('disabled','true');
		
		//show the loading sign
		//$('.loading').show();
		
		//start the ajax
		$.ajax({
			//this is the php file that processes the data and send mail
			url: "bin/process.php",	
			
			//GET method is used
			type: "GET",

			//pass the data			
			data: data,		
			
			//Do not cache the page
			cache: false,
			
			//success
			success: function (html) {				
				//if process.php returned 1/true (send mail success)
				if (html==1) {					
					//hide the form
					//$('.form').fadeOut('slow');					
					
					//show the success message
					//$('.done').fadeIn('slow');
					$.colorbox({inline:true, href:"#succ"});
					$("input#comment, input#name").val('');
					$('select').data('selectik').changeCS({index: 1});
					//$("input.text").val('');
					
				//if process.php returned 0/false (send mail failed)
				} else alert('Sorry, unexpected error. Please try again later.');				
			}		
		});
		
		//cancel the submit button default behaviours
		return false;
	});	
});	
$(document).ready(function() {
	
	//if submit button is clicked
	$('#submit_1').click(function () {		
		
		//Get the data from all the fields
		var name = $('input#name_1');
		var email = $('input#email_1');
		var website = $('select#website_1');
		var comment = $('input#comment_1');

		//Simple validation to make sure user entered something
		//If error found, add hightlight class to the text field
		if (name.val()=='') {
			name.addClass('hightlight');
			return false;
		} else name.removeClass('hightlight');
		
		if (email.val()=='') {
			email.addClass('hightlight');
			return false;
		} else email.removeClass('hightlight');
		
		if (comment.val()=='') {
			comment.addClass('hightlight');
			return false;
		} else comment.removeClass('hightlight');
		
		//organize the data properly
		var data = 'name=' + name.val() + '&email=' + email.val() + '&website=' + 
		website.val() + '&comment='  + encodeURIComponent(comment.val());
		
		//disabled all the text fields
		//$('.text').attr('disabled','true');
		
		//show the loading sign
		//$('.loading').show();
		
		//start the ajax
		$.ajax({
			//this is the php file that processes the data and send mail
			url: "bin/process.php",	
			
			//GET method is used
			type: "GET",

			//pass the data			
			data: data,		
			
			//Do not cache the page
			cache: false,
			
			//success
			success: function (html) {				
				//if process.php returned 1/true (send mail success)
				if (html==1) {					
					//hide the form
					//$('.form_1').fadeOut('slow');					
					
					//show the success message
					//$('.done').fadeIn('slow');
					$.colorbox({inline:true, href:"#succ"});
					$("input#comment_1, input#name_1").val('');
					$('select').data('selectik').changeCS({index: 1});
					//$("input.text").val('');
					
				//if process.php returned 0/false (send mail failed)
				} else alert('Sorry, unexpected error. Please try again later.');				
			}		
		});
		
		//cancel the submit button default behaviours
		return false;
	});	
});	
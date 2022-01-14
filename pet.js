$(document).ready(function()
			{
				$('.menu').click(function(){
					$('.navbar2_r').toggleClass('active')
				})
				$('#click1').click(function()
				{
					$('#hien1').slideToggle();
					$('#show1').toggle();
					$('#hide1').toggle();
		
				});
				$('#click2').click(function()
				{
					$('#hien2').slideToggle();
					$('#show2').toggle();
					$('#hide2').toggle();
		
				});
				$('#click3').click(function()
				{
					$('#hien3').slideToggle();
					$('#show3').toggle();
					$('#hide3').toggle();
				});
				 $("#up a[href='#navbar1']").on('click', function(event) {		   
				    if (this.hash !== "") {	      
				      event.preventDefault();
				      var hash = this.hash;
				      $('html, body').animate({
				        scrollTop: $(hash).offset().top
				      }, 900, function(){
				        window.location.hash = hash;
				      });
				    } 
				  });
			});
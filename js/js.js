/*карусель*/
		$('.owl-car1').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:true,
			items:1
		})
	
/*карусель*/
		$('.owl-car2').owlCarousel({
    		loop:true,
    		margin:10,
    		nav:true,
    		responsive:{
		        0:{
		            items:1
		        },
		        1000:{
		            items:1
		        },
		        1400:{
		            items:1
		        }
		    }
		})
/*карусель*/	
			$('.owl-car3').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        1000:{
		            items:2
		        },
		        1400:{
		            items:3
		        }
		    }
		})
/*карусель*/	
			$('.owl-car4').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:true,
		    responsive:{
		        0:{
		            items:1
		        },		         
		    }
		})
/*попап*/	
		var delay_popup = 2000;
		setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);
	
/*бургерменю*/		
			$('.header__burger-menu').click(function(event) {
				$('.header__menu-nav').slideToggle("slow");			
				});	
		
			$('.carousel__menu-bottom').click(function(event) {
				$('.carousel__menu').slideToggle("slow");			
				});	
		
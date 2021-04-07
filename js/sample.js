(function ($) {
  "use strict";

var $window = $(window); 
var $body = $('body'); 

/* Preloader Effect */
$window.on( "load", function() {
   $(".preloader").fadeOut(600);
  });

/* Sticky header */
$window.scroll(function(){
  	if ($window.scrollTop() > 200) {
		$('.navbar').addClass('sticky-header');
	} else {
		$('.navbar').removeClass('sticky-header');
	}
});


/* slick nav */
// $('#main-menu').slicknav({prependTo:'#responsive-menu',label:'', closeOnClick:true});
  
/* Top Menu */
// $(document).on('click','.navbar-nav li a, #responsive-menu ul li a',function(){
// 	var id = $(this).attr('href');
// 	var h = parseFloat($(id).offset().top);
// 	$('body,html').stop().animate({
// 		scrollTop: h - 70
// 	}, 800);
// 	return false;
// });

/* Add active class to tab panel */
var $card = $(".card"); 
$card.on("show.bs.collapse hide.bs.collapse", function(e) {
	if (e.type=='show'){
	  $(this).addClass('active');
	}else{
	  $(this).removeClass('active');
	}
 });  

/* Testimonial slider */
// var swiper = new Swiper('.testimonial-slider', {
// 	autoplay: {delay: 5000},
// 	pagination: {
// 		el: '.testimonial-pagination',
// 		clickable: true
// 	},
  // });


/* Init Counter */
  // $('.counter').counterUp({ delay: 4, time: 1000 });

/* Popup video */
// $('.popup-video').magnificPopup({
  //     type: 'iframe',
  //     preloader: true,
  // });


/* Contact form validation */
// var $contactform=$("#contactForm");
// $contactform.validator({focus: false}).on("submit", function (event) {
// 	if (!event.isDefaultPrevented()) {
// 		event.preventDefault();
// 		submitForm();
// 	}
// });

// function submitForm(){
// 	/* Initiate Variables With Form Content*/
// 	var name = $("#name").val();
// 	var email = $("#email").val();
// 	var subject = $("#subject").val();
// 	var message = $("#message").val();

// 	$.ajax({
// 		type: "POST",
// 		url: "form-process.php",
// 		data: "name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message,
// 		success : function(text){
// 			if (text == "success"){
// 				formSuccess();
// 			} else {
// 				submitMSG(false,text);
// 			}
// 		}
// 	});
// }

// function formSuccess(){
// 	$contactform[0].reset();
// 	submitMSG(true, "Message Sent Successfully!")
// }

// function submitMSG(valid, msg){
// 	if(valid){
// 		var msgClasses = "h3 text-center text-success";
// 	} else {
// 		var msgClasses = "h3 text-center text-danger";
// 	}
// 	$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
// }
/* Contact form validation end */

/* Animate with wow js */
  // new WOW({mobile:false}).init(); 

})(jQuery);
$(document).ready(function() {
  $(".banner").waypoint(function(direction){
    $(".fadeInUp").addClass("animated fadeInUp")
    $(".fadeInRight").addClass("animated  fadeInRight")
    $(".fadeInUp , .fadeInRight").css({" animation-duration": "3s",
      "animation-fill-mode": "both",
      "-webkit-animation-duration": "3s",
      "-webkit-animation-fill-mode": "both"});
  },{
    offset : '20%'
  });

  // currency-price
  $(".currency-price-box").waypoint(function(direction){
    $(".fadeInUp1").addClass("animated fadeInUp")
    // $(".fadeInRight").addClass("animated  fadeInRight")
    $(".fadeInUp1 ").css({" animation-duration": "3s",
      "animation-fill-mode": "both",
      "-webkit-animation-duration": "3s",
      "-webkit-animation-fill-mode": "both"});
  },{
    offset : '50%'
  });
  $(".aboutus").waypoint(function(direction){
    $(".fadeInUp2").addClass("animated fadeInUp")
    // $(".fadeInRight").addClass("animated  fadeInRight")
    $(".fadeInUp2,.fadeInUp3 ").css({" animation-duration": "3s",
      "animation-fill-mode": "both",
      "-webkit-animation-duration": "3s",
      "-webkit-animation-fill-mode": "both"});
  },{
    offset : '50%'
  });
  $(".buy-step").waypoint(function(direction){
    $(".fadeInUp3").addClass("animated fadeInUp")
    // $(".fadeInRight").addClass("animated  fadeInRight")
    $(".fadeInUp3 ").css({
      "animation-fill-mode": "both",
      
      "-webkit-animation-fill-mode": "both"});
  },{
    offset : '50%'
  });
  $(".why-choose-us").waypoint(function(direction){
    $(".fadeInLeft").addClass("animated fadeInUp")
    // $(".fadeInRight").addClass("animated  fadeInRight")
    $(".fadeInLeft ").css({
      "animation-fill-mode": "both",
      
      "-webkit-animation-fill-mode": "both"});
  },{
    offset : '50%'
  });
  $(".how-it-works").waypoint(function(direction){
    var height = $(".how-it-works").height();
          
    if ($(this).scrollTop() > height) {
        $(".zoomIn").animate({delay:10,time:2000,width:'100%'});
       
    } else {
        $(".ZoomIn").css("width", "60%");
        $(".zoomIn").css("opacity","1");

       

    }
    // $("zoomIn").addClass("animated fadeInUp")
    // // $(".fadeInRight").addClass("animated  fadeInRight")
    // $(".zoomIn ").css({
    //   "animation-fill-mode": "both",
      
    //   "-webkit-animation-fill-mode": "both"});
  },{
    offset : '50%'
  });

  $(".portfolio").waypoint(function(direction){
    $(".fadeInLeft").addClass("animated fadeInLeft");
    $(".fadeInRight1").addClass("animated fadeInRight");
    // $(".fadeInRight").addClass("animated  fadeInRight")
    $(".fadeInLeft").css({
      "animation-fill-mode": "both",
      
      "-webkit-animation-fill-mode": "both"});
  },{
    offset : '50%'
  });
  $(".buy-cryptocurrency").waypoint(function(direction){
    $(".fadeInUp5").addClass("animated fadeInUp");
    $(".zoomIn1").css("opacity","1");
  },{
    offset : '50%'
  });

  $(".faq").waypoint(function(direction){
    $(".fadeInUp6").addClass("animated fadeInUp")
  },{
    offset : '50%'
  });

  $(".contactus").waypoint(function(direction){
    $(".fadeInUp7").addClass("animated fadeInUp")
  },{
    offset : '50%'
  });
  // var waypoint = new Waypoint({
  //   element: document.getElementsByClassName('banner'),
  //   handler: function(direction) {
  //     // alert('I am 20px from the top of the window')
  //     $(".fadeInUp").addClass('animated fadeInUp')
      
  //     $(".fadeInUp , .fadeInRight").css({" animation-duration": "3s",
  //     "animation-fill-mode": "both",
  //     "-webkit-animation-duration": "3s",
  //     "-webkit-animation-fill-mode": "both"});
  //     $(".fadeInRight").addClass("animated  fadeInRight")
      
  //   },
  //   offset: 20 
  // })
  $('.counter').counterUp({ delay: 4, time: 1000 });
    $(window).scroll(function(){
        var scroll = $(window).ScrollTop;
          if(scroll<50){
       
            $('#mynav').removeClass('.navbar-brand-add');

            }
            else {
           $(".navbar-brand-add").css("font-size", "xxx-large");
            }
           })

           var swiper = new Swiper('.testimonial-slider', {
            autoplay: {delay: 5000},
            pagination: {
              el: '.testimonial-pagination',
              clickable: true
            },
            });

            var width = 1250;
            var animationSpeed = 1000;
            var pause = 3000;
            var currentSlide = 1;
        
            //cache DOM elements
            var $slider = $('#slider');
            var $slideContainer = $('.slides', $slider);
            var $slides = $('.slide', $slider);
        
            var interval;
        
            function startSlider() {
                interval = setInterval(function() {
                    $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                        if (++currentSlide === $slides.length) {
                            currentSlide = 1;
                            $slideContainer.css('margin-left', 0);
                        }
                    });
                }, pause);
            }
            function pauseSlider() {
                clearInterval(interval);
            }
        
            $slideContainer
                .on('mouseenter', pauseSlider)
                .on('mouseleave', startSlider);
        
            startSlider();
           
            var $card = $(".card"); 
            $card.on("show.bs.collapse hide.bs.collapse", function(e) {
              if (e.type=='show'){
                $(this).addClass('active');
              }else{
                $(this).removeClass('active');
              }
             });  
           

           

})
// document.getElementsByClassName('collapsed').onclick = function () {
//   console.log("clicked");
//   }
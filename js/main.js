(function($) {
    'use strict';

   

    // ================================== Preloader ==================================

    $(window).on('load', function() {
        var preloaderFadeOutTime = 500;
        function hidePreloader() {
            var preloader = $('.spinner-wrapper');
            setTimeout(function() {
                preloader.fadeOut(preloaderFadeOutTime);
            }, 500);
        }
        hidePreloader();
    })

    // ================================== Menu Responsive ==================================
  

    // ================================== Header ==================================

    // add class fixed for menu when scroll
    if ($('.header').hasClass('header'))  {
        var header_height = $('header'),
            offset = header_height.offset();

        $(window).scroll(function() {
            if ($(window).scrollTop() > 100) {
                $(".header").addClass('header-fixed');
            } else {
                $(".header").removeClass('header-fixed');
            }
        });
    };

    // show menu when scroll up, hide menu when scroll down
    var lastScroll = 200;
    $(window).on('scroll load', function(event) {
        var st = $(this).scrollTop();
        if (st > lastScroll && st > 300) {
            $('.header').addClass('hide-menu');

        } 
        else if (st < lastScroll) {
            $('.header').removeClass('hide-menu');
        }
        if ($(window).scrollTop() == 0) {
            $('.header').removeClass('.header-fixed').removeClass('hide-menu');
        };
        lastScroll = st;

    });

    // ================================== Button Back Top ==================================

    $(function() {

        // Scroll Event
        $(window).on('scroll', function() {
            var scrolled = $(window).scrollTop();
            if (scrolled > 300) $('.back-top').addClass('active');
            if (scrolled < 300) $('.back-top').removeClass('active');
        });


        $('.back-top').click(function() {
            $('html,body').animate({
                scrollTop: 0
            }, 700);
            return false;
        });
    });

    // ================================== Animate ==================================

    $(function() {
        $('[class *= "animated"]').addClass('wow').attr('data-wow-duration', '1.5s');
        $('.animated-Fade-In-Left').addClass('fadeInLeft').attr('data-wow-delay', '0.5s');
        $('.animated-Fade-In-Right').addClass('fadeInRight').attr('data-wow-delay', '0.5s');
        $('.animated-Slide-In-Down').addClass('slideInDown').attr('data-wow-delay', '0.5s');
        $('.animated-Slide-In-Left').addClass('slideInLeft').attr('data-wow-delay', '0.5s');
        $('.animated-Slide-In-Right').addClass('slideInRight').attr('data-wow-delay', '0.5s');
        /*Fade In Up and Other Delay*/
        $('.animated-Fade-In-Up-1').addClass('fadeInUp').attr('data-wow-delay', '0.2s');
        $('.animated-Fade-In-Up-2').addClass('fadeInUp').attr('data-wow-delay', '0.4s');
        $('.animated-Fade-In-Up-3').addClass('fadeInUp').attr('data-wow-delay', '0.6s');
        $('.animated-Fade-In-Up-4').addClass('fadeInUp').attr('data-wow-delay', '0.8s');
        $('.animated-Fade-In-Up-5').addClass('fadeInUp').attr('data-wow-delay', '1s');
        $('.animated-Fade-In-Up-6').addClass('fadeInUp').attr('data-wow-delay', '1.2s');
        /*Fade In and Other Delay*/
        $('.animated-Fade-In-1').addClass('fadeIn').attr('data-wow-delay', '0.4s');
        $('.animated-Fade-In-2').addClass('fadeIn').attr('data-wow-delay', '0.6s');
        $('.animated-Fade-In-3').addClass('fadeIn').attr('data-wow-delay', '0.8s');
        $('.animated-Fade-In-4').addClass('fadeIn').attr('data-wow-delay', '1s');
        $('.animated-Fade-In-5').addClass('fadeIn').attr('data-wow-delay', '1.2s');
        $('.animated-Fade-In-6').addClass('fadeIn').attr('data-wow-delay', '1.4s');
        $('.animated-Fade-In-7').addClass('fadeIn').attr('data-wow-delay', '1.6s');
    });
    $(function() {
        new WOW().init();
    });

    // ================================== Carousel Custom ==================================
  
    $(function(){
        $(".typed").typed({
            strings: ["Digital Products.", "Web Application."],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: null,
            // typing speed
            typeSpeed: 20,
            // time before typing starts
            startDelay: 1200,
            // backspacing speed
            backSpeed: 20,
            // time before backspacing
            backDelay: 500,
            // loop
            loop: true,
            // false = infinite
            loopCount: 10,
            // show cursor
            showCursor: false,
            // character for cursor
            cursorChar: "|",
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html',
            // call when done callback function
            callback: function() {},
            // starting callback function before each string
            preStringTyped: function() {},
            //callback for every typed string
            onStringTyped: function() {},
            // callback for reset
            resetCallback: function() {}
        });
    });
 
    $(function(){
        gsap.config({ trialWarn: false });
        console.clear();
        gsap.registerPlugin(ScrollTrigger, SplitText);
        const split = new SplitText("p", { type: "lines" });
        
        split.lines.forEach((target) => {
          gsap.to(target, {
            backgroundPositionX: 0,
           
            ease: "linear",
            scrollTrigger: {
              trigger: target,
              markers: false,
              scrub: 1,
              start: "top center",
              end: "bottom center"
            }
          });
        });
        
    });
  

    $(function() {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        // create the smooth scroller FIRST!
        let smoother = ScrollSmoother.create({
          smooth: 2,
          effects: true,
        });
    
    });
    AOS.init({
        duration: 1200,
        delay: 500,
      })

      $(document).ready(function () {
        var swiper = new Swiper(".mySwiper", {
          slidesPerView: 3, // Hiển thị 3 card cùng lúc
          spaceBetween: 20, // Khoảng cách giữa các card
          loop: true, // Cho phép trượt vô hạn
         // autoplay: {
           // delay: 3000, // Tự động trượt sau 3 giây
           // disableOnInteraction: false, // Vẫn tiếp tục autoplay ngay cả khi người dùng tương tác
         // },
         
        });
      });
      
      

})(jQuery);
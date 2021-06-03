$(function() {
    let header= $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos=$(window).scrollTop();
    let nav= $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos,introH);

    $(window).on("scroll resize",function(){
        introH = intro.innerHeight();
        scrollPos=$(this).scrollTop();

        checkScroll(scrollPos,introH);
    });

    function checkScroll(scrollPos,introH){
        if(scrollPos>introH){
            header.addClass("fixed");
        }else{
            header.removeClass("fixed");
        }
    }


    // Smooth scroll
    $("[data-scroll]").on('click',function(event){
        event.preventDefault();
        let elementId = $(this).data('scroll');
        let elementOffSet = $(elementId).offset().top;

        nav.removeClass("show");
        $("html, body").animate({
            scrollTop:elementOffSet -60 
        }, 1000);

    });

    // navToggle
    navToggle.on("click",function(){
        nav.toggleClass("show");
    });

    // reviewSlider
    let slider = $("#reviewSlider");
    
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        arrows:false,
        dots:true
      });

});












// const header = document.querySelector(".header");
// const navLinks= document.querySelectorAll(".nav__link");

// window.addEventListener("scroll" ,checkScroll);


// document.addEventListener("DOMContentLoaded",checkScroll);

// function checkScroll(){
//     let scrollPos= window.scrollY;
//     console.log(scrollPos);
//     if(scrollPos>0){
//         header.classList.add("fixed");
//     }else{
//         header.classList.remove("fixed");
//     }
// }


// for(let navItem of navLinks){
//     navItem.addEventListener("click",function(){
//         console.log(navItem.text);
//     });
// }



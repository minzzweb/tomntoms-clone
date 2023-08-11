$(function(){

///메뉴바 함수문 (pc)
function NavFnPc(){
    const $navList = $('.nav>.nav-list>li>a');
    
    $navList.on('mouseenter',function(){
        $(this).next().css('display','block');
        $(this).css('color','#691c1c');
        $(this).parent().siblings().children('a').css('color','#000')
    });
    $navList.parent().on('mouseleave',function(){
        $(this).find('.nav-sub').css('display','none');
        $navList.css('color','#000');
    });
    
    
}
NavFnPc();

////메뉴바 함수문 (mobile)
//전역변수
const $mobileNavBg = $('.mobile-nav');
const $mobileNav = $('.mobile-nav-side');
const $mobileNavEls = $('.mobile-nav-box .nav-list>li>a');
const $mobileNavSub = $mobileNavEls.next();

function NavFnMob(){
    
    const $navOpen = $('#nav_open');
    const $navClose = $('.nav_btn');

    $navOpen.on('click',function(){
        $mobileNavBg.css('left','0%');
        $mobileNav.css('left','0%');
    });
    $navClose.on('click',function(){
        mobileMenuFirst();
    });
}
NavFnMob();

///화면너비가 769이상이면 모바일 메뉴상태 초기화
$(window).resize(function(){
    var windowWidth = $(window).width();
    if(windowWidth > 768){
        mobileMenuFirst();
    }
});


///모바일 메뉴 토글
function mobileMenuToggle(){
    $mobileNavEls.on('click',function(){
        const  $mobileNavSub = $(this).next();
        $(this).css({'backgroundColor':'#dedede','color':'#fff'});
        $(this).parent().siblings().children('a').css({'backgroundColor':'#fff','color':'#444'});
        $(this).parent().siblings().find('.nav-sub').css('display','none');
        $mobileNavSub.toggle();
    
    });
}
mobileMenuToggle();
//모바일 메뉴 초기화 css
function mobileMenuFirst(){
        $mobileNavBg.css('left','-100%');
        $mobileNav.css('left','-100%');
        $mobileNavSub.css('display','none');
        $mobileNavEls.css({'backgroundColor':'#fff','color':'#444'});
}


//메인 슬라이더 스와이퍼 


var swiper = new Swiper('.main-visual .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    paginationClickable: true,
    autoplayDisableOnInteraction: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },        
  });

  //인덱스 넣기
  swiper.on('transitionEnd', function() { 
        let nowIdx = swiper.realIndex;
        $('#page_number').text(nowIdx+1);
     });


  //자동 재생 멈춤 버튼 
$(".swiper-button-pause").click(function(){
    swiper.autoplay.stop();
    $(this).css('display','none');
    $(".swiper-button-play").css('display','block');
});

$(".swiper-button-play").click(function(){
    swiper.autoplay.start();
    $(this).css('display','none');
    $(".swiper-button-pause").css('display','block');
});



//공지사항 슬라이더 스와이퍼
var swiperNotice = new Swiper('.vertival-notice .swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });


//탐앤탐스 메뉴 슬라이더 스와이퍼
var swiperMenu = new Swiper('.menu-slide-box .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    paginationClickable: true,
    autoplayDisableOnInteraction: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints:{
        769: {
            slidesPerView: 3,
          },
      },
  });
  swiperMenu.on('transitionEnd', function() { 
    let nowIdx = swiperMenu.realIndex;
    $('#page_number-menu').text(nowIdx+1);
 });

 $(".swiper-button-pause-menu").click(function(){
    swiperMenu.autoplay.stop();
    $(this).css('display','none');
    $(".swiper-button-play-menu").css('display','block');
});

$(".swiper-button-play-menu").click(function(){
    swiperMenu.autoplay.start();
    $(this).css('display','none');
    $(".swiper-button-pause-menu").css('display','block');
});

//탐앤탐스 MD pick 슬라이더 스와이퍼
var swiperMdpick = new Swiper('.mdpick-slide-box .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    paginationClickable: true,
    autoplayDisableOnInteraction: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints:{
        769: {
            slidesPerView: 3,
          },
      },
  });
  swiperMdpick.on('transitionEnd', function() { 
    let nowIdx = swiperMdpick.realIndex;
    $('#page_number-mdpick').text(nowIdx+1);
 });

 $(".swiper-button-pause-mdpick").click(function(){
    swiperMdpick.autoplay.stop();
    $(this).css('display','none');
    $(".swiper-button-play-mdpick").css('display','block');
});

$(".swiper-button-play-mdpick").click(function(){
    swiperMdpick.autoplay.start();
    $(this).css('display','none');
    $(".swiper-button-pause-mdpick").css('display','block');
});


//스크롤 이벤트시 헤더 높이 변화와 스크롤 버튼 보이게

$(window).on('scroll',function(){

  var scroll_top = $(this).scrollTop();
 
   if (scroll_top > 130){
      $("header").css({'height':'110px','border-bottom-width': '1px','border-bottom-style': 'solid','border-bottom-color': 'rgba(212, 152, 33, 0.36)'});
      $('.scrollTop-button').css('display','block');
   }else{
    $("header").css('height','130px');
    $('.scrollTop-button').css('display','none');
   }

    //스크롤 이벤트시 헤더 높이 변화 
    
});

//스크롤버튼 클릭시 맨 위로 

$('.scrollTop-button button').on('click',function(){
   $('html,body').animate({ scrollTop : 0},400);
});


});

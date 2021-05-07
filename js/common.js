$(function(){
    $(window).scroll(function(){
      // console.log($(document).height())
       // console.log($(this))
       let documentHeight = $(document).height();
       let num = 0;
       let header = $("header");
       let scTop = $(this).scrollTop();
        /*gnb 배경 바뀌는 scroll*/
        if(scTop > num && $(window).width() > 768){
            header.addClass('gnb_bg');
            $(".logo").html("<img src='./img/main_logo_scroll.png' alt='main logo'>");
        }else if(scTop <= num && $(window).width() > 768){
            header.removeClass('gnb_bg');
            $(".logo").html("<img src='./img/main_logo.png' alt='main logo'>");
        }
        /*section_1 스크롤애니메이션*/
        if(scTop > documentHeight/18){
          $("#section_1 .samdasoo").addClass('on');
          $("#section_1 .circle1").addClass('on');
          $("#section_1 .text_box_1").addClass('on');
        }else{
          $("#section_1 .samdasoo").removeClass('on');
          $("#section_1 .circle1").removeClass('on');
          $("#section_1 .text_box_1").removeClass('on');
        }
        if(scTop > documentHeight/7){
          $("#section_1 .text_box_2 h2").addClass('on');
        }else{
          $("#section_1 .text_box_2 h2").removeClass('on');
        }
        if(scTop > documentHeight/5){
          $("#section_1 .water_img").addClass('on');
          $("#section_1 .text_box_3").addClass('on');
        }else{
          $("#section_1 .water_img").removeClass('on');
          $("#section_1 .text_box_3").removeClass('on');
        }
        if(scTop > documentHeight/4){
          $("#section_1 .circle2").addClass('on');
        }else{
          $("#section_1 .circle2").removeClass('on');
        }
        /*section_2 hover 애니메이션*/
        /*section_3 스크롤애니메이션*/
        if(scTop > documentHeight/2){
          $("#section_3 #first").addClass('on');
          $("#section_3 #second").addClass('on');
          $("#section_3 #third").addClass('on');
        }else{
          $("#section_3 #first").removeClass('on');
          $("#section_3 #second").removeClass('on');
          $("#section_3 #third").removeClass('on');
        }
    })
    /* tablet 크기에서 로고 이미지 바꾸기*/
    $(window).resize(function(){
      if( $(window).width() < 769){
        $(".logo").html("<img src='./img/main_logo_scroll.png' alt='main logo'>");
      }else{
        $(".logo").html("<img src='./img/main_logo.png' alt='main logo'>");
      }
    });
    if( $(window).width() < 769){
      $(".logo").html("<img src='./img/main_logo_scroll.png' alt='main logo'>");
    }else{
      $(".logo").html("<img src='./img/main_logo.png' alt='main logo'>");
    }

    /*subpage label background color 바꾸기*/
    $(".btn label").on("click",function(){
      $("section input").attr("checked","checked")
    })
})

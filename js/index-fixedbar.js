
$(function(){
     $('.scroll-top').hide();
     $(window).scroll(function(){
         if($(this).scrollTop() > 300){
                 $('.scroll-top').show();
             }else{
                 $('.scroll-top').hide();
             }
         });
     $('.scroll-top').click(function(){
             $('html ,body').animate({scrollTop: 0}, 300);
             return false;
         });
 });
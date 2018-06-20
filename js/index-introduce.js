$('.introduce').css('width',$('header').css('width'));

$('.cell1,.cell4').hover(function () {
    var index = $(this).index()+1;
    $(this).css({'background':'url(../imgs/Li/t'+index+'.png) no-repeat',
        'background-size':'100% 100%',
        'border':'none',
    });
    // $(this).addClass('animated swing');
    $(this).find('span').stop().animate({
        right:-40
    },100)
},function () {
    $(this).css({'background':'#FFF',
        'border':'1px solid #999999'
    });
    $(this).find('span').animate({
        right:12
    },100);
    // $(this).removeClass('animated swing');
});

$('.cell2,.cell3').hover(function () {
    var index = $(this).index()+1;
    $(this).css({'background':'url(../imgs/Li/t'+index+'.png) no-repeat',
        'background-size':'100% 100%',
        'border':'none'
    });
    // $(this).addClass('animated swing');
    $(this).find('span').stop().animate({
        right:-40
    },100)
},function () {
    $(this).css({'background':'#FFF',
        'border':'1px solid #999999'
    });
    $(this).find('span').animate({
        right:16
    },100);
    // $(this).removeClass('animated swing');
});


//无缝滚动
var timer2 = setInterval(start,3000);

function start() {
    $('.gd').stop().animate({left: '-336px'}, 300,function () {
        $(this).css('left',0);
        $('.gd>li').eq(0).appendTo($('.gd'));
    });
}
//点击右侧按钮
$('.arrow-right').click(function () {
    $('.gd').stop().animate({left: '-336px'}, 300,function () {
            $(this).css('left',0);
            $('.gd>li').eq(0).appendTo($('.gd'));
    });
});

//点击左侧按钮
var flag = 0
$('.arrow-left').click(function () {
    $('.gd').stop().animate({left: '0'}, 300);

        $('.gd>li:first').before($('.gd>li:last'));
});

//按钮/标签悬停停止/开始
$('.arrow-right,.arrow-left,.gd').hover(function () {
    clearInterval(timer2);
},function () {
    clearInterval(timer2);
    timer2 = setInterval(start,3000);
});



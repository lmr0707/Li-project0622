$('.banner').css('width',$('header').css('width'));

//轮播图效果
var bq = $('.banner .u1>li');
var num = 0;
var box = $('.imgbox');

//自动轮播效果
var timer = setInterval(change,2500);

//点击标签切换图片
for(let i=0; i<bq.length; i++){
    bq.eq(i).click(function () {
        num = $(this).index();
        box.eq(i).siblings('div').fadeOut('slow');
        box.eq(i).fadeIn('slow');
        bq.eq(i).siblings('li').css('opacity',.5);
        bq.eq(i).css('opacity',.8);
        box.eq(i).find('button').css('z-index',100);

    })
}

$('.B_right').click(function right() {
    num++;
    if(num==6){
        num = 0;
    }
    box.eq(num).siblings('div').fadeOut('slow');
    box.eq(num).fadeIn('slow');
    bq.eq(num).siblings('li').css('opacity',.5);
    bq.eq(num).css('opacity',.8);
    box.eq(num).find('button').css('z-index',100);
});
function change() {
    num++;
    if(num==6){
        num = 0;
    }
    box.eq(num).siblings('div').fadeOut('slow');
    box.eq(num).fadeIn('slow');
    bq.eq(num).siblings('li').css('opacity',.5);
    bq.eq(num).css('opacity',.8);
    box.eq(num).find('button').css('z-index',100);
}
$('.B_left').click(function left() {
    num--;
    if(num==-1){
        num = 5;
    }
    box.eq(num).siblings('div').fadeOut('slow');
    box.eq(num).fadeIn('slow');
    bq.eq(num).siblings('li').css('opacity',.5);
    bq.eq(num).css('opacity',.8);
    box.eq(num).find('button').css('z-index',100);
});
//鼠标放入停止轮播
$('.banner').mouseenter(function () {
    clearInterval(timer);
});
$('.banner').mouseleave(function () {
    clearInterval(timer);
    timer = setInterval(change,2500);
});

//图片效果
$('.evec').hover(function () {
    $(this).find('div').find('img').addClass('animated fadeOutRight');
},function () {
    $(this).find('div').find('img').removeClass('animated fadeOutRight');
});

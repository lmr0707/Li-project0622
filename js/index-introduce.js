$('.introduce').css('width',$('header').css('width'));

// $('.cell1,.cell4').hover(function () {
//     var index = $(this).index()+1;
//     $(this).css({'background':'url(../imgs/Li/t'+index+'.png) no-repeat',
//         'background-size':'100% 100%',
//         'border':'none',
//     });
//     $(this).find('span').stop().animate({
//         right:-40
//     },100)
// },function () {
//     $(this).css({'background':'#FFF',
//         'border':'1px solid #999999'
//     });
//     $(this).find('span').animate({
//         right:12
//     },100);
// });
//
// $('.cell2,.cell3').hover(function () {
//     var index = $(this).index()+1;
//     $(this).css({'background':'url(../imgs/Li/t'+index+'.png) no-repeat',
//         'background-size':'100% 100%',
//         'border':'none'
//     });
//     $(this).find('span').stop().animate({
//         right:-40
//     },100)
// },function () {
//     $(this).css({'background':'#FFF',
//         'border':'1px solid #999999'
//     });
//     $(this).find('span').animate({
//         right:16
//     },100);
// });

//水波纹效果
var timer3 = setInterval(fn,2000);

function fn() {
$('.introduce .cell').addClass('wave');
    clearInterval(timer3);
    setTimeout(function () {
    $('.introduce .cell').removeClass('wave');
    timer3 = setInterval(fn,2000);
},5000);
}
//鼠标移入水波纹效果移除
$('.cells').hover(function () {
    $(this).addClass('cells-hover');
    clearInterval(timer3);
},function () {
    $(this).removeClass('cells-hover');
    clearInterval(timer3);
    timer3 = setInterval(fn,2000);
});

//鼠标点击动画效果
$('#cell>div').click(function () {
    var index = $(this).index();
    //sun切换图片
    $('#sun>img').removeClass('center-icon');
    setTimeout(function () {
    $('#sun>img').eq(index).addClass('center-icon');
    },800);
    //添加涟漪效果
    $('#center').addClass('center-move');
    $('#center2').addClass('center2-move');

    //清除原有内容
    $('.texttitle').removeClass('appear');

    //对应点击切换内容
    if($('.texttitle').eq(index).class == 'appear'){
        $('.texttitle').eq(index).removeClass('appear').addClass('disappear');
    }else {
        $('.texttitle').eq(index).removeClass('disappear').addClass('appear');
    }
    //清除涟漪效果
    setTimeout(function () {
        $('#center').removeClass('center-move');
        $('#center2').removeClass('center2-move');
    },1500);
});
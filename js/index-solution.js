$('.solution').css('width',$('header').css('width'));

//默认选中
$('.myList').eq(0).css('display','block');
$('.sidebar-item').eq(0).css({
    'background-image': 'linear-gradient(270deg, #0B61FF 0, #00A1FF 97%)',
});
$('.sidebar-item').eq(0).find('a').css('border','none');

for(let i=1; i<6; i++){
    $('.myList').eq(i).css('display','none');
}

//动画效果及背景颜色改变
$('.sidebar-item').hover(function () {
    var index = $(this).index();
    //清除
    for(let i=0; i<6; i++){
        $('.myList').eq(i).css({'display':'none',});
        $('.sidebar-item').eq(i).css({
            'background-image': 'none',
        });
        $('.sidebar-item').eq(i).stop().animate({paddingLeft:'15px'},200);
        if(i<5){
            $('.sidebar-item').eq(i).find('a').css('border-bottom','1px solid rgb(50,50,50)');
        }
        $('.myList').eq(i).removeClass('animated fadeInUp');
    }
    //添加
    $('.myList').eq(index).css('display','block');
    $('.myList').eq(index).addClass('animated fadeInUp');
    $('.sidebar-item').eq(index).css({
        'background-image': 'linear-gradient(270deg, #0B61FF 0, #00A1FF 97%)',
    });
    $('.sidebar-item').eq(index).stop().animate({paddingLeft:'30px'},200);
    $('.sidebar-item').eq(index).find('a').css('border','none');
    //背景
    $('.solution-bg').css('background','url(../imgs/Li/solution_bg'+index+'.png) center top no-repeat rgb(0, 0, 0)');
});

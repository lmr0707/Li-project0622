//nav鼠标移入移除二级菜单效果
$('.nav0').on({
        'mouseenter':function () {
            $('.myCon_1').stop().slideDown('fast');
            $('.sub-nav .nav-group .nav-types h3').eq(0).css('background','#1B1B25');
        },
        'mouseleave':function () {
            $('.myCon_1').stop().slideUp('fast');
        }
    }
);
$('.nav3').on({
        'mouseenter':function () {
            $('.myCon_2').stop().slideDown('fast');
        },
        'mouseleave':function () {
            $('.myCon_2').stop().slideUp('fast');
        }
    }
);
$('.nav4').on({
        'mouseenter':function () {
            $('.myCon_3').stop().slideDown('fast');
            $('.market-nav .nav-types>h3:eq(0)>a').css('background','#1B1B25');
        },
        'mouseleave':function () {
            $('.myCon_3').stop().slideUp('fast');
        }
    }
);
$('.nav5').on({
        'mouseenter':function () {
            $('.myCon_4').stop().slideDown('fast');
        },
        'mouseleave':function () {
            $('.myCon_4').stop().slideUp('fast');
        }
    }
);
$('.nav6').on({
        'mouseenter':function () {
            $('.myCon_5').stop().slideDown('fast');
        },
        'mouseleave':function () {
            $('.myCon_5').stop().slideUp('fast');
        }
    }
);
//nav鼠标移入移除切换效果
for(let i=0; i<12;i++){

    $('.products-nav .nav-types>h3').eq(i).mouseenter(function () {
        $('.products-nav .nav-content>li').eq(i).show();
        $('.products-nav .nav-content>li').eq(i).siblings().hide();
    });
}

//nav鼠标移入背景颜色字体颜色改变，缩进

$('.nav0 .sub-nav .nav-group .nav-types h3:eq(0),.market-nav .nav-types>h3:eq(0)').css({'background':'#1B1B25 url(../imgs/Li/jt.png) 200px -117px no-repeat',
    'color': '#0b83e1',
    'padding-left':'60px'
});
$('.nav0 .sub-nav .nav-group .nav-types h3').mouseenter(function () {
    $(this).css({'background':'#1B1B25 url(../imgs/Li/jt.png) 200px -117px no-repeat',
        'color': '#0b83e1'
    });
    $('.nav0 .sub-nav .nav-group .nav-types h3').eq(0).css('background','#1B1B25');
    $(this).stop().animate({'padding-left':'60px'},200);

    $(this).siblings().css({'background':'none',
        'color': '#999'});
    $(this).siblings().stop().animate({'padding-left':'46px'},100);

    //鼠标移入，一级菜单栏长度跟随二级菜单栏变化
    var index =$(this).index();
    var height = $('.nav0 .nav-content>li').eq(index).css('height');
    $('.nav0 .nav-types').css('height',height);
});

//云市场一级菜单栏效果

$('.market-nav .nav-types>h3').mouseenter(function () {
    $(this).css({
        'background': '#1B1B25 url(../imgs/Li/jt.png) 200px -117px no-repeat',
    });
    $(this).find('a').css('color', '#0b83e1');
    $(this).stop().animate({'padding-left': '60px'}, 200);

    $(this).siblings().css({
        'background': 'none',
    });
    $(this).siblings().find('a').css('color', '#999');
    $(this).siblings().stop().animate({'padding-left': '46px'}, 100);
});

for(let i=0; i<5;i++){

    $('.market-nav .nav-types>h3').eq(i).mouseenter(function () {
        $('.market-nav .nav-content>li').eq(i).show();
        $('.market-nav .nav-content>li').eq(i).siblings().hide();
    });
}
//菜单栏取消点击效果

$('.header-list>li>a').mouseup(function () {
    $(this).css({
        'text-decoration': 'none',
        'color': '#FFF'
    })
});
$('.header-list>li>a,.login>li>a').hover(function () {
    $(this).css({
        'text-decoration': 'none',
        'color': '#0b83e1'
    })
},function () {
    $(this).css({
        'text-decoration': 'none',
        'color': '#FFF'
    })
});
$('.login>li:last>a').mouseenter(function () {
    $(this).css('color','white');
});

//搜索栏
$('.glyphicon-search').click(function () {
    $('#header-search-input').animate({width:'150px',
        opacity:1},500);
    $('#header-search-button').css({'right':'5%'});
});

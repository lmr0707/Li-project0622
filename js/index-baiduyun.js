//nav鼠标移入移除二级菜单效果
$('.nav0').on({
     'mouseenter':function () {
         $('.myCon_1').stop().show();
     },
     'mouseleave':function () {
         $('.myCon_1').stop().hide();
     }
     }
 );
 $('.nav3').on({
         'mouseenter':function () {
             $('.myCon_2').stop().show();
         },
         'mouseleave':function () {
             $('.myCon_2').stop().hide();
         }
     }
 );
 $('.nav4').on({
         'mouseenter':function () {
             $('.myCon_3').stop().show();
         },
         'mouseleave':function () {
             $('.myCon_3').stop().hide();
         }
     }
 );
$('.nav5').on({
        'mouseenter':function () {
            $('.myCon_4').stop().show();
        },
        'mouseleave':function () {
            $('.myCon_4').stop().hide();
        }
    }
);
$('.nav6').on({
        'mouseenter':function () {
            $('.myCon_5').stop().show();
        },
        'mouseleave':function () {
            $('.myCon_5').stop().hide();
        }
    }
);
//nav鼠标移入移除切换效果
for(let i=0; i<12;i++){

$('.nav-types>h3').eq(i).mouseenter(function () {
    $('.nav-content>li').eq(i).show();
    $('.nav-content>li').eq(i).siblings().hide();
});
}

//nav鼠标移入背景颜色字体颜色改变，缩进
$('.sub-nav .nav-group .nav-types h3').eq(0).css({'background':'#1B1B25 url(https://cdn.bdstatic.com/portal/img/common/icon_02901645.png) 200px -117px no-repeat',
    'color': '#0b83e1',
    'padding-left':'60px'
});
$('.sub-nav .nav-group .nav-types h3').mouseenter(function () {
       $(this).css({'background':'#1B1B25 url(https://cdn.bdstatic.com/portal/img/common/icon_02901645.png) 200px -117px no-repeat',
           'color': '#0b83e1'
       });
       $(this).stop().animate({'padding-left':'60px'},200);

        $(this).siblings().css({'background':'none',
            'color': '#999'});
        $(this).siblings().stop().animate({'padding-left':'46px'},100);
});
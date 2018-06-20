$('.product').css('width',$('header').css('width'));
// $('.product-details').eq(1).show();
// $('.product-details').eq(2).show();
$('.product-details').eq(0).show();
// $('.product-block').eq(1).addClass('active');
// $('.product-block').eq(2).addClass('active');
$('.product-block').eq(0).addClass('active');

for(let i=0; i<3; i++){
    $('.product-block').eq(i).hover(function () {
        //全部清除
        for(var j=0; j<3; j++){
            $('.product-details').eq(j).hide();
            $('.product-block').eq(j).removeClass('active');
        }
        //选中添加
        $('.product-details').eq(i).show();
        $(this).addClass('active');
    })
}

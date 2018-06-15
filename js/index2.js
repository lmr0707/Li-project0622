//清除导航栏li点击背景色
$('.myUL>li').click(function () {
    var _this = $(this);
    $(this).mouseleave(function () {
        _this.css('background','none');
    })
});
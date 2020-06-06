/*-------------------------------------------*\
   main.js
   - black page of menu
   - menu btn
   - slider
   - scrollbar
   - shop small
   - drop down
   - advanced search
   - close btn
   - sort select
   - page loader
   - light gallery
   - rating
   - tab click
   - toggle class
   - change class
   - form validate
   - count down timer
   - hover item
   - switch disabled
   - profile tabs
   - sidebar tab
   - nice number
\*-------------------------------------------*/

//==================
// black page of menu
//==================
$(".black-page , .close-menu i").click(function () {
    $(".menu-items").css({right: -300});
    $(".black-page").fadeOut();
    $("[data-close-btn]").trigger("click")
    $("html").removeAttr("style");
});
$("[data-open-black-page]").click(function(){
    $(".black-page").fadeIn();
})
//==================
// menu btn
//==================
$(".menu-items ul li div i.icon-font-plus-menu").click(function () {
    $(this).parents("ul li").find("ul.menu-down").stop().slideToggle();
    $(this).toggleClass("icon-font-plus-menu");
    $(this).toggleClass("icon-font-remove-menu");
});

$(".menu-small-icon").click(function (e) {
    $(".menu-items").css({right: 0});
    $(".black-page").fadeIn();
    $("html").css({overflow: "hidden"});
    e.stopPropagation();
    e.preventDefault();
});
console.log();

$(window).on('ready load resize change', function () {
    $(".edame").css({
        right:$(".header-fix > .container").offset().left + $(".header-fix > .container").outerWidth()
    })
});
$(window).scroll(function () {
    if($(window).scrollTop() >= $(".xl-header").offset().top){
        $(".header-fix").addClass("active");
    }else{
        $(".header-fix").removeClass("active");
    }
    $("[data-animation][data-scroll-anim]").each(function () {
        var _self = $(this);
        if ($(window).scrollTop() >= _self.offset().top - _self.height() - 200){
            _self.addClass(_self.attr("data-animation")).css("opacity","1");
        }
    });
});
$(".search-btn .icon-font-search").click(function (e) {
    $(this).parent().toggleClass("active");
    e.preventDefault()
});

//==================
// page loader
//==================
$(window).on("load", function () {
    setTimeout(function () {
        if ($(".loader-page")[0]) {
            $(".loader-page").fadeOut();
        }
        $("[data-animation]:not([data-scroll-anim])").each(function () {
            var _self = $(this);
            _self.addClass(_self.attr("data-animation")).css("opacity","1");
        });
        $("[data-animation][data-scroll-anim]").each(function () {
            var _self = $(this);
            if ($(window).scrollTop() >= _self.offset().top - _self.height() - 200){
                _self.addClass(_self.attr("data-animation")).css("opacity","1");
            }
        });
    }, 150);
});
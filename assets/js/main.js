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
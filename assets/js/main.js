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
$("[data-open-black-page]").click(function () {
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

$(window).on('ready load resize change', function () {
    $(".edame").css({
        right: $(".header-fix > .container").offset().left + $(".header-fix > .container").outerWidth()
    })
    $(".edame-right").css({
        left: $(".header-fix > .container").offset().left + $(".header-fix > .container").outerWidth()
    })
    $(".home-page").css("height", $(window).height())
});
$(window).scroll(function () {
    if ($(window).scrollTop() >= $("header").offset().top) {
        $(".header-fix").addClass("active").css("top", $(".xl-header").offset().top);
    } else {
        $(".header-fix").removeClass("active");
    }
    $("[data-animation][data-scroll-anim]").each(function () {
        var _self = $(this);
        if ($(window).scrollTop() >= _self.offset().top - _self.height() - 200) {
            _self.addClass(_self.attr("data-animation")).css("opacity", "1");
        }
    });
    $("[data-scroll-anim-parent]").each(function () {
        var _self = $(this);
        if ($(window).scrollTop() >= _self.offset().top - _self.height() - 200) {
            _self.find("[data-animation]").each(function () {
                $(this).addClass($(this).attr("data-animation")).css("opacity", "1");
            });
        }
    });
});
$(".search-btn .icon-font-search:not(.stop-click)").click(function (e) {
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
        $("[data-animation]:not([data-scroll-anim]):not(.parent-selector-anim)").each(function () {
            var _self = $(this);
            _self.addClass(_self.attr("data-animation")).css("opacity", "1");
        });
        $("[data-animation][data-scroll-anim]").each(function () {
            var _self = $(this);
            if ($(window).scrollTop() >= _self.offset().top - _self.height() - 200) {
                _self.addClass(_self.attr("data-animation")).css("opacity", "1");
            }
        });
        $("[data-scroll-anim-parent]").each(function () {
            var _self = $(this);
            if ($(window).scrollTop() >= _self.offset().top - _self.height() - 200) {
                _self.find("[data-animation]").each(function () {
                    $(this).addClass($(this).attr("data-animation")).css("opacity", "1");
                });
            }
        });
    }, 150);
});


//==================
// get font
//==================
$("[data-get-font]").each(function () {
    $(this).css("font-size", $(this).attr("data-get-font") + "px");
});
var check_spin = 0;
$(".font-changer .icon-plus").click(function () {
    if (check_spin < 5) {
        $("[data-get-font]").each(function () {
            var get_font_size = eval($(this).attr("data-get-font"));
            get_font_size += 1;
            $(this).attr("data-get-font", get_font_size);
            $(this).css("font-size", $(this).attr("data-get-font") + "px");
        });
        check_spin += 1;
    }
});
$(".font-changer .icon-minus").click(function () {
    if (check_spin > -5) {
        $("[data-get-font]").each(function () {
            var get_font_size = eval($(this).attr("data-get-font"));
            get_font_size -= 1;
            $(this).attr("data-get-font", get_font_size);
            $(this).css("font-size", $(this).attr("data-get-font") + "px");
        });
        check_spin -= 1;
    }
});
$(".font-changer .alphabet").click(function () {
    $("[data-get-font]").each(function () {
        check_spin = 0
        $(this).css("font-size", $(this).attr("data-default-font") + "px");
        $(this).attr("data-get-font", $(this).attr("data-default-font"));
    });
});


//==================
// slider
//==================

$('[data-slider]').each(function () {
    var $this = $(this);
    var option = {
        cellAlign: $this.attr("data-cell-align"),
        asNavFor: $this.attr("data-nav-select"),
        contain: true,
        groupCells: eval($this.attr("data-disable-number")),
        wrapAround: eval($this.attr("data-loop")),
        setGallerySize: true,
        resize: true,
        prevNextButtons: false,
        cellSelector: ".item",
        pageDots: eval($this.attr("data-items-nav")),
        autoPlay: eval($this.attr("data-autoPlay")),
        pauseAutoPlayOnHover: eval($this.attr("data-pauseAutoPlayOnHover")),
        rightToLeft: true,
        fade: eval($this.attr("data-fade")),
    };
    $this.find(".this-slider").flickity(option);
    $this.find(".this-slider").trigger("dragMove.flickity");
    var trigger_slider = function (event, pointer, moveVector) {
        if ($this.find(".this-slider .item:first").hasClass("is-selected")) {
            $this.parents(".slider").find(".chevron-left:not(.chevrons-right)").attr("disabled", "disabled");
        } else {
            $this.parents(".slider").find(".chevron-left:not(.chevrons-right)").removeAttr("disabled", "disabled");
        }
        if ($this.find(".this-slider .item:last").hasClass("is-selected")) {
            $this.parents(".slider").find(".chevron-right:not(.chevrons-right)").attr("disabled", "disabled");
        } else {
            $this.parents(".slider").find(".chevron-right:not(.chevrons-right)").removeAttr("disabled", "disabled");
        }


        if ($this.find(".this-slider .item:first").hasClass("is-selected")) {
            $this.parents(".slider").find(".chevron-left.chevrons-right").attr("disabled", "disabled");
            $this.parents(".slider").find(".chevron-right.chevrons-right").removeAttr("disabled", "disabled");
        }
        if ($this.find(".this-slider .item:last").hasClass("is-selected")) {
            $this.parents(".slider").find(".chevron-left.chevrons-right").removeAttr("disabled", "disabled");
            $this.parents(".slider").find(".chevron-right.chevrons-right").attr("disabled", "disabled");
        }
    };
    if (!option.wrapAround) {
        $this.find(".this-slider").on("dragStart.flickity dragMove.flickity dragEnd.flickity select.flickity", trigger_slider);
    }
    // $this.find(".this-slider").mouseenter(function () {
    //     $this.find("[data-timer-slider]").addClass("pause-timer");
    // });
    // $this.find(".this-slider").on( "change.flickity",function () {
    //     $this.find("[data-timer-slider]").addClass("active").removeClass("pause-timer");
    // });

    if ($this.siblings(".slider-title").find(".chevron-left").length) {
        $this.siblings(".slider-title").find(".chevron-left").click(function () {
            $(this).parents(".slider-title").siblings("[data-slider]").find(".this-slider").flickity('previous');
            $this.find(".this-slider").trigger("dragMove.flickity");
        });
    } else {
        $this.find(".chevron-left").click(function () {
            $this.find(".this-slider").flickity('previous');
            $this.find(".this-slider").trigger("dragMove.flickity");
        });
    }
    if ($this.siblings(".slider-title").find(".chevron-right").length) {
        $this.siblings(".slider-title").find(".chevron-right").click(function () {
            $(this).parents(".slider-title").siblings("[data-slider]").find(".this-slider").flickity('next');
            $this.find(".this-slider").trigger("dragMove.flickity");
        });
    } else {
        $this.find(".chevron-right").click(function () {
            $this.find(".this-slider").flickity('next');
            $this.find(".this-slider").trigger("dragMove.flickity");
        });
    }
    $(window).on('ready load resize orientationchange', function () {
        var page_dots_length = $this.find(".flickity-page-dots").length ? $this.find(".flickity-page-dots").outerHeight(true) : 0;
        $this.height($this.find(".item").outerHeight(true) + page_dots_length);
        $this.find(".this-slider").height($this.find(".item").outerHeight(true) + page_dots_length);


        if ($(this).width() <= 350) {
            $this.attr("data-disable-number", $this.attr("data-disable-number-xxs"));
            if ($this.find(".this-slider .item").length <= $this.attr("data-disable-number")) {
                option["draggable"] = false;
                $this.find(".this-slider").flickity('destroy').flickity(option);
            } else {
                option["draggable"] = true;
                option["groupCells"] = eval($this.attr("data-disable-number"));
                $this.find(".this-slider").flickity('destroy').flickity(option);

                $this.find(".this-slider").flickity('selectCell', 1);


            }
        }
        if ($(this).width() > 350 && $(this).width() < 450) {
            $this.attr("data-disable-number", $this.attr("data-disable-number-xs"));
            if ($this.find(".this-slider .item").length <= $this.attr("data-disable-number")) {
                option["draggable"] = false;
                $this.find(".this-slider").flickity('destroy').flickity(option);
            } else {
                option["draggable"] = true;
                option["groupCells"] = eval($this.attr("data-disable-number"));
                $this.find(".this-slider").flickity('destroy').flickity(option);

                $this.find(".this-slider").flickity('selectCell', 1);


            }
        }
        if ($(this).width() > 450 && $(this).width() < 767) {
            $this.attr("data-disable-number", $this.attr("data-disable-number-s"));
            if ($this.find(".this-slider .item").length <= $this.attr("data-disable-number")) {
                option["draggable"] = false;
                $this.find(".this-slider").flickity('destroy').flickity(option);
            } else {
                option["draggable"] = true;
                option["groupCells"] = eval($this.attr("data-disable-number"));
                $this.find(".this-slider").flickity('destroy').flickity(option);

                $this.find(".this-slider").flickity('selectCell', 1);


            }
        }
        if ($(this).width() > 767 && $(this).width() < 991) {
            $this.attr("data-disable-number", $this.attr("data-disable-number-m"));
            if ($this.find(".this-slider .item").length <= $this.attr("data-disable-number")) {
                option["draggable"] = false;
                $this.find(".this-slider").flickity('destroy').flickity(option);
            } else {
                option["draggable"] = true;
                option["groupCells"] = eval($this.attr("data-disable-number"));
                $this.find(".this-slider").flickity('destroy').flickity(option);
            }
        }
        if ($(this).width() >= 992) {
            $this.attr("data-disable-number", $this.attr("data-disable-number-l"));
            if ($this.find(".this-slider .item").length <= $this.attr("data-disable-number")) {
                option["draggable"] = false;
                $this.find(".this-slider").flickity('destroy').flickity(option);
            } else {
                option["draggable"] = true;
                option["groupCells"] = eval($this.attr("data-disable-number"));
                $this.find(".this-slider").flickity('destroy').flickity(option);
            }
        }
        if ($(this).width() > 991 && $(this).width() < 1400) {
            $this.attr("data-disable-number", $this.attr("data-disable-number-custom-l"));
            if ($this.find(".this-slider .item").length <= $this.attr("data-disable-number")) {
                option["draggable"] = false;
                $this.find(".this-slider").flickity('destroy').flickity(option);
            } else {
                option["draggable"] = true;
                option["groupCells"] = eval($this.attr("data-disable-number"));
                $this.find(".this-slider").flickity('destroy').flickity(option);
            }

        }
        if ($(this).width() > 1400) {
            $this.attr("data-disable-number", $this.attr("data-disable-number-xl"));
            if ($this.find(".this-slider .item").length <= $this.attr("data-disable-number")) {
                option["draggable"] = false;
                $this.find(".this-slider").flickity('destroy').flickity(option);
            } else {
                option["draggable"] = true;
                option["groupCells"] = eval($this.attr("data-disable-number"));
                $this.find(".this-slider").flickity('destroy').flickity(option);
            }

        }
    });

});

//==================
// scrollbar
//==================
$(window).on('ready load resize change', function () {
    if ($("[data-scrollbar]").length) {
        $("[data-scrollbar]").each(function () {
            var $this = $(this);
            $this.scrollbar({
                "showArrows": true,
                "scrollx": "advanced",
                "scrolly": "advanced"
            });
        });
    }
});
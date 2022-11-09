$(window).scroll(function() {
    $(".social-share").removeClass("hide");
    console.log("1");
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        $(".social-share").addClass("hide");
    }
});

$(document).ready(function() {
    //   $('#menu').slicknav();
    $(".zoom-minus").click(function() {
        $(".foot-text-inc ul li a").removeClass("active");
        $("body").removeClass("zoom-plus");
        $("body").addClass("zoom-minus");
        $(this).addClass("active");
    });
    $(".zoom-plus").click(function() {
        $(".foot-text-inc ul li a").removeClass("active");
        $("body").removeClass("zoom-minus");
        $("body").addClass("zoom-plus");
        $(this).addClass("active");
    });
    $(".zoom").click(function() {
        $(".foot-text-inc ul li a").removeClass("active");
        $("body").removeClass("zoom-minus");
        $("body").removeClass("zoom-plus");
        $(this).addClass("active");
    });

    $(".search-button").click(function() {
        $(this).parent().toggleClass("open");
        $(".search-bar").toggleClass("open-search");
        $("body").toggleClass("search-overlay");
    });
    // jQuery(".accordion-cell").click(function() {
    //     if (jQuery(this).hasClass("collapsed")) {
    //         jQuery(this).removeClass("collapsed");
    //         jQuery(this).siblings().removeClass("expanded");
    //         jQuery(this).addClass("expanded");
    //         jQuery(this).siblings().addClass("collapsed");
    //     } else {
    //         jQuery(this).toggleClass("expanded");
    //         jQuery(this).siblings().toggleClass("collapsed");
    //     }
    // });

    $("#close-btn").click(function() {
        $("#search-overlay").fadeOut();
        $("#search-btn").show();
        $("body").removeClass("overlay-search");
    });
    $("#search-btn").click(function() {
        $(this).hide();
        $("#search-overlay").fadeIn();
        $("body").addClass("overlay-search");
    });

    // accordian
    var section = $("div.table__cell");

    function toggleAccordion() {
        section.removeClass("active");
        $(this).addClass("active");
    }

    section.on("click", toggleAccordion);

    $(".owl-carousel").owlCarousel({
        dots: false,
        margin: 20,
        nav: true,
        navText: [
            "<div class='nav-button owl-prev'> </div>",
            "<div class='nav-button owl-next'></div>",
        ],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
            },
            600: {
                items: 3,
                nav: false,
                dots: true,
            },
            1000: {
                items: 4,
            },
        },
    });
    // banner scroll down icon
    $(function() {
        $("#hero-scroll").click(function() {
            $("html, body").animate({ scrollTop: $(this).offset().top }, "slow");
            return false;
        });
    });
    // tabs
    // Show the first tab and hide the rest
    $("ul.tabs li").click(function() {
        var tab_id = $(this).attr("data-tab");

        $("ul.tabs li").removeClass("current");
        $(".tab-contents").removeClass("current");

        $(this).addClass("current");
        $("#" + tab_id).addClass("current");
    });

    $("ul.images li").click(function() {
        var img_id = $(this).attr("data-image");

        $("ul.images li").removeClass("current");
        $(".image-contents").removeClass("current");

        $(this).addClass("current");
        $("#" + img_id).addClass("current");
    });

    $("ul.images li").click(function() {
        var img_id = $(this).attr("data-image");

        $("ul.images li").removeClass("current");
        $(".image-contents").removeClass("current");

        $(this).addClass("current");
        $("#" + img_id).addClass("current");
    });

    $("ul.images-block li").click(function() {
        var img_id = $(this).attr("data-image");

        $("ul.images-block li").removeClass("current");
        $(".image-contents").removeClass("current");

        $(this).addClass("current");
        $("#" + img_id).addClass("current");
    });

    $(".filters ul li").click(function() {
        $(".filters ul li").removeClass("active");
        $(this).addClass("active");

        var data = $(this).attr("data-filter");
        $grid.isotope({
            filter: data,
        });
    });
    // $("#image-1 .filter-close").click(function() {
    //     $("#image-1").toggle();
    // });
    // $("#image-2 .filter-close").click(function() {
    //     $("#image-2").toggle();
    // });
    // $("#image-3 .filter-close").click(function() {
    //     $("#image-3").toggle();
    // });
    // $("#image-4 .filter-close").click(function() {
    //     $("#image-4").toggle();
    // });

    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: true,
        masonry: {
            columnWidth: ".all",
        },
    });
});
$("body").prepend('<div id="preloader"><span></span></div>');
$(document).ready(function() {
    $("#preloader").remove();
});
$(document).ready(function() {
    $(".hero-banner.inner").ripples({
        dropRadius: 2,
        perturbance: 0.001,
    });
    $(".goalsBtn").click(function(e) {
        e.preventDefault();
        var goalsID = $(this).attr("goals-id");
        $(".goalsBtn").removeClass("active");
        $(".goals-content").removeClass("active");
        $(".goals-content-" + goalsID).addClass("active");
        $(this).addClass("active");
    });

    $(".violenceBtn").click(function(e) {
        e.preventDefault();
        var violenceID = $(this).attr("violence-id");
        $(".violenceBtn").removeClass("active");
        $(".hviolence-content").removeClass("active");
        $(".hviolence-content-" + violenceID).addClass("active");
        $(this).addClass("active");
    });

    $("#job1").click(function(e) {
        e.preventDefault();
        $(".hprinciples ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".principleinfo").not("#prininfo1").slideUp();
        $("#prininfo1").toggle("slow", function() {
            if ($("#prininfo1").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hprinciples ul li").removeClass("active");
            }
        });
        console.log($(".principleinfo").not("#prininfo1"));
    });

    $("#job2").click(function(e) {
        e.preventDefault();
        $(".hprinciples ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".principleinfo").not("#prininfo2").slideUp();
        $("#prininfo2").toggle("slow", function() {
            if ($("#prininfo2").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hprinciples ul li").removeClass("active");
            }
        });
    });

    $("#job3").click(function(e) {
        e.preventDefault();
        $(".hprinciples ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".principleinfo").not("#prininfo3").slideUp();
        $("#prininfo3").toggle("slow", function() {
            if ($("#prininfo3").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hprinciples ul li").removeClass("active");
            }
        });
    });

    $(".factorsBtn").click(function(e) {
        e.preventDefault();
        var factorsID = $(this).attr("factors-id");
        $(".factorsBtn").removeClass("active");
        $(".hrisks-factors-right").removeClass("active");
        $(".hrisks-factors-right-" + factorsID).addClass("active");
        $(this).addClass("active");
    });

    $(".factorsBtn").click(function(e) {
        e.preventDefault();
        var factorsID = $(this).attr("factors-id");
        $(".factorsBtn").removeClass("active");
        $(".hservices-right").removeClass("active");
        $(".hservices-right-" + factorsID).addClass("active");
        $(this).addClass("active");
    });

    $("#integ1").click(function(e) {
        e.preventDefault();
        $(".hintegrated ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".integratedinfo").not("#intinfo1").slideUp();
        $("#intinfo1").toggle("slow", function() {
            if ($("#intinfo1").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hintegrated ul li").removeClass("active");
            }
        });
    });

    $("#integ2").click(function(e) {
        e.preventDefault();
        $(".hintegrated ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".integratedinfo").not("#intinfo2").slideUp();
        $("#intinfo2").toggle("slow", function() {
            if ($("#intinfo2").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hintegrated ul li").removeClass("active");
            }
        });
    });

    $("#integ3").click(function(e) {
        e.preventDefault();
        $(".hintegrated ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".integratedinfo").not("#intinfo3").slideUp();
        $("#intinfo3").toggle("slow", function() {
            if ($("#intinfo3").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hintegrated ul li").removeClass("active");
            }
        });
    });

    $("#integ4").click(function(e) {
        e.preventDefault();
        $(".hintegrated ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".integratedinfo").not("#intinfo4").slideUp();
        $("#intinfo4").toggle("slow", function() {
            if ($("#intinfo4").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hintegrated ul li").removeClass("active");
            }
        });
    });

    $("#integ5").click(function(e) {
        e.preventDefault();
        $(".hintegrated ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".integratedinfo").not("#intinfo5").slideUp();
        $("#intinfo5").toggle("slow", function() {
            if ($("#intinfo5").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hintegrated ul li").removeClass("active");
            }
        });
    });

    $("#integ6").click(function(e) {
        e.preventDefault();
        $(".hintegrated ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".integratedinfo").not("#intinfo6").slideUp();
        $("#intinfo6").toggle("slow", function() {
            if ($("#intinfo6").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hintegrated ul li").removeClass("active");
            }
        });
    });

    $("#integ7").click(function(e) {
        e.preventDefault();
        $(".hintegrated ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".integratedinfo").not("#intinfo7").slideUp();
        $("#intinfo7").toggle("slow", function() {
            if ($("#intinfo7").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hintegrated ul li").removeClass("active");
            }
        });
    });

    $("#integ8").click(function(e) {
        e.preventDefault();
        $(".hintegrated ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".integratedinfo").not("#intinfo8").slideUp();
        $("#intinfo8").toggle("slow", function() {
            if ($("#intinfo8").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hintegrated ul li").removeClass("active");
            }
        });
    });

    $(".timelineBtn").click(function(e) {
        e.preventDefault();
        var timelineID = $(this).attr("timeline-id");
        $(".timelineBtn").removeClass("active");
        $(".timeline-content").removeClass("active");
        $(".timeline-img").removeClass("active");
        $(".timeline-content-" + timelineID).addClass("active");
        $(".timeline-img-" + timelineID).addClass("active");
        $(this).addClass("active");
    });

    $("#narrt1").click(function(e) {
        e.preventDefault();
        $(".hnarrative ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".hnarrativeinfo").not("#narrinfo1").slideUp();
        $("#narrinfo1").toggle("slow", function() {
            if ($("#narrinfo1").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hnarrative ul li").removeClass("active");
            }
        });
    });

    $("#narrt2").click(function(e) {
        e.preventDefault();
        $(".hnarrative ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".hnarrativeinfo").not("#narrinfo2").slideUp();
        $("#narrinfo2").toggle("slow", function() {
            if ($("#narrinfo2").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hnarrative ul li").removeClass("active");
            }
        });
    });

    $("#narrt3").click(function(e) {
        e.preventDefault();
        $(".hnarrative ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".hnarrativeinfo").not("#narrinfo3").slideUp();
        $("#narrinfo3").toggle("slow", function() {
            if ($("#narrinfo3").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hnarrative ul li").removeClass("active");
            }
        });
    });

    $("#narrt4").click(function(e) {
        e.preventDefault();
        $(".hnarrative ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".hnarrativeinfo").not("#narrinfo4").slideUp();
        $("#narrinfo4").toggle("slow", function() {
            if ($("#narrinfo4").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hnarrative ul li").removeClass("active");
            }
        });
    });

    $("#narrt5").click(function(e) {
        e.preventDefault();
        $(".hnarrative ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".hnarrativeinfo").not("#narrinfo5").slideUp();
        $("#narrinfo5").toggle("slow", function() {
            if ($("#narrinfo5").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hnarrative ul li").removeClass("active");
            }
        });
    });

    $("#narrt6").click(function(e) {
        e.preventDefault();
        $(".hnarrative ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".hnarrativeinfo").not("#narrinfo6").slideUp();
        $("#narrinfo6").toggle("slow", function() {
            if ($("#narrinfo6").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hnarrative ul li").removeClass("active");
            }
        });
    });

    $("#narrt7").click(function(e) {
        e.preventDefault();
        $(".hnarrative ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".hnarrativeinfo").not("#narrinfo7").slideUp();
        $("#narrinfo7").toggle("slow", function() {
            if ($("#narrinfo7").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hnarrative ul li").removeClass("active");
            }
        });
    });

    $("#narrt8").click(function(e) {
        e.preventDefault();
        $(".hnarrative ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".hnarrativeinfo").not("#narrinfo8").slideUp();
        $("#narrinfo8").toggle("slow", function() {
            if ($("#narrinfo8").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hnarrative ul li").removeClass("active");
            }
        });
    });

    $("#narrt9").click(function(e) {
        e.preventDefault();
        $(".hnarrative ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".hnarrativeinfo").not("#narrinfo9").slideUp();
        $("#narrinfo9").toggle("slow", function() {
            if ($("#narrinfo9").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hnarrative ul li").removeClass("active");
            }
        });
    });

    $("#narrt10").click(function(e) {
        e.preventDefault();
        $(".hnarrative ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".hnarrativeinfo").not("#narrinfo10").slideUp();
        $("#narrinfo10").toggle("slow", function() {
            if ($("#narrinfo10").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hnarrative ul li").removeClass("active");
            }
        });
    });

    $("#narrt11").click(function(e) {
        e.preventDefault();
        $(".hnarrative ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".hnarrativeinfo").not("#narrinfo11").slideUp();
        $("#narrinfo11").toggle("slow", function() {
            if ($("#narrinfo11").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hnarrative ul li").removeClass("active");
            }
        });
    });

    $("#narrt12").click(function(e) {
        e.preventDefault();
        $(".hnarrative ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".hnarrativeinfo").not("#narrinfo12").slideUp();
        $("#narrinfo12").toggle("slow", function() {
            if ($("#narrinfo12").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hnarrative ul li").removeClass("active");
            }
        });
    });

    $("#narrt13").click(function(e) {
        e.preventDefault();
        $(".hnarrative ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".hnarrativeinfo").not("#narrinfo13").slideUp();
        $("#narrinfo13").toggle("slow", function() {
            if ($("#narrinfo13").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hnarrative ul li").removeClass("active");
            }
        });
    });

    $("#narrt1-1").click(function(e) {
        e.preventDefault();
        $(".hnarrative ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".hnarrativeinfo").not("#narrinfo1-1").slideUp();
        $("#narrinfo1-1").toggle("slow", function() {
            if ($("#narrinfo1-1").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hnarrative ul li").removeClass("active");
            }
        });
    });

    $("#narrt2-1").click(function(e) {
        e.preventDefault();
        $(".hnarrative ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".hnarrativeinfo").not("#narrinfo2-1").slideUp();
        $("#narrinfo2-1").toggle("slow", function() {
            if ($("#narrinfo2-1").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hnarrative ul li").removeClass("active");
            }
        });
    });

    $("#narrt3-1").click(function(e) {
        e.preventDefault();
        $(".hnarrative ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".hnarrativeinfo").not("#narrinfo3-1").slideUp();
        $("#narrinfo3-1").toggle("slow", function() {
            if ($("#narrinfo3-1").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hnarrative ul li").removeClass("active");
            }
        });
    });

    $("#narrt4-1").click(function(e) {
        e.preventDefault();
        $(".hnarrative ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".hnarrativeinfo").not("#narrinfo4-1").slideUp();
        $("#narrinfo4-1").toggle("slow", function() {
            if ($("#narrinfo4-1").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hnarrative ul li").removeClass("active");
            }
        });
    });

    $("#narrt5-1").click(function(e) {
        e.preventDefault();
        $(".hnarrative ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".hnarrativeinfo").not("#narrinfo5-1").slideUp();
        $("#narrinfo5-1").toggle("slow", function() {
            if ($("#narrinfo5-1").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hnarrative ul li").removeClass("active");
            }
        });
    });

    $("#narrt6-1").click(function(e) {
        e.preventDefault();
        $(".hnarrative ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".hnarrativeinfo").not("#narrinfo6-1").slideUp();
        $("#narrinfo6-1").toggle("slow", function() {
            if ($("#narrinfo6-1").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hnarrative ul li").removeClass("active");
            }
        });
    });

    $("#narrt7-1").click(function(e) {
        e.preventDefault();
        $(".hnarrative ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".hnarrativeinfo").not("#narrinfo7-1").slideUp();
        $("#narrinfo7-1").toggle("slow", function() {
            if ($("#narrinfo7-1").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hnarrative ul li").removeClass("active");
            }
        });
    });

    $("#narrt8-1").click(function(e) {
        e.preventDefault();
        $(".hnarrative ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".hnarrativeinfo").not("#narrinfo8-1").slideUp();
        $("#narrinfo8-1").toggle("slow", function() {
            if ($("#narrinfo8-1").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hnarrative ul li").removeClass("active");
            }
        });
    });

    $("#narrt9-1").click(function(e) {
        e.preventDefault();
        $(".hnarrative ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".hnarrativeinfo").not("#narrinfo9-1").slideUp();
        $("#narrinfo9-1").toggle("slow", function() {
            if ($("#narrinfo9-1").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hnarrative ul li").removeClass("active");
            }
        });
    });

    $("#narrt10-1").click(function(e) {
        e.preventDefault();
        $(".hnarrative ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".hnarrativeinfo").not("#narrinfo10-1").slideUp();
        $("#narrinfo10-1").toggle("slow", function() {
            if ($("#narrinfo10-1").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hnarrative ul li").removeClass("active");
            }
        });
    });

    $("#narrt11-1").click(function(e) {
        e.preventDefault();
        $(".hnarrative ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".hnarrativeinfo").not("#narrinfo11-1").slideUp();
        $("#narrinfo11-1").toggle("slow", function() {
            if ($("#narrinfo11-1").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hnarrative ul li").removeClass("active");
            }
        });
    });

    $("#narrt12-1").click(function(e) {
        e.preventDefault();
        $(".hnarrative ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".hnarrativeinfo").not("#narrinfo12-1").slideUp();
        $("#narrinfo12-1").toggle("slow", function() {
            if ($("#narrinfo12-1").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hnarrative ul li").removeClass("active");
            }
        });
    });

    $("#narrt11-2").click(function(e) {
        e.preventDefault();
        $(".hnarrative ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".hnarrativeinfo").not("#narrinfo11-2").slideUp();
        $("#narrinfo11-2").toggle("slow", function() {
            if ($("#narrinfo11-2").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hnarrative ul li").removeClass("active");
            }
        });
    });

    $("#narrt12-2").click(function(e) {
        e.preventDefault();
        $(".hnarrative ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".hnarrativeinfo").not("#narrinfo12-2").slideUp();
        $("#narrinfo12-2").toggle("slow", function() {
            if ($("#narrinfo12-2").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hnarrative ul li").removeClass("active");
            }
        });
    });

    $("#narrt13-1").click(function(e) {
        e.preventDefault();
        $(".hnarrative ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".hnarrativeinfo").not("#narrinfo13-1").slideUp();
        $("#narrinfo13-1").toggle("slow", function() {
            if ($("#narrinfo13-1").is(":visible")) {
                $(this).parent().addClass("active");
            } else {
                $(".hnarrative ul li").removeClass("active");
            }
        });
    });

    // rangeInput = document.getElementById("range");
    // container = document.querySelector("html");
    // rangeInput.addEventListener("change", function () {
    //   container.style.filter = "invert(" + rangeInput.value + "%)";
    // });

    $(".contrast").click(function() {
        $(".foot-contrast ul li a").removeClass("active");
        $("html").addClass("high-contrast");
        $(this).addClass("active");
    });
    $(".color").click(function() {
        $(".foot-contrast ul li a").removeClass("active");
        $("html").removeClass("high-contrast");
        $(this).addClass("active");
    });

    $(".info-toggle").on("click", function(e) {
        $(".artwork-list li .card .card-body").slideToggle();
        e.preventDefault();
    });

    $(".cookie-popup").fadeIn(400);
    $(".close").click(function() {
        $(".cookie-popup").css("display", "none");
    });
    $(".accept-cookie").click(function() {
        $(".cookie-popup").css("display", "none");
    });

    $(".privacy").click(function() {
        $(".privacy-popup").css("display", "block");
    });

    $(".terms").click(function() {
        $(".terms-popup").css("display", "block");
    });

    $(".privacy-popup .close").click(function() {
        $(".privacy-popup").css("display", "none");
    });

    $(".terms-popup .close").click(function() {
        $(".terms-popup").css("display", "none");
    });

    var lastScrollTop = 20;
    $(window).scroll(function() {
        var st = $(this).scrollTop();
        var header = $("header");
        var mobHeader = $(".slicknav_menu");
        setTimeout(function() {
            // if (st > lastScrollTop) {
            //   header.addClass("header_hide");
            //   header.addClass("sticky");
            //   mobHeader.addClass("header_hide");
            //   mobHeader.addClass("sticky");
            // } else {
            //   header.removeClass("header_hide");
            //   mobHeader.removeClass("header_hide");
            // }
            lastScrollTop = st;
            if (st < 35) {
                header.removeClass("sticky");
                header.removeClass("header_hide");
                mobHeader.removeClass("sticky");
                mobHeader.removeClass("header_hide");
            }
        }, 100);
    });
});

// WOW INIT
new WOW().init();

(function($) {
    "use strict";
    $(".hmanager-left .img-box").tilt({
        maxTilt: 15,
        perspective: 1400,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        speed: 1200,
        glare: false,
        maxGlare: 0.2,
        scale: 1.04,
    });
    $(".hfamily ul li").tilt({
        maxTilt: 20,
        perspective: 1400,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        speed: 1200,
        glare: false,
        maxGlare: 0.2,
        scale: 1.04,
    });
})(jQuery);
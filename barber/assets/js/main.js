function owlCarouselInit() {
    "use strict";

    function e() {
        $("#hair-style-slider .owl-item").hasClass("secondNlastActiveItem") && $("#hair-style-slider .owl-item").removeClass("secondNlastActiveItem"), $("#hair-style-slider .owl-item.center").prev(".owl-item.active").addClass("secondNlastActiveItem"), $("#hair-style-slider .owl-item.center").next(".owl-item.active").addClass("secondNlastActiveItem")
    }
    var t = $("#main-slider"),
        o = $("#partner-slider"),
        n = $("#gallery-slider"),
        a = $("#testimonial-slider"),
        l = $("#hair-style-slider"),
        s = '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        i = '<i class="fa fa-angle-left" aria-hidden="true"></i>';
    if (t.length && t.owlCarousel({
            loop: !0,
            margin: 0,
            nav: !0,
            navText: [i, s],
            dots: !1,
            autoplay: !1,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1e3: {
                    items: 1
                }
            }
        }), o.length && o.owlCarousel({
            loop: !0,
            margin: 0,
            nav: !0,
            navText: [i, s],
            dots: !1,
            autoplay: !1,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1e3: {
                    items: 4
                }
            }
        }), l.length && (l.owlCarousel({
            loop: !0,
            margin: 0,
            nav: !0,
            center: !0,
            navText: [i, s],
            dots: !1,
            mouseDrag: !1,
            lazyLoad: !0,
            touchDrag: !1,
            autoplay: !1,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1e3: {
                    items: 5
                }
            }
        }), e(), $("#hair-style-slider .owl-prev").on("click", function() {
            e()
        }), $("#hair-style-slider .owl-next").on("click", function() {
            e()
        }), $(window).resize(function() {
            e()
        })), n.length) {
        n.owlCarousel({
            loop: !0,
            margin: 0,
            nav: !0,
            navText: [i, s],
            dots: !0,
            autoplay: !1,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1e3: {
                    items: 1
                }
            }
        });
        var r = 1;
        jQuery("#gallery-slider .owl-dot").each(function() {
            jQuery(this).addClass("dotnumber" + r), jQuery(this).attr("data-info", r), r += 1
        });
        var d = 1;
        jQuery("#gallery-slider .owl-item").not(".cloned").each(function() {
            jQuery(this).addClass("slidenumber" + d), d += 1
        }), jQuery("#gallery-slider .owl-dot").each(function() {
            var e = jQuery(this).data("info"),
                t = jQuery(".slidenumber" + e + " img").attr("src");
            console.log(t), jQuery(this).css("background-image", "url(" + t + ")")
        });
        var c = jQuery("#gallery-slider .owl-dot").length,
            m = 70 / c;
        jQuery("#gallery-slider .owl-dot").css("width", m + "%"), jQuery("#gallery-slider .owl-dot").css("padding", "6%")
    }
    a.length && a.owlCarousel({
        loop: !0,
        margin: 0,
        nav: !1,
        navText: [i, s],
        dots: !0,
        autoplay: !1,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1e3: {
                items: 1
            }
        }
    })
}

function comingsoonInt() {
    "use strict";
    var e = new Date("Dec 24, 2017 15:37:25").getTime();
    setInterval(function() {
        var t = (new Date).getTime(),
            o = e - t,
            n = Math.floor(o / 864e5),
            a = Math.floor(o % 864e5 / 36e5),
            l = Math.floor(o % 36e5 / 6e4),
            s = Math.floor(o % 6e4 / 1e3);
        document.getElementById("days").innerHTML = n, document.getElementById("hours").innerHTML = a, document.getElementById("seconds").innerHTML = s, document.getElementById("minutes").innerHTML = l
    }, 1e3)
}

function initMap() {
    "use strict";
    var e = $("#gmap_canvas");
    if (e.length) {
        var t = {
                zoom: 5,
                scrollwheel: !1,
                draggable: !0,
                center: new google.maps.LatLng(22.9623, 76.0508),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            },
            o = new google.maps.Map(document.getElementById("gmap_canvas"), t),
            n = new google.maps.Marker({
                map: o,
                position: new google.maps.LatLng(22.9623, 76.0508)
            }),
            a = new google.maps.InfoWindow({
                content: "<strong>ITGEEkS</strong>"
            });
        google.maps.event.addListener(n, "click", function() {
            a.open(o, n)
        }), a.open(o, n)
    }
}
$(window).on("load", function() {
    "use strict";
    var e = $(".preloader"),
        t = $(".count-number"),
        o = $("#coming-soon-timer"),
        n = ($("#contactMap"), $("#scroll-top")),
        a = $('a[href*="#"]'),
        l = $("html, body"),
        s = $("#header");
    s.length && $(window).on("scroll", function() {
        $(this).scrollTop() > 10 ? s.addClass("sticky-header") : s.removeClass("sticky-header")
    }), t.appear(function() {
        $(this).each(function() {
            var e = $(this).attr("data-count");
            $(this).find(".counter").delay(6e3).countTo({
                from: 10,
                to: e,
                speed: 8e3,
                refreshInterval: 50
            })
        })
    }), e.length && e.addClass("loaderout"), initMap(), owlCarouselInit(), o.length && comingsoonInt(), n.length && (n.on("click", function() {
        l.animate({
            scrollTop: 0
        }, 2e3)
    }), $(window).on("scroll", function() {
        $(this).scrollTop() > 500 ? n.addClass("showScrollTop") : n.removeClass("showScrollTop")
    })), a.on("click", function(e) {
        e.preventDefault(), l.animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 2e3, "linear")
    })
});
(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        0: function(e, n, t) {
            t("bUC5"), t("pyCd"), t("xMQX"), t("c2ur"), t("zsQq"), t("bNs+"), t("0xJE"), t("8WZR"), t("yM4r"), t("iY+y"), t("hdFD"), t("vkjk"), t("P4g7"), t("oyaL"), t("RS4A"), t("fXa5"), t("nvON"), t("lQCZ"), t("vwoI"), t("eqkI"), t("oomH"), t("JsUB"), t("Vz1C"), t("RjU4"), t("ekol"), t("fkCm"), t("g2V7"), t("YJQJ"), t("D8dy"), t("lhJk"), t("UMUY"), t("BQxh"), t("C/T0"), t("3a/9"), t("N4c6"), t("q1kW"), t("d+EH"), t("17Yv"), t("Wzog"), t("pXSw"), t("5s/C"), t("OnB7"), e.exports = t("Dyq1")
        },
        "0xJE": function(e, n) {},
        "17Yv": function(e, n) {},
        "3a/9": function(e, n) {},
        "5s/C": function(e, n) {},
        "8WZR": function(e, n) {},
        "9Wh1": function(e, n, t) {
            window._ = t("LvDl");
            try {
                window.Popper = t("8L3F").default, window.$ = window.jQuery = t("EVdn"), t("SYky")
            } catch (e) {}
            window.axios = t("vDqi"), window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
            var o = document.head.querySelector('meta[name="csrf-token"]');
            o ? window.axios.defaults.headers.common["X-CSRF-TOKEN"] = o.content : console.error("CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token")
        },
        BQxh: function(e, n) {},
        "C/T0": function(e, n) {},
        D8dy: function(e, n) {},
        Dyq1: function(e, n) {},
        JsUB: function(e, n) {},
        N4c6: function(e, n) {},
        OnB7: function(e, n) {},
        P4g7: function(e, n) {},
        RS4A: function(e, n) {},
        RjU4: function(e, n) {},
        UMUY: function(e, n) {},
        Vz1C: function(e, n) {},
        Wzog: function(e, n) {},
        YJQJ: function(e, n) {},
        ZKp0: function(e, n, t) {
            "use strict";
            t.r(n);
            var o = [{
                    id: 1,
                    image: "/images/work.png",
                    text: '“Masterpass is a simple, convenient, trusted digital wallet from MasterCard for faster, safer shopping at online merchants."',
                    head: "Champion the mission",
                    activeIcon: !0,
                    linkToPage: "#1"
                }, {
                    id: 2,
                    image: "/images/green.jpg",
                    text: '“Masterpass is a simple, convenient, trusted digital wallet from MasterCard for faster, safer shopping at online merchants."',
                    head: "Never stop learning",
                    activeIcon: !1,
                    linkToPage: "#2"
                }, {
                    id: 3,
                    image: "/images/work.png",
                    text: '“Masterpass is a simple, convenient, trusted digital wallet from MasterCard for faster, safer shopping at online merchants."',
                    head: "Don't be a dick",
                    activeIcon: !1,
                    linkToPage: "#3"
                }, {
                    id: 4,
                    image: "/images/green.jpg",
                    text: '“Masterpass is a simple, convenient, trusted digital wallet from MasterCard for faster, safer shopping at online merchants."',
                    head: "Humiliation",
                    activeIcon: !1,
                    linkToPage: "#4"
                }],
                s = 0,
                a = $(".about-us-carousel__wrapper__top__left__head, .about-us-carousel__wrapper__top__left__body, .about-us-carousel__wrapper__top__right__img"),
                i = a;

            function r() {
                $(".about-us-carousel__wrapper__bottom__navs span").css("color", ""), $(".about-us-carousel__wrapper__top__left__head").text(o[s].head), $(".about-us-carousel__wrapper__top__left__body").text(o[s].text), $(".about-us-carousel__wrapper__top__right__img").attr("src", o[s].image), $(".about-us-carousel__wrapper__bottom__navs__step-" + o[s].id).css("color", "#177EE8")
            }

            function d(e) {
                e != s && (e > s && s != o.length - 1 ? u() : c(), s = e)
            }

            function c() {
                a.animate({
                    opacity: "0",
                    left: "+=500"
                }, 200, (function() {})), setTimeout((function() {
                    r(), a.animate({
                        left: "-=1000"
                    }, 100, (function() {
                        a.animate({
                            opacity: "1",
                            left: "0"
                        }, 200, (function() {}))
                    }))
                }), 200)
            }

            function u() {
                a.animate({
                    opacity: "0",
                    left: "-=500px"
                }, 200, (function() {})), setTimeout((function() {
                    r(), a.animate({
                        left: "+=1000"
                    }, 100, (function() {
                        a.animate({
                            opacity: "1",
                            left: "0"
                        }, 200, (function() {}))
                    }))
                }), 200)
            }
            $(document).ready((function() {
                r()
            })), $("#about_car_right").on("click", (function() {
                s < o.length - 1 ? s++ : s = 0, u()
            })), $("#about_car_left").on("click", (function() {
                s > 0 ? s-- : s = o.length - 1, c()
            }));
            var l = null;
            i.on("touchstart", (function(e) {
                l = 1 === e.touches.length ? e.touches.item(0).clientX : null
            })), i.on("touchend", (function(e) {
                if (l) {
                    var n = e.changedTouches.item(0).clientX;
                    n > l + 100 && (s > 0 ? s-- : s = o.length - 1, c()), n < l - 100 && (s < o.length - 1 ? s++ : s = 0, u())
                }
            })), $(".about-us-carousel__wrapper__bottom__navs__step-1, #abt-step-1-small").on("click", (function() {
                d(0)
            })), $(".about-us-carousel__wrapper__bottom__navs__step-2, #abt-step-2-small").on("click", (function() {
                d(1)
            })), $(".about-us-carousel__wrapper__bottom__navs__step-3, #abt-step-3-small").on("click", (function() {
                d(2)
            })), $(".about-us-carousel__wrapper__bottom__navs__step-4, #abt-step-4-small").on("click", (function() {
                d(3)
            }))
        },
        "bNs+": function(e, n) {},
        bUC5: function(e, n, t) {
            "use strict";
            t.r(n);
            var o, s, a, i = {
                Solutions: [{
                    subHeading: "Ecommerce",
                    subParagraph: "Receive payments instantly on your online store",
                    subLink: "/solutions/ecommerce"
                }, {
                    subHeading: "Event Ticketing",
                    subParagraph: "Sell event tickets on a platform or your website",
                    subLink: "/solutions/event-ticketing"
                }, {
                    subHeading: "Invoicing",
                    subParagraph: "Allow your customers to pay your invoices online",
                    subLink: "/solutions/invoicing"
                }, {
                    subHeading: "Accepting Donations",
                    subParagraph: "Raise funds online and benefit from reduced fees",
                    subLink: "/solutions/donations"
                }],
                Features: [{
                    subHeading: "Payment Methods",
                    subParagraph: "Enable up to 7 different payment methods",
                    subLink: "/features/payment-methods"
                }, {
                    subHeading: "Subscriptions",
                    subParagraph: "Schedule payments at regular intervals",
                    subLink: "/features/subscriptions"
                }, {
                    subHeading: "Tokenization",
                    subParagraph: "Accept recurring credit card payments",
                    subLink: "/features/tokenization"
                }, {
                    subHeading: "Split Payments",
                    subParagraph: "Instantly split a payment with a 3rd party",
                    subLink: "/features/split-payments"
                }, {
                    subHeading: "Onsite Payments",
                    subParagraph: "Enable an onsite checkout experience",
                    subLink: "/features/on-site-payments"
                }, {
                    subHeading: "Payment Request",
                    subParagraph: "Accept payments via email",
                    subLink: "/features/request-payment"
                }, {
                    subHeading: "Merchant Refund",
                    subParagraph: "Refund your customers directly",
                    subLink: "/features/merchant-refund"
                }, {
                    subHeading: "Easy Advance",
                    subParagraph: "Access business funding",
                    subLink: "/features/easy-advance"
                }],
                Integration: [{
                    subHeading: "Shopping Carts",
                    subParagraph: "Choose from 80+ existing platforms ",
                    subLink: "/integration/shopping-carts"
                }, {
                    subHeading: "PayNow Buttons",
                    subParagraph: "Add payment buttons wherever you need them",
                    subLink: "/integration/pay-now-buttons"
                }, {
                    subHeading: "Custom Integration",
                    subParagraph: "Create a custom integration with PayFast",
                    subLink: "/integration/custom"
                }, {
                    subHeading: "Plugin Solution",
                    subParagraph: "List your plugin on our website",
                    subLink: "/integration/submit-your-solution"
                }, {
                    subHeading: "Developer Documentation",
                    subParagraph: "A step-by-step guide for developers",
                    subLink: "https://developers.payfast.co.za/documentation/"
                }],
                "About Us": [{
                    subHeading: "Company Info",
                    subParagraph: "The PayFast story",
                    subLink: "/company-information"
                }, {
                    subHeading: "PayFast Blog",
                    subParagraph: "Our latest news and events",
                    subLink: "https://www.payfast.co.za/blog/"
                }, {
                    subHeading: "Press Releases",
                    subParagraph: "PayFast press and media",
                    subLink: "https://www.payfast.co.za/blog/category/pressreleases/"
                }, {
                    subHeading: "Style Guide",
                    subParagraph: "How to use PayFast logos and images",
                    subLink: "/logos-and-images"
                }, {
                    subHeading: "Careers",
                    subParagraph: "Join the PayFast team",
                    subLink: "https://payfast.recruiterbox.com"
                }, {
                    subHeading: "Account Types",
                    subParagraph: "3 different receiving account types",
                    subLink: "/features/account-types"
                }]
            };

            function r(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var t = [],
                        o = !0,
                        s = !1,
                        a = void 0;
                    try {
                        for (var i, r = e[Symbol.iterator](); !(o = (i = r.next()).done) && (t.push(i.value), !n || t.length !== n); o = !0);
                    } catch (e) {
                        s = !0, a = e
                    } finally {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (s) throw a
                        }
                    }
                    return t
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return d(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, o = new Array(n); t < n; t++) o[t] = e[t];
                return o
            }
            t("9Wh1"), t("ZKp0"), t("f2fQ"), t("9d8Q");
            var c, u, l = $("#openNav"),
                p = $("#mySidebar"),
                m = $("#headerSection"),
                _ = $("#closenav"),
                f = $("#hideLayer"),
                w = $("#toShowSolutions"),
                g = $("#contact"),
                h = $("#toShowFeatures"),
                v = $("#toShowIntegration"),
                b = $("#toShowFees"),
                y = $("#transitionDropdown"),
                k = $(".sidebar__middle--icon"),
                C = $(".sidebar-layer__bottom"),
                x = $(".sidebar-layer__top"),
                P = $(".sidebar-layer"),
                L = $(".sidebar__middle, .sidebar__bottom"),
                S = $("#integrationDropdown"),
                H = $(".dropdown-menu"),
                T = $(".sidenav-layer"),
                A = $(".payment-solutions__card"),
                E = $(".square-card"),
                z = $(".dropdown-home"),
                I = $(document).attr("title"),
                M = null;

            function R(e) {
                var n = I.substr(0, I.indexOf("|")).toLowerCase().trim(),
                    t = e.find(".nav-link").text().toLowerCase().trim();
                n === t ? e.find(".underline-link").addClass("nav-link-active") : e === w ? "event ticketing" !== n && "ecommerce" !== n && "npo & charity donations" !== n && "invoicing" !== n && "online payment solutions" !== n || e.find(".underline-link").addClass("nav-link-active") : n === t ? e.find(".underline-link").addClass("nav-link-active") : e === h ? "payment methods" !== n && "subscription payments" !== n && "tokenization payments" !== n && "request a payment" !== n && "on-site payments" !== n && "split payments" !== n && "instant eft" !== n && "credit and cheque cards" !== n && "cash deposits" !== n && "scode" !== n && "debit card" !== n && "zapper" !== n && "mobicred" !== n && "masterpass" !== n && "merchant refund" !== n || e.find(".underline-link").addClass("nav-link-active") : e === v ? "shopping carts" !== n && "paynow buttons" !== n && "submit your solution" !== n && "pay now buttons" !== n && "integrations" !== n && "custom integrations" !== n && "security & fraud prevention" !== n || e.find(".underline-link").addClass("nav-link-active") : e === g ? "contact us" === n && e.find(".underline-link").addClass("nav-link-active") : e === b && "fees" === n && e.find(".underline-link").addClass("nav-link-active")
            }

            function q() {
                p.css("width", "0"), m.css({
                    "margin-left": "0",
                    overflow: "unset"
                }), setTimeout((function() {
                    C.empty(), x.css("opacity", "0"), P.addClass("fade-out").removeClass("fade-in"), L.addClass("fade-in").removeClass("fade-out")
                }), 50), setTimeout((function() {
                    $(".ecommrece-card__text p").css("width", "100%")
                }), 300), $("body").css("overflow", "scroll"), c = !1
            }

            function O() {
                clearTimeout(s), y.empty(), $("#integrationDropdown").addClass("hide-dropdown").removeClass("show"), j(y)
            }

            function D() {
                $(".dropdown-item").hover((function() {
                    $(this).find(".dropdown-item__section--heading").not(".dropdown-item__no-hover").css("color", "#e11f33")
                }), (function() {
                    $(this).find(".dropdown-item__section--heading").css("color", "inherit")
                }))
            }

            function j(e) {
                e.addClass("show").removeClass("swing-out")
            }

            function F(e) {
                s = setTimeout((function() {
                    e.addClass("swing-out"), setTimeout((function() {
                        e.removeClass("show")
                    }), 100)
                }), 500)
            }

            function Q(e, n) {
                var t, o;

                function s() {
                    t = document.querySelectorAll("." + e), o = window.innerHeight
                }

                function a() {
                    for (var s = 0; s < t.length; s++) {
                        var a = t[s],
                            i = t[s].getBoundingClientRect().top;
                        o - i > 200 && (a.classList.add(n), a.classList.remove(e))
                    }
                }
                window.addEventListener("scroll", a, {
                    passive: !0
                }), window.addEventListener("resize", s, {
                    passive: !0
                }), s(), a()
            }
            $(document).ready((function() {
                $(".navbar").css({
                    top: "0",
                    position: "sticky"
                }), C.empty(), $("#call-to-action").css("background-size", "100% 100%"), (o = $(document).width()) < 768 ? ($(".card-swap").removeClass("reverse-card"), $(".paynow-page .intro-component-ecom__wrapper__content__image").attr("src", "/assets/images/paynow_without-bg.png")) : ($(".card-swap").addClass("reverse-card"), $(".paynow-page .intro-component-ecom__wrapper__content__image").attr("src", "/assets/images/paynow_with_bg.png")), R(w), R(h), R(v), R(b), R(g)
            })), $(window).resize((function() {
                a = $(document).width(), o = $(document).width(), c && p.css("width", a), o > 992 && ($(".card-swap").addClass("reverse-card"), $(".paynow-page .intro-component-ecom__wrapper__content__image").attr("src", "/assets/images/paynow_with_bg.png")), o < 992 && o > 768 && $(".card-swap").removeClass("reverse-card"), o < 768 && $(".paynow-page .intro-component-ecom__wrapper__content__image").attr("src", "/assets/images/paynow_without-bg.png"), o > 768 && $(".paynow-page .intro-component-ecom__wrapper__content__image").attr("src", "/assets/images/paynow_with_bg.png")
            })), $(window).scroll((function() {
                o > 768 && $(".supportBar:hidden") && $(".navbar").css({
                    top: "0",
                    position: "sticky"
                })
            })), l.click((function() {
                $("body").css("overflow", "hidden"), a = $(document).width(), $(".ecommrece-card__text p").css("width", a - 100), p.css("width", a), m.css({
                    "margin-left": a,
                    overflow: "hidden"
                }), c = !0
            })), _.click(q), $(window).resize((function() {
                c && q()
            })), k.click((function() {
                var e = $(this).prev("a").text().trim();
                Object.entries(i).forEach((function(n) {
                    if (r(n, 1)[0].trim() == e) {
                        $("#topH2").text(e);
                        for (var t = 0; t < i[e].length; t++) C.append('<a class="sidebar-layer__bottom--link" href="' + i[e][t][Object.keys(i[e][t])[2]] + '"><h4 class="sidebar-layer__bottom--subheading">' + i[e][t][Object.keys(i[e][t])[0]] + '</h4><p class="sidebar-layer__bottom--paragraph">' + i[e][t][Object.keys(i[e][t])[1]] + "</p></a>")
                    }
                })), x.css("opacity", "1"), P.addClass("slide-bottom").removeClass("fade-out"), L.addClass("fade-out"), T.css({
                    background: "transparent",
                    "z-index": "1"
                })
            })), f.on("click", (function() {
                setTimeout((function() {
                    C.empty()
                }), 100), x.css("opacity", "0"), P.addClass("fade-out").removeClass("fade-in"), L.addClass("fade-in").removeClass("fade-out"), T.css({
                    background: "#f5f7f7",
                    "z-index": "-1"
                })
            })), w.mouseover((function() {
                var e = $(this).position().left - 130;
                O(), y.removeClass("features-dropdown-home").css({
                    width: "370px",
                    height: "420px",
                    top: "73px",
                    left: e,
                    transition: "all 0.2s"
                }).append(' <div class="dropdown-home"><a class="dropdown-item" href="/solutions/ecommerce">\n<div class="dropdown-item__section">\n<div class="dropdown-item__section--logo">\n<img src="assets/images/ecommerce_icon.svg" alt="Ecommerce">\n</div>\n<div class="dropdown-item__section--words">\n<span class="dropdown-item__section--heading">Ecommerce</span>\n<span class="dropdown-item__section--span">Receive payments instantly on your online store </span>\n</div>\n</div>\n</a>\n<a class="dropdown-item" href="/solutions/event-ticketing">\n<div class="dropdown-item__section">\n<div class="dropdown-item__section--logo">\n<img src="assets/images/ticket_icon.svg" alt="Ticket">\n</div>\n<div class="dropdown-item__section--words">\n<span class="dropdown-item__section--heading">Event Ticketing</span>\n<span class="dropdown-item__section--span">Sell event tickets on a platform or your website</span>\n</div>\n</div>\n</a>\n<a class="dropdown-item" href="/solutions/invoicing">\n<div class="dropdown-item__section">\n<div class="dropdown-item__section--logo">\n<img src="assets/images/invoice_icon.svg" alt="Invoicing">\n</div>\n<div class="dropdown-item__section--words">\n<span class="dropdown-item__section--heading">Invoicing</span>\n<span class="dropdown-item__section--span">Allow your customers to pay your invoices online</span>\n</div>\n</div>\n</a>\n<a class="dropdown-item" href="/solutions/donations">\n<div class="dropdown-item__section">\n<div class="dropdown-item__section--logo">\n<img src="assets/images/donation1_icon.svg" alt="Donations">\n</div>\n<div class="dropdown-item__section--words">\n<span class="dropdown-item__section--heading">Accepting Donations</span>\n<span class="dropdown-item__section--span">Raise funds online and benefit from reduced fees</span>\n</div>\n</div>\n</a></div>'), D()
            })).mouseleave((function() {
                F(y)
            })), h.mouseover((function() {
                var e = $(this).position().left - 80;
                O(), y.css({
                    width: "590px",
                    height: "390px",
                    top: "73px",
                    left: e,
                    transition: "all 0.2s"
                }).append('<div class="dropdown-home"><div class="dropdown-double" id="featuresMenu" style="overflow: hidden">\n<div class="dropdown-menu__feature--side">\n<a class="dropdown-item" href="/features/payment-methods">\n<div class="dropdown-item__section">\n<div class="dropdown-item__section--words">\n<span class="dropdown-item__section--heading">Payment Methods</span>\n<span class="dropdown-item__section--span">Enable up to 7 different payment methods</span>\n</div>\n</div>\n</a>\n<a class="dropdown-item" href="/features/subscriptions">\n<div class="dropdown-item__section">\n<div class="dropdown-item__section--words">\n<span class="dropdown-item__section--heading">Subscriptions</span>\n<span class="dropdown-item__section--span">Schedule payments at regular intervals</span>\n</div>\n</div>\n</a>\n<a class="dropdown-item" href="/features/tokenization">\n<div class="dropdown-item__section">\n<div class="dropdown-item__section--words">\n<span class="dropdown-item__section--heading">Tokenization</span>\n<span class="dropdown-item__section--span">Accept recurring credit card payments</span>\n</div>\n</div>\n</a>\n<a class="dropdown-item" href="/features/split-payments">\n<div class="dropdown-item__section">\n<div class="dropdown-item__section--words">\n<span class="dropdown-item__section--heading">Split Payments</span>\n<span class="dropdown-item__section--span">Instantly split a payment with a 3rd party</span>\n</div>\n</div>\n</a>\n</div>\n<div class="verticle-divider"></div>\n<div class="dropdown-menu__feature--side">\n<a class="dropdown-item" href="/features/on-site-payments">\n<div class="dropdown-item__section">\n<div class="dropdown-item__section--words">\n<span class="dropdown-item__section--heading">Onsite Payments</span>\n<span class="dropdown-item__section--span">Enable an onsite checkout experience </span>\n</div>\n</div>\n</a>\n<a class="dropdown-item" href="/features/request-payment">\n<div class="dropdown-item__section">\n<div class="dropdown-item__section--words">\n<span class="dropdown-item__section--heading">Payment Request</span>\n<span class="dropdown-item__section--span">Accept payments via email</span>\n</div>\n</div>\n</a>\n<a class="dropdown-item" href="/features/merchant-refund">\n<div class="dropdown-item__section">\n<div class="dropdown-item__section--words">\n<span class="dropdown-item__section--heading">Merchant Refund</span>\n<span class="dropdown-item__section--span">Refund your customers directly</span>\n</div>\n</div>\n</a>\n<a class="dropdown-item" href="/features/easy-advance">\n<div class="dropdown-item__section">\n<div class="dropdown-item__section--words">\n<span class="dropdown-item__section--heading">Easy Advance</span>\n<span class="dropdown-item__section--span">Access business funding</span>\n</div>\n</div>\n</a>\n</div>\n</div></div>').addClass("features-dropdown-home").attr("data-is-open", !0), D()
            })).mouseleave((function() {
                F(y)
            })), z.mouseleave((function() {
                F(y)
            })), v.mouseover((function() {
                clearTimeout(s), $(y).addClass("hide-dropdown").removeClass("show"), j(S), D()
            })).mouseleave((function() {
                F(S)
            })), H.not("#integrationDropdown").mouseover((function() {
                clearTimeout(s)
            })).mouseleave((function() {
                F(y)
            })), $(window).scroll((function() {
                $(window).scrollTop() > 1 && $("#underLine").css("width", "269px")
            }), (function() {
                $("#underLine").css("width", "0")
            })), window.onresize = function(e) {
                $("#call-to-action").css("background-size", "100% 100%")
            }, $("#tempIDforScrollEffect").hover((function() {
                $("#pay-underLine").css("display", "block").css("width", "345px")
            }), (function() {
                $("#pay-underLine").css("display", "none")
            })), Q("what-we-offer__image-dot-triangle", "what-we-offer__animated-image-dot-triangle"), Q("what-we-offer__image-big-dashboard", "what-we-offer__animated-image-big-dashboard"), Q("what-we-offer__image-small-dashboard", "what-we-offer__animated-image-small-dashboard"), Q("what-we-offer__image-full-triangle", "what-we-offer__animated-image-full-triangle"), Q("what-we-offer__image-full-circle", "what-we-offer__animated-image-full-circle"), Q("what-we-offer__image-big-empty-triangle", "what-we-offer__animated-image-big-empty-triangle"), Q("what-we-offer__image-empty-circle", "what-we-offer__animated-image-empty-circle"), Q("what-we-offer__image-small-empty-triangle", "what-we-offer__animated-image-small-empty-triangle"), Q("ecommerce_level_2_header_right_side__box_1_not_in_view", "ecommerce_level_2_header_right_side__box_1"), Q("ecommerce_level_2_header_right_side__box_2_not_in_view", "ecommerce_level_2_header_right_side__box_2"), Q("ecommerce_level_2_header_right_side__box_3_not_in_view", "ecommerce_level_2_header_right_side__box_3"), Q("red-underline-animation", "red-underline"), A.hover((function() {
                $(this).addClass("card-hover")
            }), (function() {
                $(this).removeClass("card-hover")
            })), E.on("touchstart", (function(e) {
                M = 1 === e.touches.length ? e.touches.item(0).clientY : null
            })), E.on("touchend", (function(e) {
                if ($(".square-card").removeClass("box-hover"), M) {
                    var n = e.changedTouches.item(0).clientY;
                    (n > M + 100 || n < M - 100) && $(this).addClass("box-hover")
                }
            }));
            var J = navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
                U = void 0 !== window.orientation || -1 !== navigator.userAgent.indexOf("IEMobile");
            J && !U && $('a[href^="tel:"]').click((function() {
                return !1
            })), $(".fees-table__img").hover((function() {
                $(".fees-table__img__tooltip-text").css("display", ""), $(this).next(".fees-table__img__tooltip-text").fadeIn(100), clearTimeout(u)
            }), (function() {
                u = setTimeout((function() {
                    $(".fees-table__img__tooltip-text").fadeOut(100)
                }), 100)
            })), $(".fees-table__img__tooltip-text").hover((function() {
                clearTimeout(u)
            }), (function() {
                $(this).fadeOut()
            }))
        },
        c2ur: function(e, n) {},
        "d+EH": function(e, n) {},
        ekol: function(e, n) {},
        eqkI: function(e, n) {},
        f2fQ: function(e, n) {
            new StatusPage.page({
                page: "hbt40cyvzkpg"
            }).components({
                success: function(e) {
                    for (var n = [], t = 0; t < e.components.length; t++) "operational" !== e.components[t].status && n.push(e.components[t].name);
                    n.length === e.components.length ? $("#footer__status").addClass("system-down") : 0 == n.length ? $("#footer__status").addClass("all-good") : $("#footer__status").addClass("some-issues")
                }
            })
        },
        fXa5: function(e, n) {},
        fkCm: function(e, n) {},
        g2V7: function(e, n) {},
        hdFD: function(e, n) {},
        "iY+y": function(e, n) {},
        lQCZ: function(e, n) {},
        lhJk: function(e, n) {},
        nvON: function(e, n) {},
        oomH: function(e, n) {},
        oyaL: function(e, n) {},
        pXSw: function(e, n) {},
        pyCd: function(e, n) {},
        q1kW: function(e, n) {},
        vkjk: function(e, n) {},
        vwoI: function(e, n) {},
        xMQX: function(e, n) {},
        yM4r: function(e, n) {},
        zsQq: function(e, n) {}
    },
    [
        [0, 0, 1]
    ]
]);
//# sourceMappingURL=app.js.map
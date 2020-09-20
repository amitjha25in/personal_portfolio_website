const effect_timeline = gsap.timeline();

effect_timeline.from(".navigation", {
    delay: .5,
    y: -16,
    opacity: 0,
    duration: 0.8,
    ease: "power3.inOut"
})
    .from(".absolute_img", {
        delay: -0.4,
        x: -100,
        skewX: 2,
        duration: 0.8,
        opacity: 0,
        ease: "power3.out"
    })

    .from(".title_info h1", {
        delay: -0.6,
        y: -40,
        duration: 0.8,
        opacity: 0,
        ease: "power3.out"
    })

    .from([".info_", ".title_info p"], {
        delay: -0.6,
        y: -40,
        duration: 0.8,
        opacity: 0,
        ease: "power3.out",
        stagger: {
            amount: 0.2
        }
    })
    .from([".main_cta", ".absolute_social"], {
        delay: -1,
        y: 20,
        duration: 0.8,
        opacity: 0,
        ease: "power3.out",
        stagger: {
            amount: 0.4
        }
    })
    .from(".scroll_down", {
        delay: -0.6,
        y: -40,
        duration: 0.8,
        opacity: 0,
        ease: "power3.out"
    })

$(document).ready(function () {
    $(".menu_item").click(function (e) {
        e.preventDefault();
        $(this).parent().addClass("active").siblings().removeClass("active");
    })
    //toggle mobile menu
    $(".menu_icon").click(function () {
        $(this).toggleClass("active");
        $("nav").toggleClass("active");
        $("body").toggleClass("active");
    })
})

//rest will be in part 2
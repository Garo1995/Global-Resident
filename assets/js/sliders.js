let countriesSwiper = new Swiper(".countries-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    navigation: {
        nextEl: ".countries-button-next",
        prevEl: ".countries-button-prev",
    },
});


let countriesWorkSwiper = new Swiper(".countries-work-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    navigation: {
        nextEl: ".count-button-next",
        prevEl: ".count-button-prev",
    },
});

let partnerSwiper = new Swiper(".partner-slider", {
    slidesPerView: 3,
    spaceBetween: 8,
    breakpoints: {
        1199: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },

        1020: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
        767: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
        570: {
            slidesPerView: 2.5,
            slidesPerGroup: 1,
            spaceBetween: 8,
            loop: true,
        },
        320: {
            slidesPerView: 2.1,
            slidesPerGroup: 1,
            spaceBetween: 8,
            loop: true,
        },
    },
    navigation: {
        nextEl: ".partner-button-next",
        prevEl: ".partner-button-prev",
    },
});


let blogSwiper = new Swiper(".blog-slider", {
    slidesPerView: "auto",
    spaceBetween: 8,
    loop: false,
    rewind: true, // ВОТ ЭТО ВАЖНО
    centeredSlides: false,
    slideToClickedSlide: true,
    navigation: {
        nextEl: ".blog-button-next",
        prevEl: ".blog-button-prev",
    },
});


let requiredSwiper = new Swiper(".required-slider", {
    slidesPerView: 4,
    spaceBetween: 8,
    breakpoints: {
        1199: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },

        1020: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
        767: {
            slidesPerView: 2.3,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
        570: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 8,
            loop: true,
        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 8,
            loop: true,
        },
    },
    navigation: {
        nextEl: ".required-button-next",
        prevEl: ".required-button-prev",
    },
});







let teamSwiper = new Swiper(".our-team-slider", {
    slidesPerView: 6,
    spaceBetween: 8,
    loop: true,
    breakpoints: {
        1199: {
            slidesPerView: 6,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
        1020: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
        767: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
        570: {
            slidesPerView: 2.5,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
        320: {
            slidesPerView: 2.1,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
    },
    navigation: {
        nextEl: ".team-button-next",
        prevEl: ".team-button-prev",
    },
});


let companySwiper = new Swiper(".company-cert-slider", {
    slidesPerView: 4,
    spaceBetween: 8,
    loop: true,
    centeredSlides: true,

    breakpoints: {
        1199: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
        1020: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
        767: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
        570: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
        320: {
            slidesPerView: 1.4,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
    },
    navigation: {
        nextEl: ".company-button-next",
        prevEl: ".company-button-prev",
    },
});







let estateSwiper = new Swiper(".real-estate-sm-slider", {
    spaceBetween: 8,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        1599: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },

        320: {
            slidesPerView: 4,
            spaceBetween: 6,
        },
    },
});
let estateSwiperSm = new Swiper(".real-estate-slider", {
    spaceBetween: 8,
    slidesPerView: 1.8,
    breakpoints: {
        1599: {
            spaceBetween: 8,
            slidesPerView: 1.8,
        },
        1299: {
            spaceBetween: 8,
            slidesPerView: 1.6,
        },
        575: {
            spaceBetween: 8,
            slidesPerView: 1.2,
        },
        320: {
            spaceBetween: 8,
            slidesPerView: 1,
        },
    },
    pagination: {
        el: ".estate-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".estate-next",
        prevEl: ".estate-prev",
    },
    thumbs: {
        swiper: estateSwiper,
    },
});












let casesSwiper = new Swiper(".cases-slider", {
    slidesPerView: 2,
    spaceBetween: 8,
    loop: true,
    breakpoints: {
        1199: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
        1020: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
        767: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
    },
    pagination: {
        el: ".cases-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".cases-button-next",
        prevEl: ".cases-button-prev",
    },
});





let reviewsSwiper = new Swiper(".reviews-slider", {
    slidesPerView: 3,
    spaceBetween: 8,
    loop: true,
    breakpoints: {
        1199: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
        1020: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
        767: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },

        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 8,
            centeredSlides: true,

        },
    },
    pagination: {
        el: ".reviews-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".reviews-button-next",
        prevEl: ".reviews-button-prev",
    },
});




let stepPlanSwiper = new Swiper(".step-plan-slider", {
    slidesPerView: 2,
    spaceBetween: 8,
    loop: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
        570: {
            slidesPerView: 2.2,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
        320: {
            slidesPerView: 1.2,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
    },

});


























let servGalSwiper = new Swiper(".real-estate-sm-slider", {
    spaceBetween: 8,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        1599: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },

        320: {
            slidesPerView: 4,
            spaceBetween: 6,
        },
    },
});
let estateGalSwiperSm = new Swiper(".real-gall-slider", {
    spaceBetween: 8,
    slidesPerView: 1,
    pagination: {
        el: ".estate-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".estate-next",
        prevEl: ".estate-prev",
    },
    thumbs: {
        swiper: servGalSwiper,
    },
});


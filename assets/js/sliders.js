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
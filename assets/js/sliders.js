let countriesSwiper = new Swiper(".countries-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".countries-button-next",
        prevEl: ".countries-button-prev",
    },
});


let countriesWorkSwiper = new Swiper(".countries-work-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
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
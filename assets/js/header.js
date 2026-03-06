
$(".nav-menu ul li").each(function() {
    if ($(this).find(".submenu").length > 0) {
        $(this).addClass("has-submenu");
    }
});

$('.language-click').on('click', function() {
    $('.phone-office-drop').removeClass('phone-office-active');
    $('.location-drop').removeClass('location-drop-opened');
})


document.addEventListener("DOMContentLoaded", function () {
    const languageClick = document.querySelector('.language-click');
    const languageMin = document.querySelector('.language-min');
    const languageItems = document.querySelectorAll('.language-drop ul li');
    // Открытие / закрытие
    languageClick.addEventListener('click', function (e) {
        languageMin.classList.toggle('language-active');
        e.stopPropagation();
    });
    // Выбор языка
    languageItems.forEach(function (item) {
        item.addEventListener('click', function () {
            const temp = languageClick.innerHTML;
            languageClick.innerHTML = this.innerHTML;
            this.innerHTML = temp;
            languageMin.classList.remove('language-active');
        });
    });
    // Закрытие при клике вне блока
    window.addEventListener('click', function (e) {
        if (!languageMin.contains(e.target)) {
            languageMin.classList.remove('language-active');
        }
    });

});







const menuItems = document.querySelectorAll('.country-name');
const blocks = document.querySelectorAll('.whole-country-js');

function openCountry(country) {
    blocks.forEach(block => {
        block.classList.remove('whole-country-open');

        if (block.dataset.country === country) {
            block.classList.add('whole-country-open');
        }
    });

    menuItems.forEach(item => {
        item.classList.remove('country-name-act');

        if (item.dataset.country === country) {
            item.classList.add('country-name-act');
        }
    });
}

function isMobile() {
    return window.innerWidth <= 1199;
}

// desktop hover
menuItems.forEach(item => {
    item.addEventListener('mouseenter', function () {
        if (!isMobile()) {
            openCountry(this.dataset.country);
        }
    });

    // mobile click
    item.addEventListener('click', function () {
        if (isMobile()) {
            openCountry(this.dataset.country);
        }
    });
});

// mobile start state
function initMobile() {
    if (isMobile()) {
        blocks.forEach(block => block.classList.remove('whole-country-open'));
        menuItems.forEach(item => item.classList.remove('country-name-act'));
    } else {
        openCountry('europe');
    }
}

initMobile();
window.addEventListener('resize', initMobile);



$('.open-menu').on('click', function () {
    $('.nav-menu').addClass('menu-opened');
    $('body').addClass('body-fixed');
})

$('.close-menu').on('click', function () {
    $('.nav-menu').removeClass('menu-opened');
    $('.menu-header>ul>li').removeClass('submenu-opened');
    $('body').removeClass('body-fixed');
    $('.country-name').removeClass('country-name-act');
    $('.whole-country-js').removeClass('whole-country-open');
})

$('.menu-link').on('click', function () {
    $(this).parent().addClass('submenu-opened');
})

$('.back-all-menu').on('click', function () {
    $('.menu-header>ul>li').removeClass('submenu-opened');
})

$('.back-country').on('click', function () {
    $('.country-name').removeClass('country-name-act');
    $('.whole-country-js').removeClass('whole-country-open');
})







$('.phone-office-open').on('click', function (e) {
    e.stopPropagation();
    $('.phone-office-drop').toggleClass('phone-office-active');
    $('.location-drop').removeClass('location-drop-opened');
    $('.language-min').removeClass('language-active');
})

$('.location-cont').on('click', function (e) {
    e.stopPropagation();
    $('.location-drop').toggleClass('location-drop-opened');
    $('.phone-office-drop').removeClass('phone-office-active')
    $('.language-min').removeClass('language-active');
})


$(window).on('click', function (e) {
    let menuSort = $('.phone-office-drop');
    if (e.target !== menuSort) {
        menuSort.removeClass('phone-office-active');
    }

    let locationSort = $('.location-drop');
    if (e.target !== locationSort) {
        locationSort.removeClass('location-drop-opened');
    }

});
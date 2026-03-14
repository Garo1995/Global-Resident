
jQuery('.scroll-up').click(function() {
    jQuery("html, body").animate({
        scrollTop: 0
    }, 1200);
    return false;
});







$(function () {

    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        let links = this.el.find('.link');
        links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown);

        // 👉 если есть .active — открыть его при загрузке
        this.el.find('.link.active').each(function () {
            $(this)
                .addClass('open')
                .next('.accordion-ext')
                .show();
        });
    };

    Accordion.prototype.dropdown = function (e) {

        let $el = e.data.el;
        let $this = $(this);
        let $next = $this.next('.accordion-ext');

        $next.slideToggle();

        if (!e.data.multiple) {
            $el.find('.accordion-ext').not($next).slideUp();
        }

        if (!$this.hasClass('open')) {
            $el.find('.link').removeClass('open');
            $this.addClass('open');
        } else {
            $this.removeClass('open');
        }
    };

    let accordion = new Accordion($('#accordion'), false);

});



$(document).ready(function () {

    initTabs({
        menu: 'services-menu',
        item: 'services-click',
        content: 'services-items',
        active: 'services-active'
    });


    function initTabs(config) {

        const $menu = $('.' + config.menu);
        const $items = $menu.find('.' + config.item);
        const $blocks = $('.' + config.content).children();

        // Первый активный
        const $first = $items.first();
        $first.addClass(config.active);
        showBlock($first.data('catalog'));
        // Клик
        $items.on('click', function () {
            $items.removeClass(config.active);
            $(this).addClass(config.active);
            showBlock($(this).data('catalog'));
        });

        function showBlock(catalog) {
            $blocks.hide();
            $blocks.filter('[data-catalog="' + catalog + '"]').show();
        }
    }
});



$('.services-mobile-selected').on('click', function (e) {
    $(this).parent().toggleClass('services-mobile-active');
})

$('.services-click').on('click', function (e) {
    let selectedText = $(this).html();
    $('.services-mobile-selected').html(selectedText);
    $('.services-menu').removeClass('services-mobile-active')
})





$('.map-menu-select').on('click', function () {
    $(this).parent().toggleClass('map-select-active');
})

$('.map-menu ul li').on('click', function () {
    let selectedMap = $(this).html();
    $('.map-menu-select').html(selectedMap);
    $('.map-menu').removeClass('map-select-active')
})



const openButtons = document.querySelectorAll('.open-modal');
const modals = document.querySelectorAll('.modal');

openButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.dataset.modal;
        const modal = document.getElementById(id);
        modal.classList.add('active');
        document.body.classList.add('modal-open'); // блокируем скролл
    });
});

modals.forEach(modal => {
    const closeBtn = modal.querySelector('.modal-close');

    function closeModal() {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open'); // разблокируем скролл
    }

    // закрытие по крестик
    closeBtn.addEventListener('click', closeModal);

    // закрытие по пустому месту
    modal.addEventListener('click', (e) => {
        if(!e.target.closest('.modal-content')){
            closeModal();
        }
    });
});





























document.querySelectorAll('.js-select').forEach((select) => {
    const button = select.querySelector('.js-select-btn');
    const value = select.querySelector('.js-select-value');
    const options = select.querySelectorAll('.filter-option');

    button.addEventListener('click', (e) => {
        e.stopPropagation();

        document.querySelectorAll('.js-select.open').forEach((item) => {
            if (item !== select) item.classList.remove('open');
        });

        select.classList.toggle('open');
    });

    options.forEach((option) => {
        option.addEventListener('click', () => {
            options.forEach((item) => item.classList.remove('active'));
            option.classList.add('active');
            value.textContent = option.dataset.value;
            select.classList.remove('open');
        });
    });
});

document.addEventListener('click', () => {
    document.querySelectorAll('.js-select.open').forEach((item) => {
        item.classList.remove('open');
    });
});

const priceRange = document.querySelector('.js-price-range');
const priceValue = document.querySelector('.js-price-value');

if (priceRange && priceValue) {
    const formatPrice = (num) => {
        return '€' + Number(num).toLocaleString('ru-RU');
    };
    priceValue.textContent = formatPrice(priceRange.value);
    priceRange.addEventListener('input', () => {
        priceValue.textContent = formatPrice(priceRange.value);
    });
}
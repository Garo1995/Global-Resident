
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
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {

            $el.find('.submenu').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }
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









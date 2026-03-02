

$(".nav-menu ul li").each(function() {
    if ($(this).find(".submenu").length > 0) {
        $(this).addClass("has-submenu");
    }
});


$('.language-click').on('click', function (e) {
    $(this).parent().toggleClass('language-active');
    e.stopPropagation();
});

$('.language-drop ul li').on('click', function () {
    let text_in = $('.language-click').html();
    let selected_text = $(this).html();
    $('.language-click').html(selected_text);
    $(this).html(text_in)
    $('.language-min').removeClass('language-active')
});
$(window).on('click', function (e) {
    let menuSort = $('.language-min');
    if (e.target !== menuSort) {
        menuSort.removeClass('language-active');
    }
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

    addActiveClass('services-menu', 'services-active');
    changeCaseBlock(this, 'services-menu', 'services-items', 'services-active', 'services-click');
    $('.services-click').on('click', function () {
        changeActiveClassWithClick(this, 'services-menu', 'services-active')
        changeCaseBlock(this, 'services-menu', 'services-items', 'services-active', 'services-click');
    })


    function addActiveClass(parent_menu, active_class) {
        let prt = $('.' + parent_menu);
        let prt_childrens = $(prt).children();
        let prt_child_li = $(prt_childrens).children();
        let first_child = $(prt_child_li)[0]
        if (!$(first_child).hasClass(active_class)) {
            !$(first_child).addClass(active_class)
        }
    }
    function changeActiveClassWithClick($this, parent_block, active_class) {
        let prt = $($this).parents('.' + parent_block);
        let prt_child = $(prt).find('li');
        $(prt_child).each(function () {
            $(this).removeClass(active_class);
        })
        $($this).addClass(active_class);
    }
    function changeCaseBlock($this, case_menu, case_block, active_class, menu_link) {
        let case_menu_block = $('.' + case_menu);
        let case_block_sub = $('.' + case_block);
        let case_block_child = $(case_block_sub).children();
        $(case_block_child).each(function () {
            $(this).css({display: 'none', height: 0});
        })
        if ($($this).hasClass(menu_link)) {
            let this_attr = $($this).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == this_attr) {
                    $(this).css({display: 'block', height: '100%'});
                }
            })
        } else {
            let active_find = $(case_menu_block).find('.' + active_class);
            let active_find_attr = $(active_find).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == active_find_attr) {
                    $(this).css({display: 'block', height: '100%'});
                }
            })
        }
    }
});


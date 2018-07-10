$(function () {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
        $(".J_ios").hide();
    } else if (isiOS) {
        $(".J_android").hide();
    }

    /*var mySwiper = new Swiper('.banner-swiper-container', {
        autoplay: true,//可选选项，自动滑动
        simulateTouch: false,//可选选项，自动滑动
        loop: true,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
    });*/
    /*var brandSwiper = new Swiper('.brand-swiper-container', {
        autoplay: true,//可选选项，自动滑动
        simulateTouch: false,//可选选项，自动滑动
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
    });*/

    /*var partSwiper = new Swiper('.part-swiper-container', {
        autoplay: true,//可选选项，自动滑动
        simulateTouch: false,//可选选项，自动滑动
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
    });*/

    $('.J_tab_new').click(function () {
        $(this).addClass('act').siblings().removeClass('act');
        $('.J_list_new').show();
        $('.J_list_brand').hide();
    });
    $('.J_tab_brand').click(function () {
        $(this).addClass('act').siblings().removeClass('act');
        $('.J_list_new').hide();
        $('.J_list_brand').show();
    });
});
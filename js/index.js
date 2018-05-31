$(function () {
    var mySwiper = new Swiper('.banner-swiper-container', {
        // autoplay: true,//可选选项，自动滑动
        simulateTouch: false,//可选选项，自动滑动
        loop: true,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
    });
    var brandSwiper = new Swiper('.brand-swiper-container', {
        autoplay: true,//可选选项，自动滑动
        simulateTouch: false,//可选选项，自动滑动
        pagination: {
            el: '.swiper-pagination',
        },
    });

    var partSwiper = new Swiper('.part-swiper-container', {
        autoplay: true,//可选选项，自动滑动
        simulateTouch: false,//可选选项，自动滑动
        pagination: {
            el: '.swiper-pagination',
        },
    });
});
new Swiper('.image-slider',{
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev'
    },
    slidesPerView: 2.69,
    spaceBetween: 25,
    freeMode: true,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    speed: 800,
    breakpoints: {
        320:{
            slidesPerView: 0.8,
        },
        420:{
            slidesPerView: 1.,
        },
        500:{
            slidesPerView: 1.2,
        },
        600: {
            slidesPerView: 1.5,
        },
        850: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2.69,
        },
    }
})
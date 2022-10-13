import {Swiper, Navigation, EffectFade, Autoplay, Pagination, Grid} from 'swiper';

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, Grid]);

export default function casesSlider() {
    const elements = Array.from(document.querySelectorAll('.js-cases-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            slidesPerView: 'auto',
            speed: 500,
            navigation: {
                nextEl: element.querySelector('.cases__arrow--next'),
                prevEl: element.querySelector('.cases__arrow--prev')
            },
        })
    })
}
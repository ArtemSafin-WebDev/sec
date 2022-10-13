import { Swiper, Navigation, EffectFade, Autoplay, Pagination, Grid } from 'swiper';
Swiper.use([Navigation, EffectFade, Autoplay, Pagination, Grid]);

export default function stepsSlider() {
    const elements = Array.from(document.querySelectorAll('.js-steps-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            slidesPerView: 'auto',
            speed: 500,
        })
    })
}
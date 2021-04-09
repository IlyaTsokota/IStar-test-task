import Swiper from 'swiper/bundle';

function swiperSlider() {
	const sliderThumbs = new Swiper('.product__slider-thumbs', {
		navigation: {
			nextEl: '.swiper-btn-next',
			prevEl: '.swiper-btn-prev',
		},
		centeredSlides: true,
		loop: true,
		slideToClickedSlide: true,
		spaceBetween: 10,
		breakpoints: {
			320: {
				direction: 'horizontal',
				slidesPerView: 5
			},
			576: {
				direction: 'vertical',
				slidesPerView: 7
			},
		}
	});

	const mainSlider = new Swiper('.product__slider-main', {
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		allowTouchMove: false,
		breakpoints: {
			320: {
				allowTouchMove: true,

			},
			576: {
				allowTouchMove: false,

			},
		}
	});


	sliderThumbs.on('slideChangeTransitionEnd', function () {
		const currentSlideIndex = sliderThumbs.realIndex;
		mainSlider.slideTo(currentSlideIndex, 1000, false);
	});

}

export default swiperSlider;
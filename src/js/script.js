// IE9 - 11
// import 'core-js/stable';
// require('es6-promise/auto');
// require('mdn-polyfills/Node.prototype.append');
// require('mdn-polyfills/Node.prototype.remove');
// require('mdn-polyfills/Element.prototype.matches');
// require('formdata-polyfill');
// import 'unfetch/polyfill';

import isWebP from './modules/webp';
import swiperSlider from './modules/swiper';
import burger from './modules/burger';
import acorderon from './modules/acordeon';
// import { closeModalListener } from './modules/modal';
import tabs from './modules/tab-menu';
// import { enableScroll, disableScroll } from './modules/scrollSwitcher';

window.addEventListener("DOMContentLoaded", () => {
	isWebP();
	swiperSlider();
	acorderon();
	tabs({
		contentSelector: '.product__tabs-content',
		contentActiveClass: 'product__tabs-content--active',
		tabSelector: '.product__tab',
		tabActiveClass: 'product__tab--active'
	});
	burger({
		burgerSelector: '.categories__menu-btn',
		menuSelector: '.categories__menu',
		classAvtiveForBurger: 'categories__menu-btn--active',
		classActiveForMenu: 'categories__menu--active'
	});
});


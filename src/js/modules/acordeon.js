

function acorderon() {
	const btn = document.querySelector('.subcategories__down');
	const menu = document.querySelector('.subcategories__list');
	btn.addEventListener('click', (e) => {
		e.preventDefault();
		btn.classList.toggle('subcategories__down--active');
		menu.classList.toggle('subcategories__list--active');
	});
}


export default acorderon;
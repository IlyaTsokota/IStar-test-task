function tabs({ tabSelector, contentSelector, tabActiveClass, contentActiveClass }) {
	const tabs = document.querySelectorAll(tabSelector);
	const tabsContent = document.querySelectorAll(contentSelector);

	tabs.forEach((item, i) => {
		item.addEventListener('click', () => {
			hideTabs();
			showTab(i);
		});
	});

	function hideTabs() {
		tabs.forEach(item => item.classList.remove(tabActiveClass));
		tabsContent.forEach(item => item.classList.remove(contentActiveClass));
	}

	function showTab(i = 0) {
		tabs[i].classList.add(tabActiveClass);
		tabsContent[i].classList.add(contentActiveClass);
	}
}

export default tabs;
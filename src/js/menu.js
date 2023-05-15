const mobileMenu = document.querySelector('.header__menu-icon');
const navbar = document.querySelector('.content__navbar');
const body = document.querySelector('body');

function toggleMenu() {
	navbar.classList.toggle('active');
	body.classList.toggle('no-scroll')
}

mobileMenu.addEventListener('click', toggleMenu);

document.addEventListener('click', function (event) {
	const target = event.target;
	const isClickInsideMenu = navbar.contains(target);
	const isClickOnMenuToggle = target === mobileMenu;

	if (!isClickInsideMenu && !isClickOnMenuToggle) {
		navbar.classList.remove('active');
		body.classList.remove('no-scroll')
	}
});

function checkScreenWidth() {
	const screenWidth = window.innerWidth;
	const breakpoint = 575;

	if (screenWidth >= breakpoint && navbar.classList.contains('active')) {
		navbar.classList.remove('active');
		body.classList.remove('no-scroll')
	}
}

window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);
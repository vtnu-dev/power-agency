// Custom scripts

// Burger mobile menu
function burgerMenu() {
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.menu')
	const body = document.querySelector('body')
	const menuItems = document.querySelectorAll('.menu__item-link')

	const toogleMenu = () => {
		menu.classList.toggle('active')
		burger.classList.toggle('active-burger')
		body.classList.toggle('locked')

		const removeActive = () => {
			menu.classList.remove('active')
			burger.classList.remove('active-burger')
			body.classList.remove('locked')
		}
		menuItems.forEach(item => {
			item.addEventListener('click', removeActive)
		})

		document.addEventListener('keydown', e => {
			if (e.keyCode == 27) {
				// code for kye Escape, but can use e.key
				removeActive()
			}
		})

		// Hide menu when turning the screen
      window.addEventListener('orientationchange', removeActive)
	}

	burger.addEventListener('click', toogleMenu)

	//Here we put Breikpoint Navbar
	window.addEventListener('resize', () => {
		if (window.innerWidth > 991.98) {
			menu.classList.remove('active')
			burger.classList.remove('active-burger')
			body.classList.remove('locked')
		}
	})
}
burgerMenu()

// We call this function if we need to fix the menu with scroll.
function fixedNav() {
	const nav = document.querySelector('nav')

	//Here we indicate in the pixels, how much we need to slip so that our menu becomes fixed
	const breakpoint = 1
	if (window.scrollY >= breakpoint) {
		nav.classList.add('fixed__nav')
	} else {
		nav.classList.remove('fixed__nav')
	}
}
//window.addEventListener('scroll', fixedNav)

/*--------------Swiper-----------------*/

const swiper = new Swiper('.swiper', {
	loop: true,
	spaceBetween: 100,
	loopFillGroupWithBlank: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
		renderBullet: function (index, className) {
			const images = document.querySelectorAll('.rewiews__person-img')

			return '<span class="' + className + '">' + images[index + 1].outerHTML + '</span>'

			//return '<span class="' + className + '">' + (index + 1) + '</span>'
		},
	},
})

/*--------------currentYear-----------------*/
function currentYear() {
	const footerYear = document.querySelector('.footer__year')
	footerYear.textContent = new Date().getFullYear()
}
currentYear()

window.addEventListener('load', currentYear)

//---------------------------------------//

// Navbar (show / hidden)
const navToogle = () => {
   const nav = document.querySelector('nav');

let prevScrollpos = window.pageYOffset

window.addEventListener('scroll', function () {
	let currentScrollPos = window.pageYOffset
	if (prevScrollpos > currentScrollPos || window.scrollY <= 70) {
		nav.style.top = '0'
	} else {
		nav.style.top = '-80px'
	}
	prevScrollpos = currentScrollPos
})
}

window.addEventListener('scroll', navToogle)

// menu burger
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu){
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

/*щоб при клике на меню йшло на нужно секцию(прокрутка при кліці)*/

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if(menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

      // if(iconMenu.classList.contains('_active')){
		// 	document.body.classList.remove('_lock');
		// 	iconMenu.classList.remove('_active');
		// 	menuBody.classList.remove('_active');				
		// }

			window.scrollTo({
            top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault(); 
		}
	}
}

//swioer slider
new Swiper('.present-slider', {
	slidesPerView: 3.5,
	spaceBetween: 36,
	loop: true,
	autoplay: {
		delay: 2000
	},
	keyboard: {
		enabled: true,
		pageUpDown: true
	},
	// mousewheel: {
	// 	sensitivity: 1,
	// 	EventTarget: '.present-slider'
	// },
	centeredSlides: true,

	breakpoints: {
		320: {
			slidesPerView: 1.5,
		},
		767: {
			slidesPerView: 2.5,
		},
		992: {
			slidesPerView: 3.5,
		}
	},	

});

new Swiper('.special-slider' , {
	slidesPerView: 3.5,
	spaceBetween: 35,
	loop: true,
	autoplay: {
		delay: 2000
	},
	keyboard: {
		enabled: true,
		pageUpDown: true
	},
	// mousewheel: {
	// 	sensitivity: 1,
	// 	EventTarget: '.present-slider'
	// },
	centeredSlides: true,

	breakpoints: {
		320: {
			slidesPerView: 1.5,
		},
		767: {
			slidesPerView: 2.5,
		},
		992: {
			slidesPerView: 3.5,
		}
	},	
});

new Swiper('.team-slider' , {
	slidesPerView: 3.5,
	spaceBetween: 35,
	loop: true,
	autoplay: {
		delay: 2000
	},
	keyboard: {
		enabled: true,
		pageUpDown: true
	},
	// mousewheel: {
	// 	sensitivity: 1,
	// 	EventTarget: '.present-slider'
	// },
	centeredSlides: true,

	breakpoints: {
		320: {
			slidesPerView: 1.5,
		},
		767: {
			slidesPerView: 2.5,
		},
		992: {
			slidesPerView: 3.5,
		}
	},	
});


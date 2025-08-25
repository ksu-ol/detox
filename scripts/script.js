(() =>{
	// faq
	 document.querySelectorAll('.faq__item').forEach(item => {
        item.addEventListener('click', (e) => {
            const isActive = item.classList.contains('active');
            
            document.querySelectorAll('.faq__item').forEach(el => {
                el.classList.remove('active');
            });
            
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

	// mask tel
	const phoneInput = document.getElementById('tel');

	phoneInput.addEventListener('input', function() {
		let input = phoneInput.value.replace(/\D/g, ''); 
		let formattedInput = '+7 9';

		if (input.length > 2) {
				formattedInput += input.substring(2, 4); 
		}
		if (input.length >= 5) {
				formattedInput += '-' + input.substring(4, 7); 
		}
		if (input.length >= 8) {
				formattedInput += '-' + input.substring(7, 9);
		}
		if (input.length >= 10) {
				formattedInput += '-' + input.substring(9, 11);
		}

		phoneInput.value = formattedInput;
});

// about-slider

	const aboutSliderCheck = document.querySelectorAll('.about__slider');

		if (aboutSliderCheck.length > 0) {
			const promotionsSlider = new Swiper('.about__slider', {
				 loop: true,
				navigation: {
					nextEl: '.about__slider-btn_next',
					prevEl: '.about__slider-btn_prev',
				},
				 breakpoints: {
            0: {
							slidesPerView: 1.2,
              spaceBetween: 5,
							autoHeight: true,
						},
						768: {
                slidesPerView: 1,
                spaceBetween: 10,
								autoHeight: true,
            },
					}
			});
		}

	// reviews-slider

	const reviewsSliderCheck = document.querySelectorAll('.reviews__slider');

	if (reviewsSliderCheck.length > 0) {
    const reviewsSlider = new Swiper('.reviews__slider', {
        loop: true,
        navigation: {
            nextEl: '.reviews__slider-btn_next',
            prevEl: '.reviews__slider-btn_prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
								autoHeight: true,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
								autoHeight: true,
            },
        },
				on: {
					init: function() {
						initReviewToggles();
					}
        }
    });
}

// doctor slider


})()
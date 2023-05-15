const splide = new Splide('.splide', {
	type: 'loop',
	drag: 'free',
	perPage: 3,
	arrows: false,
	pagination: false,
	gap: 50,
	breakpoints: {
		1199: {
			perPage: 2,
			gap: 25,
		},
		992: {
			perPage: 2,
		},
		767: {
			perPage: 1,
			padding: {
				right: 100,
			}
		},
		576: {
			perPage: 1,
			padding: {
				right: 80,
			}
		}
	},
});

splide.mount();
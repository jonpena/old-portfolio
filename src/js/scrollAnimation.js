const scrollAnimation = () => {
	window.scrollReveal = ScrollReveal();

	scrollReveal.reveal('.navbar-container', {
		duration: 1200,
		origin: 'top',
		distance: '4rem',
		mobile: false,
	});

	scrollReveal.reveal('.move-right', {
		duration: 1500,
		origin: 'left',
		distance: '-100px',
	});

	scrollReveal.reveal('.move-left', {
		duration: 1500,
		origin: 'left',
		distance: '100px',
	});

	scrollReveal.reveal('.move-top', {
		duration: 1500,
		origin: 'bottom',
		distance: '60px',
	});
};

export default scrollAnimation;

const setPageLanguage = () => {
	const browserLang = navigator.language || navigator.userLanguage;
	const lang = browserLang.slice(0, 2);

	if (window.localStorage.getItem('lang') === null) {
		window.localStorage.setItem('lang', lang);
	}
};

export { setPageLanguage };

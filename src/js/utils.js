const setLanguageJson = (language, texts) => {
  (async () => {
    const response = await fetch(`./language/${language}.json`);
    const data = await response.json();
    for (const text of texts) {
      text.innerHTML = data[text.dataset.section][text.dataset.value];
    }
  })();
};

export { setLanguageJson };

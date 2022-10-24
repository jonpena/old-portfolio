const setLanguageJson = (language, $textToChange) => {
  fetch(`./language/${language}.json`)
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then((json) => {
      for (const text of $textToChange) {
        text.innerHTML = json[text.dataset.section][text.dataset.value];
      }
    })
    .catch((err) => console.log(err));
};

export { setLanguageJson };

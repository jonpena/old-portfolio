const changePageLanguage = function (key) {
  window.localStorage.setItem("lang", key);
};

export function setPageLanguage() {
  let key = window.localStorage.getItem("lang");
  const browserLang = (navigator.language || navigator.userLanguage).slice(
    0,
    2
  );
  if (key === null) changePageLanguage(browserLang);
}

export default changePageLanguage;

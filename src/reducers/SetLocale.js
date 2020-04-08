const getQueryParams = (params, url) => {
  let href = url;
  //this expression is to get the query strings
  let reg = new RegExp("[?&]" + params + "=([^&#]*)", "i");
  let queryString = reg.exec(href);
  return queryString ? queryString[1] : null;
};

let locale = getQueryParams("lang", window.location.href) || "ru";

const changeLocale = (state = locale, action) => {
  switch (action.type) {
    case "en":
      return "en";
    case "ru":
      return "ru";
    default:
      return state;
  }
};

export default changeLocale;

import React from "react";
import ReactDOM from "react-dom";
import "./styles/app.scss";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import RootReducer from "./reducers";
import { Provider } from "react-redux";
let store = createStore(RootReducer);
// import "bootstrap/dist/css/bootstrap.min.css";

// import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

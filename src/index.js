import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Route";
import * as Sentry from "@sentry/browser";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import YourApp from "./components/textTimeOut";
import Toast from "./components/toaster";
// Sentry.init({
//   dsn: "https://a77eed72bbf84889b72bc430fa710dec@sentry.io/2029303"
// });

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

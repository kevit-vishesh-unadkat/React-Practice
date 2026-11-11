import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./app/store";
import App1 from "./App1";
import App2 from "./App2";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <App1/>
      <App2/>
    </Provider>
  </React.StrictMode>
);
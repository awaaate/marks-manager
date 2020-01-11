import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

const cssTheme = {
    primary: "#000",
    secondary: "#eeeeee",
    light: "white"
};


ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider theme={cssTheme}>
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById("root")
);

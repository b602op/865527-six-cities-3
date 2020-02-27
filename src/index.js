import React from "react";
import ReactDOM from "react-dom";

import {App} from "./components/app/app";
import offers from "./mocks/offers";

const places = 999;

ReactDOM.render(
    <App places ={places } offers={offers} />,
    document.getElementById(`root`)
);

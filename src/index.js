import React from "react";
import ReactDOM from "react-dom";

import {App} from "./components/app/app";
import offers from "./mocks/offers";

const errorsCount = 999;

ReactDOM.render(
    <App errorsCount={errorsCount} offers={offers} />,
    document.getElementById(`root`)
);

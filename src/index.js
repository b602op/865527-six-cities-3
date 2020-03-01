import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app";
import {offers} from "./mocks/offers";
import {offerDetails} from "./mocks/offer-details";
import {user} from "./mocks/user";

const places = 3;

ReactDOM.render(
    <App
      places={places}
      offers={offers}
      offerDetails={offerDetails}
      user={user}
    />,
    document.getElementById(`root`)
);

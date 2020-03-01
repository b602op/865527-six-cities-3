import React from "react";
import renderer from "react-test-renderer";

import App from "./app";
import {offers} from "../../mocks/offers";
import {offerDetails} from "../../mocks/offer-details";
import {user} from "../../mocks/user";

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      places={3}
      offers={offers}
      offerDetails={offerDetails}
      user={user}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

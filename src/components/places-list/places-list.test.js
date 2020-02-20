import React from "react";
import renderer from "react-test-renderer";

import PlacesList from "./places-list";
import offers from "../../mocks/offers";

it(`Should Places List render correctly`, () => {
  const tree = renderer
    .create(<PlacesList
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

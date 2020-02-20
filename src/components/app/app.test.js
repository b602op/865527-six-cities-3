import React from "react";
import renderer from "react-test-renderer";

import {App} from "./app";
import offers2 from "../../mocks/offers";

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      errorsCount={999}
      offers={offers2}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

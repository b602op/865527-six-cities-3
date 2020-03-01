import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

import Main from './main';
import {offers} from '../../mocks/offers';

it(`Правильное отображение компонента Main`, () => {
  const tree = renderer
    .create(<Router>
      <Main
        places={3}
        offers = {offers}
      />
    </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

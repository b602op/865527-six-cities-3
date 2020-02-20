import React from 'react';
import renderer from 'react-test-renderer';

import Main from './main.jsx';
import offers from '../../mocks/offers';

it(`Правильное отображение компонента Main`, () => {
  const tree = renderer
    .create(<Main
      errorsCount={999}
      offers = {offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

it(`Правильное отображение компонента App`, () => {
  const tree = renderer
    .create(<App
      errorsCount={999}
      rentalOffers={[`Beautiful & luxurious apartment at great location`, `Wood and stone place`]}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

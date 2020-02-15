import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

it(`Правильное отображение компонента Main`, () => {
  const tree = renderer
    .create(<Main
      errorsCount={999}
      rentalOffers={[`Beautiful & luxurious apartment at great location`, `Wood and stone place`]}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

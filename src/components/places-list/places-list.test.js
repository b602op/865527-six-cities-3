import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter as Router} from 'react-router-dom';

import PlacesList from "./places-list";

const offers = [
  {
    name: `Красивая и роскошная квартира в отличном месте`,
    img: `img/apartment-01.jpg`,
    price: 120,
    rating: 80,
    type: `Apartment`,
    period: `night`,
    premium: true,
    id: 1,
  },
  {
    name: `Дерево и камень место`,
    img: `img/apartment-02.jpg`,
    price: 80,
    rating: 70,
    type: `Private room`,
    period: `night`,
    premium: false,
    id: 2,
  },
  {
    name: `Вид на Москва - река`,
    img: `img/apartment-03.jpg`,
    price: 132,
    rating: 50,
    type: `Apartment`,
    period: `night`,
    premium: true,
    id: 3,
  },
];


it(`<PlacesList /> должен быть отображен правильно`, () => {
  const tree = renderer
    .create(<Router>
      <PlacesList
        offers={offers}
      />
    </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

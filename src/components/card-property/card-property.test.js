import React from 'react';
import renderer from 'react-test-renderer';
import CardProperty from './card-property.jsx';
import {BrowserRouter as Router} from 'react-router-dom';

export const offerDetails = [{
  id: 1,
  name: `Beautiful & luxurious studio at great location`,
  ratingValue: 4.8,
  mark: `Premium`,
  price: {
    value: 120,
    text: `night`,
  },
  insideItem: [
    `Wi-Fi`,
    `Washing machine`,
    `Towels`,
    `Heating`,
    `Coffee machine`,
    `Baby seat`,
    `Kitchen`,
    `Dishwasher`,
    `Cabel TV`,
    `Fridge`,
  ],
  features: [
    {
      type: `entire`,
      value: `Apartment`
    },
    {
      type: `bedrooms`,
      value: `3 Bedrooms`
    },
    {
      type: `adults`,
      value: `Max 4 adults`
    },
  ],
  gallery: [
    `img/room.jpg`,
    `img/studio-01.jpg`,
  ],
  host: {
    profile: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      status: `pro`,
    },
    description: [
      `Тихий уютный и живописный, который скрывается за рекой уникальной легкостью Амстердама. Здание зеленое и построено в 18 веке.`,
      `Независимый дом, стратегически расположенный между площадью Рембрандта и Национальной оперой, но где суета города приходит, чтобы отдохнуть в этой аллее цветочной и красочной.`,
    ]
  }
},
{
  id: 2,
  name: `Дерево и камень место`,
  ratingValue: 2,
  mark: `Premium`,
  price: {
    value: 555,
    text: `night`,
  },
  insideItem: [
    `Baby seat`,
    `Kitchen`,
    `Dishwasher`,
    `Cabel TV`,
  ],
  features: [
    {
      type: `entire`,
      value: `Apartment`
    },
  ],
  gallery: [
    `img/studio-01.jpg`,
  ],
  host: {
    profile: {
      name: `Petya`,
      avatar: null,
      status: null,
    },
    description: [
      `бла бла 3 рубля`,
      `тест2`,
    ]
  }
},
{
  id: 3,
  name: `аааааааааааааааааааааааа`,
  ratingValue: 1.2,
  mark: `Premium`,
  price: {
    value: 120,
    text: `night`,
  },
  insideItem: [
    `Wi-Fi`,
    `Washing machine`,
  ],
  features: [
    {
      type: `entire`,
      value: `Apartment`
    },
  ],
  gallery: [
    `img/studio-01.jpg`,
  ],
  host: {
    profile: {
      name: `таракан`,
      avatar: null,
      status: null,
    },
    description: [
      `бла бла 3 рубля`,
      `тест3`,
    ]
  }
},
{
  id: 4,
  name: `Дерево и камень место`,
  ratingValue: 2,
  mark: `Premium`,
  price: {
    value: 120,
    text: `night`,
  },
  insideItem: [
    `Wi-Fi`,
    `Washing machine`,
  ],
  features: [
    {
      type: `entire`,
      value: `Apartment`
    },
  ],
  gallery: [
    `img/apartment-01.jpg`,
    `img/apartment-02.jpg`,
    `img/apartment-03.jpg`,
  ],
  host: {
    profile: {
      name: `фыва`,
      avatar: null,
      status: null,
    },
    description: [
      `бла бла 3 рубля`,
      `тест4`,
    ]
  }
}
];

export const user = {
  mail: `Oliver.conner@gmail.com`,
};

it(`<CardProperty /> should be render correctly`, () => {
  const tree = renderer.create(
      <Router>
        <CardProperty offerDetails={offerDetails} user={user} />
      </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

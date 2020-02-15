import PropTypes from 'prop-types';
import React from 'react';

import Main from '../main/main';

const rentalOffers = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`];

export const App = ({errorsCount}) => <Main errorsCount={errorsCount} rentalOffers={rentalOffers} />;

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

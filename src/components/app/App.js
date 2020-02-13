import PropTypes from 'prop-types';
import React from 'react';

import WelcomeScreen from '../welcome-screen/welcome-screen';

const rentalOffers = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`];

export const App = ({errorsCount}) => <WelcomeScreen errorsCount={errorsCount} rentalOffers={rentalOffers} />;

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

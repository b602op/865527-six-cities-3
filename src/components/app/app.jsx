import PropTypes from 'prop-types';
import React from 'react';

import Main from '../main/main';

export const App = ({errorsCount, offers}) => <Main errorsCount={errorsCount} offers={offers} />;

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

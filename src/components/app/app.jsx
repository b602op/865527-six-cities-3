import PropTypes from 'prop-types';
import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';


import Main from '../main/main';
import CardProperty from '../card-property/card-property';


export const App = ({places, offers}) => {
  const [] = useState()

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main places={places} offers={offers} />
        </Route>
        <Route exact path="/property">
          <CardProperty />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  places: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

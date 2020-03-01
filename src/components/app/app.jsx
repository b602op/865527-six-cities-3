import PropTypes from 'prop-types';
import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';


import Main from '../main/main';
import CardProperty from '../card-property/card-property';


const App = ({places, offers, offerDetails, user}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main places={places} offers={offers} />
        </Route>
        <Route exact path="/property/:id">
          <CardProperty
            offerDetails={offerDetails}
            user={user}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  places: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  offerDetails: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  history: PropTypes.any,
};

export default App;

import React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen';

// eslint-disable-next-line react/prop-types
const App = ({errorsCount}) => <WelcomeScreen errorsCount={errorsCount} />;

export default App;

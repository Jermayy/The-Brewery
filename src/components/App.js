// @flow
import * as React from 'react';

import Header from './header';

import Body from './body';

import Footer from './footer';

import './App.css';

const App = (): React.Node => {
  const Styles = {
    main: {
      display: 'flex',
      flexDirection: 'column',
    },
  };

  return (
    <div className="App" style={Styles.main}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;

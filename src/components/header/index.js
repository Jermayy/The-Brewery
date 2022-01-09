//@flow
import * as React from 'react';
import TempSwitch from './tempSwitch';

const Header = (): React.Node => {
  const Styles = {
    header: {
      display: 'flex',
      alignItems: 'center',
    },

    title: {
      flex: 1,
      fontSize: '40px',
      marginLeft: '16px',
    },
  };

  return (
    <div style={Styles.header}>
      <h1 style={Styles.title}>The Brewery Transport</h1>
      <TempSwitch />
    </div>
  );
};

export default Header;

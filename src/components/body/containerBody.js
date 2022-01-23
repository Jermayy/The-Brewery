// @flow

import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

import BeerContainer from './beerContainer';

const ContainerBody = (): React.Node => {
  const Styles = StyleSheet.create({
    containerBody: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      margin: '48px 96px',
      borderRadius: '8px',
      backgroundColor: 'grey',
    },
    containerRow: {
      display: 'flex',
      flex: 1,
    },

  });

  return (
    <div
      className={css(Styles.containerBody)}
    >
      <div
        className={css(Styles.containerRow)}
      >
        <BeerContainer />
        <BeerContainer />
        <BeerContainer />
        <BeerContainer />
        <BeerContainer />
        <BeerContainer />
      </div>
      <div
        className={css(Styles.containerRow)}
      >
        <BeerContainer />
        <BeerContainer />
        <BeerContainer />
        <BeerContainer />
        <BeerContainer />
        <BeerContainer />
      </div>
    </div>
  );
};

export default ContainerBody;

// @flow
import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

const BeerContainer = (): React.Node => {
  const Styles = StyleSheet.create({
    container: {
      display: 'flex',
      itemAlign: 'center',
      justifyContent: 'Center',
      backgroundColor: 'white',
      height: '100%',
      width: '100%',
      margin: 8,
      cursor: 'pointer',
    },
    addIcon: {
      display: 'flex',
      justifyContent: 'center',

    },
  });

  return (
    <div
      className={css(Styles.container)}
    >
      <div
        className={css(Styles.addIcon)}
      >
        icon

      </div>
    </div>
  );
};

export default BeerContainer;

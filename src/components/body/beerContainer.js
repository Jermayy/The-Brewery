// @flow
import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import AddIcon from '@mui/icons-material/Add';

const BeerContainer = (): React.Node => {
  const Styles = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      margin: 8,
      backgroundColor: 'white',
      cursor: 'pointer',
    },
    iconBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
    },
    addIcon: {
      fontSize: 48,
      color: 'green',
    },
  });

  return (
    <div className={css(Styles.container)}>
      <div className={css(Styles.iconBox)}>
        <AddIcon className={css(Styles.addIcon)} />
      </div>
    </div>
  );
};

export default BeerContainer;

// @flow

import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import GridViewIcon from '@mui/icons-material/GridView';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  onClick: () => void,
};

const ButtonOptions = ({ onClick }: Props): React.Node => {
  const Styles = StyleSheet.create({
    menu: {
      display: 'flex',
      justifyContent: 'space-around',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: '90px',
      width: '48px',
      height: '120px',
      cursor: 'pointer',
    },
    shadow: {
      display: 'flex',
      justifyContent: 'space-around',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: '90px',
      width: '48px',
      height: '120px',
      boxShadow: '-1px 6px 8px',
      backgroundColor: '#FFFFFF',
    },
    container: {
      margin: '24px',
    },
  });
  return (
    <div
      className={css(Styles.container)}
    >
      <div className={css(Styles.menu)} onClick={onClick}>
        <div className={css(Styles.shadow)}>
          <GridViewIcon />
          <SportsBarIcon />
          <CloseIcon />
        </div>
      </div>
    </div>

  );
};

export default ButtonOptions;

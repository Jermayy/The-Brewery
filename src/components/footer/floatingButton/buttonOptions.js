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
      border: 'solid black',
      width: '48px',
      height: '120px',
    },
  });
  return (
    <div className={css(Styles.menu)}>
      <GridViewIcon onClick={onClick} />
      <SportsBarIcon onClick={onClick} />
      <CloseIcon onClick={onClick} />
    </div>
  );
};

export default ButtonOptions;

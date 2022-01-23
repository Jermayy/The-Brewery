// @flow
import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

import SettingsIcon from '@mui/icons-material/Settings';

 type Props = {
    onClick?: ()=> void,
};

const FloatingButton = ({ onClick }: Props): React.Node => {
  const Styles = StyleSheet.create({
    container: {
      margin: 26,
    },
    button: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 48,
      width: 48,
      fontSize: 24,
      cursor: 'pointer',
    },
    buttonShadow: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '90px',
      boxShadow: '-1px 6px 8px',
      backgroundColor: '#FFFFFF',
      cursor: 'pointer',
    },
  });
  return (
    <div className={css(Styles.container)} onClick={onClick}>
      <div className={css(Styles.buttonShadow)}>
        <div className={css(Styles.button)}>
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
};

export default FloatingButton;

// @flow
import * as React from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { StyleSheet, css } from 'aphrodite';

const TempSwitch = (): React.Node => {
  const [temp, setTemp] = React.useState('C');

  const Styles = StyleSheet.create({
    tempBox: {
      position: 'relative',
      display: 'flex',
      textAlign: 'center',
      cursor: 'pointer',

      ':hover': {
        opacity: 0.5,
      },
    },
    tempText: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      fontSize: '25px',
    },
  });

  const switchTemp = (temperature: string) => {
    if (temperature === 'C') {
      setTemp('F');
    } else {
      setTemp('C');
    }
  };

  return (
    <div
      className={css(Styles.tempBox)}
      onClick={() => switchTemp(temp)}
    >
      <AcUnitIcon
        color="primary"
        sx={{ fontSize: 60 }}
      />
      <div className={css(Styles.tempText)}>
        °
        {temp}
      </div>
    </div>
  );
};

export default TempSwitch;

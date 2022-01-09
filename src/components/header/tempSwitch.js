// @flow
import * as React from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const TempSwitch = (): React.Node => {
  const [temp, setTemp] = React.useState('C');

  const Styles = {
    tempBox: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
    },
    snowflake: {
      position: 'absolute',
      right: '16px',
      opacity: 0.3,
    },
    tempText: {
      position: 'absolute',
      right: '45px',
      fontSize: '40px',
    },
  };

  const switchTemp = (temp: string) => {
    if (temp === 'C') {
      setTemp('F');
    } else {
      setTemp('C');
    }
  };

  return (
    <div style={Styles.tempBox} onClick={() => switchTemp(temp)}>
      <AcUnitIcon
        color="primary"
        sx={{ fontSize: 100 }}
        style={Styles.snowflake}
      />
      <div style={Styles.tempText}>°{temp}</div>
    </div>
  );
};

export default TempSwitch;

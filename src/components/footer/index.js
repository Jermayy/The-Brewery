// @flow
import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

import FloatingButton from './floatingButton';

const Footer = (): React.Node => {
  const Styles = StyleSheet.create({
    footerBox: {
      display: 'flex',
    },
  });

  const onClick = () => {
    console.log('test');
  };

  return (
    <div className={css(Styles.footerBox)}>
      <FloatingButton onClick={onClick} />
    </div>
  );
};

export default Footer;

// @flow
import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

import ContainerBody from './containerBody';

const Body = (): React.Node => {
  const Styles = StyleSheet.create({
    body: {
      display: 'flex',
      justifyContent: 'space-around',
      itemAlign: 'center',
    },
  });

  return (
    <div className={css(Styles.body)}>
      <ContainerBody />
    </div>
  );
};

export default Body;

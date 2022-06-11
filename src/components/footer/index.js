// @flow
import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

import FloatingButton from './floatingButton';
import ButtonOptions from './floatingButton/buttonOptions';

const Footer = (): React.Node => {
  const [showButton, setShowButton] = React.useState(false);

  const Styles = StyleSheet.create({
    footerBox: {
      display: 'flex',
    },
  });

  function renderButtons(showButtonOptions: boolean) {
    return showButtonOptions
      ? <ButtonOptions onClick={() => setShowButton(showButton !== true ?? false)} />
      : <FloatingButton onClick={() => setShowButton(showButton !== true ?? false)} />;
  }
  React.useEffect(() => { renderButtons(showButton); }, [showButton]);

  return (
    <div className={css(Styles.footerBox)}>
      {renderButtons(showButton)}
    </div>
  );
};

export default Footer;

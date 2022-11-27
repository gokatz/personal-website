import React from 'react';
import styles from './BuyMeACoffee.module.scss';

const BuyMeACoffee = () => (
  <div style={{ marginBottom: '2em' }}>
    <a href="https://www.buymeacoffee.com/Z893eGMRB" target="_blank">
      <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" className={styles['buy-me-cta']} />
    </a>
  </div>
);

export default BuyMeACoffee;

import React from 'react';
import styles from './Icon.module.scss';

const Icon = ({ icon }) => (
  <svg className={styles['icon']} viewBox={icon.viewBox}>
    <path d={icon.path} />

    {/* Used only for StackOverflow */}
    {icon.path_1 ? <path d={icon.path_1} /> : null }
  </svg>
);

export default Icon;

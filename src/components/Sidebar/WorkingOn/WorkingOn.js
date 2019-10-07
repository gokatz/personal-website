import React from 'react';
import styles from './WorkingOn.module.scss';

const WorkingOn = () => (
  <div className={styles['workingon']}>
    <b> Working On </b>
    <div>
        <a href="https://ember-migration-helper.web.app" target="_blank">Ember Migration Helper</a>
    </div>
    <div>
        <a href="https://github.com/gokatz/ua-parser-extension/" target="_blank">UA Parser Extension</a>
    </div>
  </div>
);

export default WorkingOn;
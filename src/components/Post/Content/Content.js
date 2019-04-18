import React from 'react';
import moment from 'moment';
import styles from './Content.module.scss';
import MetaStyles from '../Meta/Meta.module.scss';

const Content = ({
  body,
  title,
  template,
  version,
  latestReleaseDate
}) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    {
      template === 'project'
        ? <p className={MetaStyles['meta__date']} style={{ textAlign: 'center' }}>Latest version: <b>{version}</b> (released on {moment(latestReleaseDate).format('D MMM YYYY')})</p>
        : ''
    }
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;

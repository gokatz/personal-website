// Forked from Feed Component

import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import styles from './Til.module.scss';

const TIL = ({ edges }) => (
  <div className={styles['til']}>
    {edges.map((edge) => {
      let { frontmatter, html, } = edge.node;
      let { title, date, via: [ learntFrom ] = [] } = frontmatter;
      
      let emoji;
      switch (learntFrom.g) {
        case 'm':
          emoji = '🦸‍♂️';
          break;

        case 'f':
          emoji = '🦸‍♀️';
          break;

        case 'docs':
          emoji = '📝';
          break;
      }

      return (
        <div className={styles['item']}>
          <h3> {title} </h3>
          <div dangerouslySetInnerHTML={{ __html: html }}></div> 
          <p> {emoji} <b>Learnt From <a href={learntFrom.link} target="_blank" rel="noreferrer"> {learntFrom.label} </a> </b> on {moment(date).format('D MMM YYYY')} </p> 
        </div>
      )
    })}
  </div>
);

export default TIL;

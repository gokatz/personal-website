import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import styles from './Feed.module.scss';

const Feed = ({ edges }) => (
  <div className={styles['feed']}>
    {edges.map((edge) => (
      <div className={styles['feed__item']} key={edge.node.fields.slug}>
        <div className={styles['feed__item-meta']}>
          <time className={styles['feed__item-meta-time']} dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}>
            {moment(edge.node.frontmatter.date).format('MMMM YYYY')}
          </time>
          <span className={styles['feed__item-meta-divider']} />
          {
            edge.node.frontmatter.template === 'post'
              ? (
                <span className={styles['feed__item-meta-category']}>
                  <Link to={edge.node.fields.categorySlug} className={styles['feed__item-meta-category-link']}>{edge.node.frontmatter.category}</Link>
                </span>
              )
              : ''
          }
        </div>
        <h2 className={styles['feed__item-title']}>
          {
            edge.node.frontmatter.template === 'post'
              ? <Link className={styles['feed__item-title-link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
              : edge.node.frontmatter.title
          }
        </h2>
        <p className={styles['feed__item-description']}>{edge.node.frontmatter.description}</p>
        {
          edge.node.frontmatter.template === 'post'
            ? <Link className={styles['feed__item-readmore']} to={edge.node.fields.slug}>Read</Link>
            : ''
        }
        {
          edge.node.frontmatter.links && edge.node.frontmatter.links.length
            ? (
              edge.node.frontmatter.links.map((linkObj) => (
                <a
                  key={linkObj.link}
                  href={linkObj.link} target={linkObj.internal ? '' : '_blank'}
                  className={styles['feed__item-projectlink']}
                >
                  {linkObj.title}
                </a>
              ))
            )
            : ''
        }
      </div>
    ))}
  </div>
);

export default Feed;

import React from 'react';
import { withPrefix, Link } from 'gatsby';
import styles from './Author.module.scss';

const Author = ({ author, isIndex }) => (
  <div className={styles['author']}>
    <Link to="/">
      <img
        src={withPrefix(author.photo)}
        className={styles['author__photo']}
        width="75"
        height="75"
        alt={author.name}
      />
    </Link>

    { isIndex ? (
      <h1 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">{author.name}</Link>
      </h1>
    ) : (
      <h2 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">{author.name}</Link>
      </h2>
    )}
    <p className={styles['author__subtitle']}>
      A fellow human 💕 Love building things over web... 💕 doing Ember 🐹 and React ⚛️ <a href="https://twitter.com/zoho" target="_blank">@zoho</a>! Curated <a href="https://twitter.com/emberjstweet" target="_blank">@emberjstweet</a> 🐹🤖 with 🔥
    </p>
  </div>
);

export default Author;

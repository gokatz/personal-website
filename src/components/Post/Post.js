import React from 'react';
import { Link } from 'gatsby';
// import moment from 'moment';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import styles from './Post.module.scss';

const Post = ({ post }) => {
  const {
    tags,
    title,
    date,
    template,
    version,
    latestReleaseDate
  } = post.frontmatter;

  const { html } = post;
  const { tagSlugs } = post.fields;

  let navigationText = 'All Articles';
  let navigationLink = '/';
  let canShowMetaDetails = true;
  let canShowComment = true;

  if (template === 'project') {
    navigationText = 'All Projects';
    navigationLink = '/projects';
    canShowMetaDetails = false;
    canShowComment = false;
  }

  return (
    <div className={styles['post']}>
      <Link className={styles['post__home-button']} to={navigationLink}> {navigationText} </Link>

      <div className={styles['post__content']}>
        <Content
          body={html}
          title={title}
          template={template}
          version={version}
          latestReleaseDate={latestReleaseDate}
        />
      </div>

      <div className={styles['post__footer']}>
        {
          canShowMetaDetails
            ? <React.Fragment>
                <Meta
                  date={date}
                  version={version}
                />
                <Tags tags={tags} tagSlugs={tagSlugs} />
              </React.Fragment>
            : ''
        }
        <Author />
      </div>
      {canShowComment
        ? <div className={styles['post__comments']}>
            <Comments postSlug={post.fields.slug} postTitle={post.frontmatter.title} />
          </div>
        : ''
      }
    </div>
  );
};

export default Post;

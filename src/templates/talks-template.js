import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Page from '../components/Page';
import Pagination from '../components/Pagination';

const TalkTemplate = ({ data, pageContext }) => {
  const {
    title: siteTitle
  } = data.site.siteMetadata;

  const {
    currentPage,
    hasNextPage,
    hasPrevPage,
    prevPagePath,
    nextPagePath
  } = pageContext;

  const { edges } = data.allMarkdownRemark;
  const pageTitle = currentPage > 0 ? `Posts - Page ${currentPage} - ${siteTitle}` : siteTitle;

  const talksSummary = edges.reduce((summary, talk) => {
    const fMatter = talk.node.frontmatter || {};
    return `${summary}, ${fMatter.title} at ${fMatter.conf_name}`;
  }, '');

  const pageDescription = `Gokul kathirvel had attended few local meetup and conferences. Recent talks are${talksSummary} and few more`;

  return (
    <Layout title={pageTitle} description={pageDescription}>
      <Sidebar />
      <Page>
        <Feed edges={edges} />
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query TalkTemplate {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "talk" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            tags
            links {
              title
              internal
              link
            }
            slug
            template
            category
            description
            conf_name
          }
        }
      }
    }
  }
`;

export default TalkTemplate;

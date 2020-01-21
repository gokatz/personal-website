import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Til from '../components/Til';
import Page from '../components/Page';
import Pagination from '../components/Pagination';

const TILTemplate = ({ data, pageContext }) => {
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

  const talksSummary = edges.reduce((summary, ossProject) => {
    const fMatter = ossProject.node.frontmatter || {};
    return `${summary}, ${fMatter.title}`;
  }, '');

  const pageDescription = `Gokul Kathirvel loves to learn daily. Here are the few things learned on the daily basis`;

  return (
    <Layout title={pageTitle} description={pageDescription}>
      <Sidebar />
      <Page>
        <Til edges={edges} />
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
  query TILTemplate {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "til" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          html
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
              link
            }
            via {
              label
              link
              g
            }
            slug
            template
            category
            description
          }
        }
      }
    }
  }
`;

export default TILTemplate;

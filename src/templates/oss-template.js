import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Page from '../components/Page';
import Pagination from '../components/Pagination';

const ProjectTemplate = ({ data, pageContext }) => {
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

  const pageDescription = `Gokul Kathirvel is maintaining few Open Source projects (OSS). Some of them are${talksSummary} and few more`;

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
  query OSSTemplate {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "oss" }, draft: { ne: true } } },
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
              link
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

export default ProjectTemplate;

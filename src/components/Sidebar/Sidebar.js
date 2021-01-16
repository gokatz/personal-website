import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import WorkingOn from './WorkingOn';
import ProductHunt from './ProductHunt';
import Menu from './Menu';
import styles from './Sidebar.module.scss';

export const PureSidebar = ({ data, isIndex }) => {
  const {
    author,
    copyright,
    menu
  } = data.site.siteMetadata;

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        {/* <WorkingOn /> */}
        <div style={{ marginBottom: '2rem' }}>
          <a href="https://www.codementor.io/@gokatz?refer=badge" target="_blank" rel="noopener noreferrer">
            <img src="https://www.codementor.io/m-badges/gokatz/find-me-on-cm-b.svg" alt="Codementor badge" />
          </a>
        </div>
        <ProductHunt />
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export const Sidebar = (props) => (
  <StaticQuery
    query={graphql`
      query SidebarQuery {
        site {
          siteMetadata {
            title
            subtitle
            copyright
            menu {
              label
              path
            }
            author {
              name
              photo
              bio
              contacts {
                twitter
                github
                email
                linkedin
                devto
                stackoverflow
              }
            }
          }
        }
      }
    `}
    render={(data) => <PureSidebar {...props} data={data}/>}
  />
);

export default Sidebar;

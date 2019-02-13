import React from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';

const HomeTemplate = () => {
  console.log('Index');
  return (
    <Layout title="Home Page" description="Dummy Description">
      <Sidebar />
      <Page>
        This is Index
      </Page>
    </Layout>
  );
};

export default HomeTemplate;

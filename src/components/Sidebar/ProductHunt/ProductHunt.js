import React from 'react';
import styles from './ProductHunt.module.scss';

const WorkingOn = () => (
  <div style={{ marginBottom: '2em' }}>
    <div style={{ marginBottom: '10px' }}>
      Muze  Featured on:
    </div>
    <a href="https://www.producthunt.com/posts/youtaber?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-youtaber" target="_blank">
      <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=105642&theme=dark" alt="YouTaber - Manage all your youtube tabs at one place! | Product Hunt Embed" style={{ width: '250px', height: '54px'}} width="250" height="54" />
    </a>
  </div>
);

export default WorkingOn;

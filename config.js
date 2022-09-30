'use strict';

const subtitle = 'gokatz.eth. A fellow human 🤗 love building things over web 💕 Doing React Coinbase ₿. Passionate about Web performance, React and Ember. Prev: Zoho'

module.exports = {
  url: 'https://gokatz.me',
  title: 'Gokul Kathirvel',
  subtitle,
  // copyright: '© All rights reserved.', 
  copyright: '',
  disqusShortname: 'gokatz',
  postsPerPage: 5,
  googleAnalyticsId: 'UA-104177053-2',
  menu: [
    {
      label: 'Blog',
      path: '/'
    },
    {
      label: 'Projects',
      path: '/projects'
    },
    {
      label: 'OSS Love',
      path: '/oss'
    },
    {
      label: 'Talks',
      path: '/talks'
    },
    // {
    //   label: 'TIL 💡',
    //   path: '/til'
    // }
    // {
    //   label: 'Profile',
    //   path: '/profile'
    // }
  ],
  author: {
    name: 'Gokul Kathirvel',
    photo: '/photo.jpg',
    bio: subtitle,
    contacts: {
      email: 'gokulkathirvel@live.com',
      twitter: '_gokatz',
      github: 'gokatz',
      linkedin: 'in/gokulkathirvel',
      devto: 'gokatz',
      stackoverflow: '5816277/gokul-kathirvel'
    }
  }
};

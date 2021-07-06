import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    className: 'nav-text',
  },
  {
    title: 'Category',
    path: '/category',
    icon: <FaIcons.FaAdversal />,
    className: 'nav-text',
  },
  {
    title: 'Statistics',
    path: '/statistics',
    icon: <FaIcons.FaAdversal />,
    className: 'nav-text',
  },
];

export default SidebarData;

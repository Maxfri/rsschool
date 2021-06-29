import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Category',
    path: '/category',
    icon: <FaIcons.FaAdversal />,
    cName: 'nav-text',
  },
  {
    title: 'Statistics',
    path: '/statistics',
    icon: <FaIcons.FaAdversal />,
    cName: 'nav-text',
  },
];

export default SidebarData;

import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FcIcons from 'react-icons/fc';

export const SidebarData = [
  // {
  //   title: 'Home',
  //   path: '/',
  //   icon: <AiIcons.AiFillHome />,
  //   cName: 'nav-text'
  // },
  {
    title: 'Register',
    path: '/signup',
    icon: <AiIcons.AiOutlineLock/>,
    cName: 'nav-text'
  },
  {
    title: 'Sign In',
    path: '/',
    icon: <AiIcons.AiOutlineUnlock />,
    cName: 'nav-text'
  },
  {
    title: 'Add Products',
    path: '/productAdd',
    icon: <FcIcons.FcAddColumn />,
    cName: 'nav-text'
  },
  {
    title: 'Delete Products',
    path: '/productDelete',
    icon: <AiIcons.AiOutlineDelete />,
    cName: 'nav-text'
  },
  {
    title: 'Add Orders',
    path: '/orderAdd',
    icon: <FcIcons.FcAddColumn />,
    cName: 'nav-text'
  },
  {
    title: 'Delete Orders',
    path: '/orderDelete',
    icon: <AiIcons.AiOutlineDelete />,
    cName: 'nav-text'
  }
];
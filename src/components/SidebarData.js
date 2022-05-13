import React from 'react';
import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io5';

export const SidebarData = [
  {
    title: 'MY INFO',
    path: '/info',
    icon: <BsIcons.BsPersonBoundingBox />,
    cName: 'nav-text'
  },
  {
    title: 'MY CARDS',
    path: '/',
    icon: <BsIcons.BsCreditCard />,
    cName: 'nav-text'
  },
  {
    title: 'MY WALLET',
    path: '/wallet',
    icon: <IoIcons.IoSettingsOutline />,
    cName: 'nav-text'
  },
  {
    title: 'SETTINGS',
    path: '/setting',
    icon: <IoIcons.IoWalletOutline />,
    cName: 'nav-text'
  }
];
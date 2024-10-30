import React from 'react';
import HeaderCommon from './header-common';
import HeaderIcon from './header-icon';
import './index.css';

const HeaderLayout = () => {
  const userInfo = {
    username: 'bilday',
    avatar: './avatar.png',
  };

  return (
    <header className="header-layout">
      <HeaderCommon username={userInfo.username} avatar={userInfo.avatar} />
      <HeaderIcon />
    </header>
  );
}

export default HeaderLayout;

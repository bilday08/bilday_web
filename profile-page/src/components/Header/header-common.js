import React from 'react';
import './index.css';

const HeaderCommon = ({ username, avatar }) => {
    return (
      <div className="header-common">
        <img src={avatar} alt="User Avatar" className="header-avatar" />
        <span className="header-username">{username}</span>
      </div>
    );
  }
  
export default HeaderCommon;
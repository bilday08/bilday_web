import React from 'react';
import { FaHome, FaProductHunt, FaBell, FaShoppingCart } from 'react-icons/fa';
import './index.css';

const HeaderIcon = () => {
  return (
    <div className="header-icons">
      <a href="/" className="header-icon">
        <FaHome /> <span>Trang chủ</span>
      </a>
      <a href="/san-pham" className="header-icon">
        <FaProductHunt /> <span>Sản phẩm</span>
      </a>
      <a href="/thong-bao" className="header-icon">
        <FaBell />
      </a>
      <a href="/gio-hang" className="header-icon">
        <FaShoppingCart />
      </a>
    </div>
  );
}

export default HeaderIcon;

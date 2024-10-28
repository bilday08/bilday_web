import React from 'react';  
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Hiển thị logo SVG */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Chào mừng bạn đến với ứng dụng ReactJS!
        </p>
        {/* Đoạn mã có thể được thay đổi theo nhu cầu */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tìm hiểu thêm về React
        </a>
      </header>
    </div>
  );
}

export default App;

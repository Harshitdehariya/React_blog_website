import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="left-side">
        <img src="data:image/jpeg;base64,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" alt="Logo" className="logo" />
        <input
          type="search"
          placeholder="Search"
          className="search-input"
        />
      </div>
      <div className="header-right">
      <div className="timer">00:03:20</div>
      <div className="user-profile">
        <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png" alt="User Profile" />
        <div className="user-info">
          <span className="user-name">John Doe</span>
          <span className="user-role">UI/UX Designer</span>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
        <ul className="dropdown-menu">
          <li> <a className="dropdown-item" href="/">Profile</a></li>
          <li> <a className="dropdown-item" href="/">Account Setting</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="/">Logout</a></li>
        </ul>
      </div>
    </div>
    </header>
  );
};

export default Header;
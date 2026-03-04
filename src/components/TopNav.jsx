import React from 'react';

function TopNav() {
  return (
    <nav className="nav-capsule">
      <div className="nav-brand">VIA</div>
      <div className="nav-links">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">Waitlist</a>
        <a href="#" className="nav-link">Blog</a>
      </div>
      <button className="btn-invite">Get invite</button>
    </nav>
  );
}

export default TopNav;
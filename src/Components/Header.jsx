import React from 'react';

const Header = () => {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex link-body-emphasis text-decoration-none">
        <span className="fs-4" style={{ fontFamily: 'Orbitron' }}>
          QuickSafe
        </span>
      </a>
    </header>
  );
};

export default Header;

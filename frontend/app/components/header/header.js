// components/Header.js
"use client";

import React from 'react';
import styles from './Header.module.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);

  // Toggle submenu visibility
  const toggleSubmenu = (event) => {
    const submenu = event.currentTarget.querySelector(`.${styles.submenu}`);
    if (submenu) {
      submenu.classList.toggle(styles.open);
    }
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>SnapShot</div>
      <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
        <a href="#" className={styles.navLink}>Teams</a>
        <a href="#" className={styles.navLink}>Players</a>
        <a href="#" className={styles.navLink}>Matches</a>
        <a href="#" className={styles.navLink}>Coaches</a>
        <a href="#" className={styles.navLink}>Fantasy</a>
        <div className={styles.navLink} onClick={toggleSubmenu}>
          Scouting
          <div className={styles.submenu}>
            <a href="#" className={styles.submenuLink}>Scout 1</a>
            <a href="#" className={styles.submenuLink}>Scout 2</a>
            <a href="#" className={styles.submenuLink}>Scout 3</a>
          </div>
        </div>
        <div className={styles.navLink} onClick={toggleSubmenu}>
          Bets
          <div className={styles.submenu}>
            <a href="#" className={styles.submenuLink}>Bet 1</a>
            <a href="#" className={styles.submenuLink}>Bet 2</a>
            <a href="#" className={styles.submenuLink}>Bet 3</a>
          </div>
        </div>
      </nav>
      <div className={styles.iconsContainer}>
        <button className={styles.searchButton} onClick={() => setShowSearch(!showSearch)}>
          <i className="fas fa-search"></i>
        </button>
        <div className={`${styles.burger} ${open ? styles.open : ''}`} onClick={() => setOpen(!open)}>
          <div className={open ? styles.open : ''}></div>
          <div className={open ? styles.open : ''}></div>
          <div className={open ? styles.open : ''}></div>
        </div>
      </div>
      <div className={`${styles.searchContainer} ${showSearch ? styles.show : ''}`}>
        <input
          type="text"
          placeholder="Search"
          className={`${styles.searchBar} ${showSearch ? styles.show : ''}`}
        />
      </div>
    </header>
  );
};

export default Header;

// components/Header.js
"use client";

import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [open, setOpen] = React.useState(false);

  // Toggle submenu visibility
  const toggleSubmenu = (event) => {
    const submenu = event.currentTarget.querySelector('.submenu');
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
        <a href="#" className={styles.navLink}>Fantasy</a>
        <div className={styles.navLink} onClick={toggleSubmenu}>
          Calculators
          <div className={styles.submenu}>
            <a href="#" className={styles.submenuLink}>Calculator 1</a>
            <a href="#" className={styles.submenuLink}>Calculator 2</a>
            <a href="#" className={styles.submenuLink}>Calculator 3</a>
          </div>
        </div>
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
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search" className={styles.searchBar} />
      </div>
      <div className={`${styles.burger} ${open ? styles.open : ''}`} onClick={() => setOpen(!open)}>
        <div className={open ? styles.open : ''}></div>
        <div className={open ? styles.open : ''}></div>
        <div className={open ? styles.open : ''}></div>
      </div>
    </header>
  );
};

export default Header;

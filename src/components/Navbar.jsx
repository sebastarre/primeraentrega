import React from 'react';

const NavbarComponent = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Mi Tienda</div>
      <ul style={styles.navItems}>
        <li><a href="#categoria1">Categoría 1</a></li>
        <li><a href="#categoria2">Categoría 2</a></li>
        <li><a href="#categoria3">Categoría 3</a></li>
        <li><a href="#categoria4">Categoría 4</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navItems: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default NavbarComponent;

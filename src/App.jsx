import React from 'react';
import NavbarComponent from './components/Navbar';

function App() {
  return (
    <div>
      <NavbarComponent />
      <div style={{ padding: '20px' }}>
        <h1>Bienvenido a Mi Tienda</h1>
        <p>Selecciona una categoría para comenzar.</p>
      </div>
    </div>
  );
}

export default App;

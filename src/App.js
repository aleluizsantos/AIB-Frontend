import React from 'react';
import './App.css';
import logo from './assets/logo.svg';

function App() {
  return (
      <div className="container">
        <img src={logo} alt="Logo"/>
        <div className="content">
          <p>Ofereça <strong>Spot</strong> para Programadores e encontre <strong>taletos</strong> para sua empresa</p>
          <form>
            <label htmlFor="email">E-MAIL *</label>
            <input
              id="email"
              type="email"
              placeholder="Seu e-mail"
            />
            <button className="btn" type="submit">Entrar</button>
          </form>
        </div>
      </div>
    );
}

export default App;

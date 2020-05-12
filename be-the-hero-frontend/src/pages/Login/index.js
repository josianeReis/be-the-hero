import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

function Login() {
  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />
        <form>
          <h1>Efetuar login</h1>
          <input placeholder="Informe o ID..." />
          <button
            type="submit"
            className="button"
          >
            Entrar
          </button>
          <a href="/register">
            <FiLogIn gIn size={16} color="#E02041"/>
            Não tenho cadastro
          </a>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  )
}

export default Login; 
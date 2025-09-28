import React from 'react';
import { Link } from 'react-router-dom';
import "../../style/styles.css";

function Contato() {
  return (
    <div>
      <h1>Página de Contato</h1>
      <h3>Nome: [Seu Nome Completo]</h3>
      <p>Email: seu.email@exemplo.com</p>
      <Link to="/">
        <button>Voltar para Home</button>
      </Link>
    </div>
  );
}

export default Contato;
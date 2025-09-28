import React from 'react';
import { Link } from 'react-router-dom';
import "../../style/styles.css";

function Sobre() {
  return (
    <div>
      <h1>Sobre a Aplicação</h1>
      <p>Esta aplicação foi desenvolvida para aprender sobre rotas em React.</p>
      <ul>
        <li><b>Linguagem:</b> JavaScript</li>
        <li><b>Biblioteca:</b> React</li>
        <li><b>Framework de Rotas:</b> React Router Dom</li>
        <li><b>Versão do React:</b> 18.x</li>
      </ul>
      <Link to="/">
        <button>Voltar para Home</button>
      </Link>
    </div>
  );
}

export default Sobre;
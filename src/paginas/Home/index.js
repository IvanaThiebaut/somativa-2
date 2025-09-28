import React from 'react';
import { Link } from 'react-router-dom'; // Importa o Link
import "../../style/styles.css"; 

function Home() {
  return (
    <div>
      <h1>Página Inicial</h1>
      <p>Bem-vindo à nossa aplicação!</p>
      <Link to="/contato">
        <button>Ir para Contato</button>
      </Link>
      <br /><br />
      <Link to="/sobre">
        <button>Ir para Sobre</button>
      </Link>
      <br /><br />
      <Link to="/cadastro">
        <button>Ir para Cadastro</button>
      </Link>
    </div>
  );
}

export default Home;
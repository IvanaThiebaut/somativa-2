import React from 'react';
import { Link } from 'react-router-dom';
import "../../style/styles.css";

function NotFound() {
  return (
    <div>
      <h1>Oops! 404</h1>
      <p>A página que você está procurando não foi encontrada.</p>
      <Link to="/">
        <button>Voltar para a Página Inicial</button>
      </Link>
    </div>
  );
}

export default NotFound;
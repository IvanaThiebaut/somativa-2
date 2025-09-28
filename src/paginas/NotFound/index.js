import React from 'react';
import { Link } from 'react-router-dom';
import '../../estilos/styles.css';

function NotFound() {
    return (
        <div className="container-geral">
            <h1>404 - Página Não Encontrada</h1>
            <p>A página que você está procurando não existe ou foi movida.</p>
            <Link to="/"><button>Voltar para o Início</button></Link>
        </div>
    );
}

export default NotFound;
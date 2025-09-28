import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../FirebaseConfig';
import '../../estilos/styles.css';

function Sobre() {
    const navigate = useNavigate();

    const isLoggedIn = auth.currentUser;

    return (
        <div className="container-geral">
            <h1>Sobre o Projeto</h1>
            <div className="user-data">
                <p>Olá! Meu nome é Ivana Thiebaut e eu desenvolvi este trabalho para a Atividade Somativa 2 da disciplina de Tencnologias para Desenvolvimento Web.</p>
                <p><strong>Tecnologias Utilizadas:</strong></p>
                <ul>
                    <li>React.js para a construção da interface e da aplicação.</li>
                    <li>React Router Dom para a navegação entre páginas usando rotas.</li>
                    <li>Firebase (Authentication e Firestore) para gerenciamento do usuários e dados.</li>
                </ul>
            </div>
            {isLoggedIn ? (
                <button onClick={() => navigate('/principal')}>Voltar para a Página Principal</button>
            ) : (
                <button onClick={() => navigate('/')}>Voltar para o Login</button>
            )}
        </div>
    );
}

export default Sobre;
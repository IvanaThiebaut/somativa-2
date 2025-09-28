import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../FirebaseConfig';
import '../../estilos/styles.css';

function Principal() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const docRef = doc(db, 'usuarios', user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserData(docSnap.data());
                } else {
                    handleLogout();
                }
            } else {
                navigate('/');
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/');
        } catch (error) {
            console.error("Erro ao fazer logout:", error);
        }
    };

    if (loading) {
        return <div className="container-geral"><h1>Carregando...</h1></div>;
    }

    return (
        <div className="container-geral">
            {userData ? (
                <>
                    <h1>Bem-vindo(a), {userData.nome}!</h1>
                    <div className="user-data">
                        <p><strong>Nome Completo:</strong> {userData.nome} {userData.sobrenome}</p>
                        <p><strong>E-mail:</strong> {userData.email}</p>
                        <p><strong>Data de Nascimento:</strong> {userData.dataNascimento}</p>
                    </div>
                </>
            ) : ( <h1>Não foi possível carregar os dados.</h1> )}
            <nav className="navegacao-principal">
                <Link to="/sobre">Sobre o Projeto</Link>
                <button onClick={handleLogout} className="botao-logout">Sair</button>
            </nav>
        </div>
    );
}

export default Principal;
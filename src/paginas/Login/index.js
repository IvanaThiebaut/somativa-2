import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../FirebaseConfig';
import '../../estilos/styles.css';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setMensagem('');
        try {
            await signInWithEmailAndPassword(auth, email, senha);
            navigate('/principal');
        } catch (error) {
            console.error("Erro no login:", error);
            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
                setMensagem('E-mail ou senha incorretos.');
            } else {
                setMensagem('Ocorreu um erro. Tente mais uma vez.');
            }
        }
    };

    return (
        <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                <button type="submit">Acessar</button>
            </form>
            {mensagem && <p className="mensagem-erro">{mensagem}</p>}
            <p className="link-navegacao">
                Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
            </p>
             <p className="link-navegacao">
                <Link to="/sobre">Sobre o Projeto</Link>
            </p>
        </div>
    );
}

export default Login;
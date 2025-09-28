import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../FirebaseConfig';
import '../../estilos/styles.css';

function Cadastro() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [mensagem, setMensagem] = useState('');
    const navigate = useNavigate();

    const handleCadastro = async (e) => {
        e.preventDefault();
        setMensagem('');
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
            const user = userCredential.user;
            await setDoc(doc(db, 'usuarios', user.uid), {
                nome: nome,
                sobrenome: sobrenome,
                dataNascimento: dataNascimento,
                email: email
            });
            alert('O cadastro foi realizado com sucesso!');
            navigate('/');
        } catch (error) {
            console.error("Erro no cadastro:", error);
            if (error.code === 'auth/email-already-in-use') {
                setMensagem('Este e-mail já está em uso em um outro cadastro.');
            } else if (error.code === 'auth/weak-password') {
                setMensagem('A senha deve ter pelo menos 6 caracteres.');
            } else {
                setMensagem('Ocorreu um erro ao realizar o cadastro.');
            }
        }
    };

    return (
        <div className="form-container">
            <h1>Cadastro de Usuário</h1>
            <form onSubmit={handleCadastro}>
                <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Senha (mínimo 6 caracteres)" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
                <input type="text" placeholder="Sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} required />
                <input type="date" placeholder="Data de Nascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} required />
                <button type="submit">Cadastrar</button>
            </form>
            {mensagem && <p className="mensagem-erro">{mensagem}</p>}
            <p className="link-navegacao">
                Já tem uma conta? <Link to="/">Faça login</Link>
            </p>
        </div>
    );
}

export default Cadastro;
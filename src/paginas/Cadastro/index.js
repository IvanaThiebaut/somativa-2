import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "../../style/styles.css";
import firebase from '../../Firebase';

class Cadastro extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: '',
            email: ''
        };

        this.gravar = this.gravar.bind(this);
    }

    gravar(){
        firebase.firestore().collection('usuario').add({
            nome: this.state.nome,
            email: this.state.email
    });
}

    render(){
      return(
        <div className="form-container">
            <h1>Página de Cadastro</h1>
            <input type="text" placeholder="Nome Completo" onChange={(e) => this.setState({nome: e.target.value})} />
            <br/>
            <input type="text" placeholder="Seu melhor e-mail" onChange={(e) => this.setState({email: e.target.value})} />
            <br/>
            <button onClick={this.gravar}>Gravar</button>
            <Link to="/"><button>Página Inicial</button></Link>
        </div>
      )
    }
}

export default Cadastro;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Login } from './components/Login/Login';
import { Usuarios } from './components/Usuarios/Usuarios';

class App extends Component {
  state = {
    name: '',
    email: '',
    usuarios: [],
    mudarTela: false
  }

  componentDidMount = () => {
    this.receberUsuarios();
  }

  onChangeNome = (e) => {
    const name = e.target.value;

    this.setState({
      name: name
    })
  }
  
  onChangeEmail = (e) => {
    const email = e.target.value;

    this.setState({
      email: email
    })
  }
  
  onClickMudarTela = () => {
    this.setState({
      mudarTela: !this.state.mudarTela
    })
  }
  
  onClickExcluir = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
      {
        headers: {
          Authorization: "edmilson-ferreira-dumont"
        }
      }
    )
    .then(res => {
      alert("Usuario excluído");
      this.receberUsuarios();
    })
    .catch((err) => {
      alert(err.message);
    })
  }

  receberUsuarios = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: {
          Authorization: "edmilson-ferreira-dumont"
        }
      }
    )
    .then(res => {
      this.setState({ usuarios: res.data });
    })
    .catch((err) => {
      alert(err.message);
    })
  }

  onSubmitEnviar = (e) => {
    e.preventDefault();

    const body = {
      name: this.state.name,
      email: this.state.email
    }
    
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
    body,
    {
      headers: {
        Authorization: "edmilson-ferreira-dumont"
      }
    })
    .then((res) => {
      alert("Você acabou de criar um usuário")
      this.receberUsuarios();
    })
    .catch((error) => {
      alert(error.message);
    })
  }

  render(){
    return (
      <div className="App">
        {console.log(this.state.usuarios)}
        <button onClick={this.onClickMudarTela}>
          {this.state.mudarTela ? "Ir para página de lista" : "Ir para página de registro"}
        </button>
        { this.state.mudarTela ? <Usuarios usuarios={this.state.usuarios} onClickExcluir={this.onClickExcluir} />
        :
        <Login onSubmitEnviar={this.onSubmitEnviar} nomeValor={this.state.name} emailValor={this.state.email} onChangeNome={this.onChangeNome} onChangeEmail={this.onChangeEmail} />
        }
      </div>
    );
  }
}

export default App;
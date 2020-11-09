import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Cadastro } from './components/Cadastro/Cadastro';
import { Usuarios } from './components/Usuarios/Usuarios';

class App extends Component {
  state = {
    name: '',
    email: '',
    nameEdit: '',
    emailEdit: '',
    nomeBuscar: '',
    emailBuscar: '',
    usuarios: [],
    usuarioDetalhes: null,
    pagina: 0,
    editar: true
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
  onChangeNomeBuscar = (e) => {
    const nomeBuscar = e.target.value;

    this.setState({
      nomeBuscar: nomeBuscar
    })
  }
  
  
  onChangeNomeEdit = (e) => {
    const nomeEdit = e.target.value;

    this.setState({
      nameEdit: nomeEdit
    })
  }

  onChangeEmail = (e) => {
    const email = e.target.value;

    this.setState({
      email: email
    })
  }
  
  onChangeEmailEdit = (e) => {
    const emailEdit = e.target.value;

    this.setState({
      emailEdit: emailEdit
    })
  }
  
  onChangeEmailBuscar = (e) => {
    const emailBuscar = e.target.value;

    this.setState({
      emailBuscar: emailBuscar
    })
  }
  
  onClickMudarTela = () => {
    if (this.state.pagina < 3) { 
      this.setState({
        pagina: this.state.pagina + 1
      })
    }
    console.log(this.state.pagina)
  }
  
  onClickVoltar = () => {
    if (this.state.pagina > 0) { 
      this.setState({
        pagina: this.state.pagina - 1
      })
    }
    console.log(this.state.pagina)
  }

  onClickUsuario = async (id) => {
    try {
      const res = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "edmilson-ferreira-dumont"
          }
        }
      )
  
      this.setState({
        usuarioDetalhes: res.data
      });
  } catch(err) {
    alert(err.message);
  }
  this.onClickMudarTela();
  }
  
  onClickExcluir = async (id) => {
    const confirmar = window.confirm("Tem certeza de que deseja deletar?");

    if (confirmar) {
      try {
        await axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "edmilson-ferreira-dumont"
          }
        })

        this.receberUsuarios();
      } catch(err) {
        alert(err.message);
      }
    }
  }

  receberUsuarios = async () => {
    try {
      const res = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
        headers: {
          Authorization: "edmilson-ferreira-dumont"
        }
      })
      this.setState({ usuarios: res.data });
      
    } catch(err) {
      alert(err.message);
    }
  }

  onSubmitEnviar = async (e) => {
      e.preventDefault();
    
    const body = {
      name: this.state.name,
      email: this.state.email
    }
    
    try {
    await axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
    body,
    {
      headers: {
        Authorization: "edmilson-ferreira-dumont"
      }
    })
      alert("Você acabou de criar um usuário")
      this.receberUsuarios();
    } catch(err){
      alert(err.message);
    }
  }

  onClickEditar = async (id) => {
    this.onClickMudarTela();
  }
    
  onClickSalvar = async (id) => {
    const body = {
      name: this.state.nameEdit,
      email: this.state.emailEdit
    }
    
    try {
    await axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
    body,
    {
      headers: {
        Authorization: "edmilson-ferreira-dumont"
      }
    })
      alert("Você acabou de alterar um usuário")
      console.log(body)
      this.receberUsuarios();
    } catch(err){
      alert(err.message);
    }
  }

  onClickBuscar = async () => {
    const nome = this.state.nomeBuscar;
    const email = this.state.emailBuscar;
    
    try {
    const res = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${nome}&email=${email}`,
    {
      headers: {
        Authorization: "edmilson-ferreira-dumont"
      }
    })
    this.setState({ usuarios: res.data });
    console.log(this.state.nomeBuscar);
    console.log(this.state.emailBuscar);
    console.log(res.data);
    console.log(this.state.usuarios);
      alert("Você acabou de alterar um usuário")
    } catch(err){
      alert(err.message);
    }
  }

  render(){
    return (
      <div className="App">
        { !this.state.pagina ?
          <button onClick={this.onClickMudarTela}>
            <span className="material-icons">people</span>Lista de usuários</button>
          :
          <button onClick={this.onClickVoltar}>
            <span class="material-icons">keyboard_backspace</span>Voltar
            </button>
        }

        { this.state.pagina === 0 ?
          <Cadastro onSubmitEnviar={this.onSubmitEnviar} nomeValor={this.state.name} emailValor={this.state.email} onChangeNome={this.onChangeNome} onChangeEmail={this.onChangeEmail} />
          : this.state.pagina >= 1 ?
          <Usuarios onClickBuscar={this.onClickBuscar} onChangeNomeEdit={this.onChangeNomeEdit}  onChangeNomeBuscar={this.onChangeNomeBuscar}  onChangeEmailBuscar={this.onChangeEmailBuscar} onChangeEmailEdit={this.onChangeEmailEdit} nomeEdit={this.state.nameEdit} emailEdit={this.state.emailEdit} usuarioDetalhes={this.state.usuarioDetalhes} editar={this.state.editar} pagina={this.state.pagina} usuarios={this.state.usuarios} exibirDetalhes={this.state.exibirDetalhes} onClickSalvar={this.onClickSalvar} onClickEditar={this.onClickEditar} onClickExcluir={this.onClickExcluir} onClickUsuario={this.onClickUsuario} />
          :
          null
        }
      </div>
    );
  }
}

export default App;
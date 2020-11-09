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
    nameEdit: '',
    emailEdit: '',
    usuarios: [],
    usuarioDetalhes: null,
    pagina: 0,
    editar: true
  }

  componentDidMount = () => {
    this.getCapsules();
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
  
  onChangeNomeEdit = (e) => {
    const nomeEdit = e.target.value;

    this.setState({
      nameEdit: nomeEdit
    })
  }
  
  onChangeEmailEdit = (e) => {
    const emailEdit = e.target.value;

    this.setState({
      emailEdit: emailEdit
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

  onClickCapsule = async (serial) => {
    try {
      const res = await axios.get(`https://api.spacexdata.com/v3/capsules/${serial}`,
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

  getCapsules = async () => {
    try {
      const res = await axios.get("https://api.spacexdata.com/v3/capsules", {
        headers: {
          Authorization: "edmilson-ferreira-dumont"
        }
      })
      
      this.setState({ capsules: res.data });
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

  render(){
    return (
      <div className="App">
        <h2>Capsulas</h2>
        {}
      </div>
    );
  }
}

export default App;
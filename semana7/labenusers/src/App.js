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

  onClickUsuario = (id) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
      {
        headers: {
          Authorization: "edmilson-ferreira-dumont"
        }
      }
    )
    .then(res => {
      console.log(res.data)
      this.setState({
        usuarioDetalhes: res.data
      });
      console.log(this.state.usuarioDetalhes)
    })
    .catch((err) => {
      alert(err.message);
    })
    .then(res => {
    this.onClickMudarTela();
    })
  }
  
  onClickExcluir = (id) => {
    const confirmar = window.confirm("Tem certeza de que deseja deletar?");

    if (confirmar) {
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "edmilson-ferreira-dumont"
          }
        }
      )
      .then(res => {
        this.receberUsuarios();
      })
      .catch((err) => {
        alert(err.message);
      })
    }
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

  onClickEditar = (id) => {
    this.onClickMudarTela();
    this.setState({
      editar: !this.state.editar
    })
    // const body = {
    //   name: this.state.name,
    //   email: this.state.email
    // }
    
    // axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/${id}`,
    // body,
    // {
    //   headers: {
    //     Authorization: "edmilson-ferreira-dumont"
    //   }
    // })
    // .then((res) => {
    //   alert("Você acabou de alterar o usuário")
    //   this.receberUsuarios();
    // })
    // .catch((error) => {
    //   alert(error.message);
    // })
  }

  render(){
    return (
      <div className="App">
        {console.log(this.state.usuarios)}
        {!this.state.pagina ?
          <button onClick={this.onClickMudarTela}>
          Lista de usuários
          </button>
          :
          <button onClick={this.onClickVoltar}>
            Voltar
          </button>
        }

        { this.state.pagina === 0 ?
          <Login onSubmitEnviar={this.onSubmitEnviar} nomeValor={this.state.name} emailValor={this.state.email} onChangeNome={this.onChangeNome} onChangeEmail={this.onChangeEmail} />
          : this.state.pagina >= 1 ?
          <Usuarios usuarioDetalhes={this.state.usuarioDetalhes} editar={this.state.editar} pagina={this.state.pagina} usuarios={this.state.usuarios} exibirDetalhes={this.state.exibirDetalhes} onClickEditar={this.onClickEditar} onClickExcluir={this.onClickExcluir} onClickUsuario={this.onClickUsuario} />
          :
          null
        }
      </div>
    );
  }
}

export default App;
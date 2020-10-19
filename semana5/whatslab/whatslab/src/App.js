import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { ExibicaoMensagem } from './components/ExibicaoMensagem/ExibicaoMensagem';
import { EnvioMensagem } from './components/EnvioMensagem/EnvioMensagem';

class App extends Component {
  state = {
    usuario: '',
    mensagem: '',
    mensagens: []
  }

  onChangeUsuario = (usuario) => {
    this.setState({
      usuario: usuario.target.value
    })

    console.log(this.state.usuario)
  }
  
  onChangeMensagem = (mensagem) => {
    this.setState({
      mensagem: mensagem.target.value
    })

    console.log(this.state.usuario)
  }
  
  onDoubleClickMensagem = (e) => {
    var array = [...this.state.mensagens]; // make a separate copy of the array
    console.log(array);
    var index = array.indexOf(e.target.key)
    console.log(e.target.key);
    // var index = array.indexOf(e.target.value)
    // console.log(e.target.value);
    console.log(index);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({mensagens: array});
    }
    console.log(array.splice(index, 1))
  }
  
  onSubmitEnviar = (e) => {
    e.preventDefault();

    this.setState({
      usuario: '',
      mensagem: '',
      mensagens: [...this.state.mensagens, {usuario: this.state.usuario,
        mensagem: this.state.mensagem}]
    })
    console.log(this.state.mensagens);

    this.limpaCampos(e);
  }

  limpaCampos = (e) => {
    e.target.children.value = '';
    console.log(e.target.children.value);
  }
  
  render(){
    return (
      <div className="App">
        <ExibicaoMensagem mensagens={this.state.mensagens} onDoubleClickMensagem={this.onDoubleClickMensagem} />
        <EnvioMensagem usuario={this.state.usuario} mensagem={this.state.mensagem} onChangeUsuario={this.onChangeUsuario} onChangeMensagem={this.onChangeMensagem} onSubmitEnviar={this.onSubmitEnviar} />
      </div>
    );
  }
}

export default App;
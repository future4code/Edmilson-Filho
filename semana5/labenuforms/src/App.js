import React from 'react';
import './App.css';
import { EntradaForm } from './components/EntradaForm/EntradaForm';
import { SelectForm } from './components/SelectForm/SelectForm';

class App extends React.Component {
  state = {
    pagina: 0,
    dados: [
      {nome: ''},
      {idade: ''},
      {email: ''},
      {escolaridade: ''},
      {curso: ''},
      {unidade: ''},
      {graduacao: ''},
      {complementar: ''}
    ]
  }

  passarPagina = () => {
    this.setState({
      pagina: this.state.pagina + 1
    })
    console.log(this.state.pagina)
  }

  render(){
    let grauEscolaridade = [
      "Ensino médio incompleto",
      "Ensino médio completo",
      "Ensino superior incompleto",
      "Ensino superior completo"
    ]

    let complementar = [
      "Curso técnico",
      "Curso de inglês"
    ]

    let conteudo;

    switch(this.state.pagina){
      case 0:
      conteudo =
        <div>
          <h3>Etapa 1 - Dados gerais</h3>
          <EntradaForm tipo="number" titulo="1. Qual sua idade?" id="idade" />
          <EntradaForm tipo="text" titulo="2. Qual seu nome?" id="nome" />
          <EntradaForm tipo="email" titulo="3. Qual seu email?" id="email" />
          <SelectForm opcoes={grauEscolaridade} titulo="4. Qual a sua escolaridade?" />
          <button onClick={this.passarPagina}>Próxima etapa</button>
        </div>
      break;
      case 1:
      conteudo =
      <div>
      <h3>Etapa 2 - Informações do ensino superior</h3>
      <EntradaForm tipo="text" titulo="5. Qual curso?" id="curso" />
      <EntradaForm tipo="text" titulo="6. Qual a unidade de ensino?" id="unidade" />
      <button onClick={this.passarPagina}>Próxima etapa</button>
      </div>
      break;
      case 2:
      conteudo =
      <div>
      <h3>Etapa 3 - Informações gerais de ensino</h3>
      <EntradaForm tipo="text" titulo="7. Por que você não terminou um curso de graduação?" id="nome" />
      <SelectForm titulo="8. Você fez algum curso complementar?" opcoes={complementar} />
      <button onClick={this.passarPagina}>Próxima etapa</button>
      </div>
      break;
      default:
      conteudo =
      <div>
        <h3>O formulário acabou</h3>
        <p>Muito obrigado por participar! Entraremos em contato!</p>
      </div>
    }
    
    return(
      <div className="app-container">
        {conteudo}
      </div>
    )
  }
}

export default App;

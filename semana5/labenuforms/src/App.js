import React from 'react';
import './App.css';
import { PerguntaAberta } from './components/PerguntaAberta/PerguntaAberta';
import { PerguntaFechada } from './components/PerguntaFechada/PerguntaFechada';

class App extends React.Component {
  state = {
    pagina: 0,
    submetido: false,
    dados: {
      nome: '',
      idade: '',
      email: '',
      escolaridade: 'Ensino Médio Incompleto',
      curso: '',
      unidade: '',
      graduacao: '',
      complementar: ''
    }
  }

  passarPagina = (e) => {
    e.preventDefault();
    // e.target.children[0].lastChild.value = '';
    // e.target.children[1].lastChild.value = '';
    let escolaridade = this.state.dados.escolaridade;

    if (this.state.pagina === 0){
      if (escolaridade === "Ensino Superior Incompleto" || escolaridade === "Ensino Superior Completo") {
        this.setState({
          pagina: this.state.pagina + 1
        })
      }

      if (escolaridade === "Ensino Médio Incompleto" || escolaridade === "Ensino Médio Completo") {
        this.setState({
          pagina: this.state.pagina + 2
        })
        console.log(this.state.pagina)
        console.log(escolaridade)
      }
    } else if (this.state.pagina === 1){
      this.setState({
        pagina: this.state.pagina + 2
      })
    }  else {
      this.setState({
        pagina: this.state.pagina + 1
      })

      // for (let valor of this.state) {
      //   if (valor === '') {
      //     console.log("diferente");
      //   }
      // }
    }
  }

  onChangeValor = (e) => {
    let valor = this.state.filter(function(valor){
      return valor === e.target.id
    } )

    console.log(e.target.id)
    
    this.setState({
      pagina: {...this.state.pagina},
      submetido: {...this.state.submetido},
      dados: {
        ...this.state.dados
      }
    })
  }

  validarEntrada = (e) => {
    // let valorValido = this.state.filter(function(valor){
    //   return valor === e.target.id
    // } )
    // console.log(valorValido);

      // for (let valor of this.state) {
      //   if (valor === '') {
      //     console.log("diferente");
      //   }
      // }

    // if (valorValido === '') {
    //   console.log(valorValido)
    // }

    if (e.target.value === ''){
      console.log('dasdasd');
      return false;
    }
  }

  render(){
    let conteudo;

    switch(this.state.pagina){
      case 0:
      conteudo =
        <div>
          <h3>Etapa 1 - Dados gerais</h3>
          <PerguntaAberta valor={this.state.dados.idade} onChangeValor={this.onChangeValor} tipo="number" pergunta="1. Qual sua idade?" id="idade" validarEntrada={this.validarEntrada} />
          <PerguntaAberta valor={this.state.dados.nome} onChangeValor={this.onChangeValor} tipo="text" pergunta="2. Qual seu nome?" id="nome" validarEntrada={this.validarEntrada} />
          <PerguntaAberta valor={this.state.dados.email} onChangeValor={this.onChangeValor} tipo="email" pergunta="3. Qual seu email?" id="email" validacao="Preencha seu nome" validarEntrada={this.validarEntrada} />
          <PerguntaFechada opcoes={[
          "Ensino Médio Incompleto",
          "Ensino Médio Completo",
          "Ensino Superior Incompleto",
          "Ensino Superior Completo"
        ]} escolaridade={this.state.escolaridade} onChangeValor={this.onChangeValor} pergunta="4. Qual a sua escolaridade?" />
        </div>
      break;
      case 1:
      conteudo =
      <div>
      <h3>Etapa 2 - Informações do ensino superior</h3>
      <PerguntaAberta valor={this.state.dados.curso} tipo="text" pergunta="5. Qual curso?" id="curso" validarEntrada={this.validarEntrada} />
      <PerguntaAberta valor={this.state.dados.unidade} tipo="text" pergunta="6. Qual a unidade de ensino?" id="unidade" validarEntrada={this.validarEntrada} />
      </div>
      break;
      case 2:
      conteudo =
      <div>
      <h3>Etapa 3 - Informações gerais de ensino</h3>
      <PerguntaAberta valor={this.state.dados.graduacao} onChangeValor={this.onChangeValor} tipo="text" pergunta="7. Por que você não terminou um curso de graduação?" id="nome" validarEntrada={this.validarEntrada} />
      <PerguntaFechada pergunta="8. Você fez algum curso complementar?" opcoes={[
        "Curso técnico",
        "Curso de inglês"
      ]} valor={this.state.dados.complementar} onChangeValor={this.onChangeValor} />
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
        <form onSubmit={this.passarPagina}>
        {conteudo}
      {this.state.pagina < 3 ? <button type="submit">Próxima etapa</button> : null}
        </form>
      </div>
    )
  }
}

export default App;

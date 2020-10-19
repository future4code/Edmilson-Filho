import React from 'react';
import './App.css';
import { EntradaForm } from './components/EntradaForm/EntradaForm';

class App extends React.Component {
  state = {
  }

  render(){
    return(
      <div>
        <EntradaForm tipo="text" label="Qual seu nome?" id="nome" />
      </div>
    )
  }
}

export default App;

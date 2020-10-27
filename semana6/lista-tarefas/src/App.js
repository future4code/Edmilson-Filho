import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(),
          texto: 'Estudar des. web',
          completa: false
        },
        {
          id: Date.now(),
          texto: 'Estudar inglês',
          completa: false
        }
      ],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    let tarefas = this.state.tarefas.map(tarefa => {
      return tarefa
    })

    if (tarefas){
      console.log(JSON.stringify(tarefas))
      // console.log(tarefasLocal)
      tarefas = JSON.stringify(tarefas);
      localStorage.setItem('tarefas', tarefas);
    }  
  };
  
  componentDidMount() {
    let tarefasLocal = localStorage.getItem('tarefas');

    if (tarefasLocal) {
      tarefasLocal = JSON.parse(tarefasLocal);
      console.log(tarefasLocal)

      this.setState({
        tarefas: tarefasLocal
      })
    }
  };

  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  criaTarefa = () => {
    const tarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const estado = [...this.state.tarefas];
    estado.push(tarefa);

    console.log(estado)
    this.setState({
      tarefas: estado
    })
    console.log(this.state.tarefas)
  }

  selectTarefa = (id) => {
    const estado = [...this.state.tarefas];

     const tarefa = estado.map(tarefa => {
        if (tarefa.id === id){
          tarefa.completa = !tarefa.completa
        } else {
          return true
        }
    })

    this.setState({
      tarefas: estado
    })
  }

  onChangeFilter = (event) => {
    this.setState({
      filtro: event.target.value
    })
  }

  render() {
    const listaFiltrada = this.state.tarefas && this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    console.log(listaFiltrada)

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada && listaFiltrada.map((tarefa, key) => {
            return (
              <Tarefa
                completa={tarefa.completa}
                key={key}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App

import React, { useEffect } from "react";
import styled from "styled-components";
// import "./styles.css";
import BallotIcon from '@material-ui/icons/Ballot';
import EditIcon from '@material-ui/icons/Edit';
// import DoneIcon from '@material-ui/icons/Done';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { taskAdd, taskEdit } from "./services/tasks";
import { BASE_URL } from './constants/apiConstants';
import { useTarefas } from './hooks/useTarefas';
import axios from 'axios';

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

const App = () => {
  const { tarefas, onChange } = useTarefas({ texto: "", id: "", completa: false });

  const onChangeInput = event => {
    const { value, name } = event.target;
    
    onChange(value, name);
  };

  const criaTarefa = () => {
    taskAdd(BASE_URL, tarefas);
  };
    
//   criaTarefa = () => {
//     setState({
//       tarefas: [
//         ...tarefas,
//         { texto: tarefas.value, id: Date.now(), completa: false }
//       ],
//       inputValue: ""
//     });
//   };

  const editarTarefa = id => {
    const body = {
      completa: true
    }
    
    taskEdit(BASE_URL, id, body)
  };

    return (
      <div className="App">
        {console.log(tarefas)}
        <BallotIcon /><h1>Lista de tarefas</h1>
        <InputsContainer>
          <input
            value={tarefas.value}
            onChange={onChangeInput}
            placeholder={"Nova tarefa"}
          />
          <button onClick={criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <TarefaList>
          {tarefas.map((tarefa, index) => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => editarTarefa(tarefa.id)}
                key={index}
                data-testid={"item-tarefa"}
              >
                <CheckCircleIcon />
                {tarefa.texto}
              </Tarefa>
            );
          })}
        </TarefaList>
      </div>
    );
};

export default App;

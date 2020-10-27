import React from 'react';

export function PerguntaFechada(props){
    return(
        <div>
            <p>{props.pergunta}</p>
            <select value={props.valor} onChange={props.onChangeValor}>
                {props.opcoes.map((opcao, key) => (
                    <option key={key}>{opcao}</option>
                ))}
            </select>
        </div>
    )
}
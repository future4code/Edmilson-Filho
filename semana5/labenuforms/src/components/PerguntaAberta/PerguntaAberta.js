import React from 'react';

export function PerguntaAberta(props){
    let tipo;
    
    switch(props.tipo) {
        case "number":
            tipo = <input value={props.valor} onChange={props.onChangeValor} type="number" id={props.id} />;
            break;
        case "email":
            tipo = <input value={props.valor} onChange={props.onChangeValor} type="email" id={props.id} />;
            break;
        default:
            tipo = <input value={props.valor} onChange={props.onChangeValor} type="text" id={props.id} />
    } 
    
    return(
        <div>
            <p>{props.pergunta}</p>
            {tipo}
            {!props.validarEntrada ? <p>Insira algo</p> : null}
        </div>
    )
}
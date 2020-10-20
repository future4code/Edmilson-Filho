import React from 'react';

export function EntradaForm(props){
    let tipo;
    
    switch(props.tipo) {
        case "number":
            tipo = <input type="number" id={props.id} />;
            break;
        case "email":
            tipo = <input type="email" id={props.id} />;
            break;
        default:
            tipo = <input type="text" id={props.id} />
    } 
    
    return(
        <div>
            <p>{props.titulo}</p>
            <label for={props.id}>
                {props.label}
            </label>
            {tipo}
        </div>
    )
}
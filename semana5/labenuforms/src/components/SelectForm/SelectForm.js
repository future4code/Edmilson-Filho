import React from 'react';

export function SelectForm(props){
    // let tipo;
    
    // switch(props.tipo) {
    //     case "number":
    //         tipo = <input type="number" id={props.id} />;
    //         break;
    //     case "email":
    //         tipo = <input type="email" id={props.id} />;
    //         break;
    //     default:
    //         tipo = <input type="text" id={props.id} />
    // } 
    
    return(
        <div>
            <p>{props.titulo}</p>
            <select>
                {props.opcoes.map((opcao) => (
                    <option>{opcao}</option>
                ))}
            </select>
        </div>
    )
}
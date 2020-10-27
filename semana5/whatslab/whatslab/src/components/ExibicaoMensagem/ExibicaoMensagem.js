import React from 'react';

export function ExibicaoMensagem(props){
    console.log(props.mensagens);
    const mensagens = props.mensagens.map((mensagem, i) =>
        <li onClick={props.onDoubleClickMensagem} key={i}>{mensagem.usuario}</li>
    );

    return(
        <div>
            <ul>
                {mensagens}
            </ul>
        </div>   
    )
}
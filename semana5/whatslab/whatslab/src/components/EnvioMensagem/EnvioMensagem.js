import React from 'react';

export function EnvioMensagem(props){
    return(
        <div>
            <form onSubmit={props.onSubmitEnviar}>
                <input value={props.usuario} onChange={props.onChangeUsuario} type="text" id="usuario" placeholder="Usuário" />
                <input value={props.mensagem} onChange={props.onChangeMensagem} type="text" id="mensagem" placeholder="Mensagem" />
                <button type="submit">
                    Enviar
                </button>
            </form>
        </div>   
    )
}
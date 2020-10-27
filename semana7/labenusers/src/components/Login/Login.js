import React from 'react';

export function Login(props) {
    return (
        <div>
            <form onSubmit={props.onSubmitEnviar}>
                <h4>Cadastro do usuário</h4>
                
                <label htmlFor="nome">Nome:</label>
                <input value={props.nomeValor} onChange={props.onChangeNome} type="text" id="name" />

                <label htmlFor="email">E-mail:</label>
                <input value={props.emailValor} onChange={props.onChangeEmail} type="email" id="email" />

                <button>Cadastrar</button>
            </form>
        </div>
    )
}
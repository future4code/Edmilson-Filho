import React from 'react';

export function Cadastro(props) {
    return (
        <div>
            <form onSubmit={props.onSubmitEnviar}>
                <h4>Cadastro do usuário</h4>
                
                <div className="inputDiv">
                    <label htmlFor="nome">Nome: </label>
                    <input value={props.nomeValor} onChange={props.onChangeNome} type="text" id="name" />
                </div>

                <div className="inputDiv">
                    <label htmlFor="email">E-mail: </label>
                    <input value={props.emailValor} onChange={props.onChangeEmail} type="email" id="email" />
                </div>

                <button><span className="material-icons">person_add_alt_1</span>Cadastrar</button>
            </form>
        </div>
    )
}
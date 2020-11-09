import React from 'react';

export function Usuario(props) {

    return (
        <div>
            <ul>
            {console.log(props.pagina)}

            {props.pagina === 2 ? 
            <div>
                            <h4>Informações de usuário</h4>

            <span onClick={() => props.onClickEditar(props.usuarioDetalhes.id)}>Editar</span>
            <p>{props.usuarioDetalhes.name}</p>
            <p>{props.usuarioDetalhes.email}</p>
            </div>:
            null
            }
            {props.pagina === 3 ? 
                <div>
                    {console.log(props.usuarioDetalhes)}
            <h4>Detalhes de usuário</h4>
                    
                    <label htmlFor="nome">Nome:</label>
                    <input value={props.nomeValor} onChange={props.onChangeNome} type="text" id="name" />

                    <label htmlFor="email">E-mail:</label>
                    <input value={props.emailValor} onChange={props.onChangeEmail} type="email" id="email" />

                    <span onClick={props.onClickExcluir}>X</span>

                    <button>Salvar</button>
                    </div>
                : null
            }

            </ul>
        </div>
    )
}
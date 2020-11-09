import React from 'react';

export function Usuario(props) {

    return (
        <div>
            <ul>
            { props.pagina === 2 ? 
                <div>
                    <h4>Informações de usuário</h4>
                    <span onClick={() => props.onClickEditar(props.usuarioDetalhes.id)}>Editar</span>
                    <p>{props.usuarioDetalhes.name}</p>
                    <p>{props.usuarioDetalhes.email}</p>
                </div>:
                null
            }
            { props.pagina === 3 ? 
                <div>
                    <h4>Detalhes de usuário</h4>
                    
                    <label htmlFor="nomeEdit">Nome:</label>
                    <input value={props.nomeEdit} onChange={props.onChangeNomeEdit} type="text" id="nameEdit" />

                    <label htmlFor="emailEdit">E-mail:</label>
                    <input value={props.emailEdit} onChange={props.onChangeEmailEdit} type="email" id="emailEdit" />

                    <span onClick={props.onClickExcluir}>X</span>

                    <button onClick={props.onClickSalvar}>Salvar</button>
                </div>:
                null
            }

            </ul>
        </div>
    )
}
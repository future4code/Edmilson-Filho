import React from 'react';

export function Usuario(props) {

    return (
        <div>
            <ul>
                <table>
            { props.pagina === 2 ? 
                <div>
                    <h4>Informações de usuário</h4>
                    <p>Nome: {props.usuarioDetalhes.name}</p>
                    <p>Email: {props.usuarioDetalhes.email}</p>
                    <button onClick={() => props.onClickEditar(props.usuarioDetalhes.id)}><span className="material-icons">settings</span>Alterar</button>
                    <button onClick={() => props.onClickExcluir(props.usuarioDetalhes.id)}><span className="material-icons">person_remove</span>Excluir</button>
                </div>:
                null
            }
            </table>
            { props.pagina === 3 ? 
                <div>
                    <h4>Detalhes de usuário</h4>
                    <div className="inputDiv">
                        <label htmlFor="nomeEdit">Nome: </label>
                        <input value={props.nomeEdit} onChange={props.onChangeNomeEdit} type="text" id="nomeEdit" />
                    </div>

                    <div className="inputDiv">
                        <label htmlFor="emailEdit">E-mail: </label>
                        <input value={props.emailEdit} onChange={props.onChangeEmailEdit} type="email" id="emailEdit" />
                    </div>

                    <button onClick={props.onClickSalvar}>Salvar</button>
                </div>:
                null
            }

            </ul>
        </div>
    )
}
import React from 'react';
import { Usuario } from '../Usuario/Usuario';

export function Usuarios(props) {
    return (
        <div>
            { props.pagina === 1 ?
                <div>
                    <h4>Buscar um usuário</h4>

                    <div className="inputDiv">
                        <label htmlFor="nomeBuscar">Nome: </label>
                        <input value={props.nomeBuscar} onChange={props.onChangeNomeBuscar} type="text" id="nameBuscar" />
                    </div>

                    <div className="inputDiv">
                        <label htmlFor="emailBuscar">Email: </label>
                        <input value={props.emailBuscar} onChange={props.onChangeEmailBuscar} type="text" id="emailBuscar" />
                    </div>

                    <button onClick={props.onClickBuscar}><span class="material-icons">person_search</span>Buscar</button>
                    <h4>Usuarios Cadastrados:</h4>
                </div>:
                null
            }

            <table>
            <ul>
            { props.usuarios.map((usuario, key) =>
            {
                return (
                    <div className="user">
                    { props.pagina === 1 ?
                        <tr>
                            <div className="listUser">
                            <td>
                                <p exibirDetalhes={props.exibirDetalhes} onClick={() => props.onClickUsuario(usuario.id)}>Nome: {usuario.name}</p>
                                <p exibirDetalhes={props.exibirDetalhes} onClick={() => props.onClickUsuario(usuario.id)}>E-mail: {usuario.email}</p>
                            </td>
                            <td>
                                <button onClick={() => props.onClickExcluir(props.usuarioDetalhes.id)}><span className="material-icons">person_remove</span>Excluir</button>
                            </td>
                                </div>
                        </tr>
                            :
                            null
                            }
                        </div>
                        )
                    })
            }
            
            { props.pagina >= 2 ?
                <div>
                    <Usuario onChangeNomeEdit={props.onChangeNomeEdit} onChangeEmailEdit={props.onChangeEmailEdit} nomeEdit={props.nomeEditValor} emailEdit={props.emailEditValor} onClickSalvar={() => props.onClickSalvar(props.usuarioDetalhes.id)} editar={props.editar} pagina={props.pagina} usuarioDetalhes={props.usuarioDetalhes} onClickEditar={props.onClickEditar} exibirDetalhes={props.exibirDetalhes} onClick={() => props.onClickUsuario(props.usuarioDetalhes.id)} />
                </div>:
                null 
            }
            </ul>
            </table>

        </div>
    )
}
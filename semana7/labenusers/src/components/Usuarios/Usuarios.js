import React from 'react';
import { Usuario } from '../Usuario/Usuario';

export function Usuarios(props) {
    return (
        <div>
            {props.pagina === 1 ?
                <div>
                    <h4>Buscar um usuário</h4>
                    
                    <label htmlFor="nomeBuscar">
                        Nome:
                        <input value={props.nomeBuscar} onChange={props.onChangeNomeBuscar} type="text" id="nameBuscar" />
                    </label>
                    <label htmlFor="emailBuscar">
                        Email:
                        <input value={props.emailBuscar} onChange={props.onChangeEmailBuscar} type="text" id="emailBuscar" />
                    </label>

                    <button onClick={props.onClickBuscar}>Buscar</button>
                </div>:
                null
            }
            <ul>
            <h4>Usuarios Cadastrados:</h4>
            { props.usuarios.map((usuario, key) => {
                return (
                    <div>
                        { props.pagina === 1 ?
                        <div>
                            <p exibirDetalhes={props.exibirDetalhes} onClick={() => props.onClickUsuario(usuario.id)}>{usuario.name}</p>
                        </div>:
                        null
                        }

                        </div>
                            )
                            })
                        }
                        { props.pagina >= 2 ?
                        <div>
                            <Usuario onChangeNomeEdit={props.onChangeNomeEdit} onChangeEmailEdit={props.onChangeEmailEdit} nomeEdit={props.nomeEditValor} emailEdit={props.emailEditValor} onClickSalvar={() => props.onClickSalvar(props.usuarioDetalhes.id)} editar={props.editar} pagina={props.pagina} usuarioDetalhes={props.usuarioDetalhes} onClickEditar={props.onClickEditar} exibirDetalhes={props.exibirDetalhes} onClick={() => props.onClickUsuario(props.usuarioDetalhes.id)} />
                            <span onClick={() => props.onClickExcluir(props.usuarioDetalhes.id)}>X</span>
                        </div>:
                            null 
                        }
            </ul>
        </div>
    )
}
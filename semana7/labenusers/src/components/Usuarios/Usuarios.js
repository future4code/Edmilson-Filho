import React from 'react';
import { Usuario } from '../Usuario/Usuario';

export function Usuarios(props) {
    return (
        <div>
            {props.pagina === 1 ?
            <form onSubmit={props.onSubmitBuscar}>
                <h4>Buscar um usuário</h4>
                
                <label htmlFor="nome">Nome:
                <input value={props.nomeValor} onChange={props.onChangeNome} type="text" id="name" />
                </label>

                <button>Buscar</button>
            </form>:
            null
            }
            <ul>
            {console.log(props.usuarios)}
            { props.usuarios.map((usuario, key) => {
                {console.log(usuario.name)}
                return (
                    <div>
                        {console.log(props.usuarioDetalhes)}
                        {console.log(props.pagina)}

                        { props.pagina === 1 ?
                        <div>
                        <h4>Usuarios Cadastrados:</h4>
                            <p exibirDetalhes={props.exibirDetalhes} onClick={() => props.onClickUsuario(usuario.id)}>{usuario.name}</p>
                        </div>:
                        null
                        }

                        {console.log(`pagina ${props.pagina}`)}
                        </div>
                )
            }) }
                                    { props.pagina >= 2 ?
                        <div>
                            <Usuario editar={props.editar} pagina={props.pagina} usuarioDetalhes={props.usuarioDetalhes} onClickEditar={props.onClickEditar} exibirDetalhes={props.exibirDetalhes} onClick={() => props.onClickUsuario(props.usuarioDetalhes.id)} />
                            <span onClick={() => props.onClickExcluir(props.usuarioDetalhes.id)}>X</span>
                            </div>:
                            null 
                        }
            </ul>
        </div>
    )
}
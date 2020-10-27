import React from 'react';

export function Usuarios(props) {
    
    return (
        <div>
            <h4>Usuarios Cadastrados:</h4>
            <ul>
            {console.log(props.usuarios)}
            { props.usuarios.map((usuario, key) => {
                {console.log(usuario.name)}
                return <li key={key}>{usuario.name}<span onClick={() => props.onClickExcluir(usuario.id)}>X</span></li>
            }) }
            </ul>
        </div>
    )
}
import React from 'react'
import './IconeSemContador.css'
import styled from 'styled-components';

const Icone = styled.div`
	background: gray;
`

export function IconeSemContador(props) {

	// if (props.compartilha) {
	// 	compartilha = abriOpcoes;
	// } else {
	// 	compartilha = fechaOpcoes;
	// }

	return <div className={"icon-container"}>
		<img alt={'Icone'} src={props.icone} onClick={props.onClickIcone} />
		{props.compartilha ?
			<Icone>
				<div onClick={props.onClickOpcoes}>Facebook</div>
				<div onClick={props.onClickOpcoes}>Instagram</div>
				<div onClick={props.onClickOpcoes}>Twitter</div>
				<input value={props.textoCompartilhar} onChange={props.aoCompartilhar} type="text" />
			</Icone>
			:
			null
		}
	</div>
}

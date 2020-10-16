import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import {IconeSemContador} from '../IconeSemContador/IconeSemContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeSalvoBranco from '../../img/salvo-white.svg'
import iconeSalvoPreto from '../../img/salvo.svg'
import iconeCompartilha from '../../img/compartilha.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    compartilha: false,
    textoCompartilhar: "",
    posts: [
      
    ]
  }

  onClickCurtida = () => {
    console.log('Curtiu!')
    
    this.setState({
      curtido: !this.state.curtido,
    })

    if (this.state.curtido) {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    } else {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    }
  }

  onClickSalvo = () => {
    console.log('Curtiu!')
    
    this.setState({
      salvo: !this.state.salvo,
    })
  }

  onClickCompartilha = () => {
    console.log('Curtiu!')
    
    this.setState({
      compartilha: !this.state.compartilha,
    })
  }

  onClickOpcoes = (e) => {
    console.log('Post compartilhado no ' + e.target.innerHTML + " com a mensagem: " + this.state.textoCompartilhar);
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoCompartilhar = (e) => {
    this.setState({
      textoCompartilhar: e.target.value
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeSalvo

    if(this.state.salvo) {
      iconeSalvo = iconeSalvoPreto
    } else {
      iconeSalvo = iconeSalvoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
        <IconeSemContador
          icone={iconeSalvo}
          onClickIcone={this.onClickSalvo}
        />
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteComentario}
      <div>
        <IconeSemContador
          icone={iconeCompartilha}
          onClickIcone={this.onClickCompartilha}
          onClickOpcoes={(e) => this.onClickOpcoes(e)}
          compartilha={this.state.compartilha}
          textoCompartilhar={this.state.textoCompartilhar}
          aoCompartilhar={(e) => this.aoCompartilhar(e)}
        />
      </div>
    </div>
  }
}

export default Post
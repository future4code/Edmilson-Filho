import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      }
    ]
  }

  onChangeDados = (nomeUsuario, fotoUsuario, fotoPost) => {
    console.log(nomeUsuario);
    
    this.setState({
      nomeUsuario: this.state.nomeUsuario,
      fotoUsuario: this.state.fotoUsuario,
      fotoPost: this.state.fotoPost,
    })
  }
  
  aoCriarPost = (e, nomeUsuario, fotoUsuario, fotoPost) => {
    e.preventDefault();

    this.setState({
      posts: {
        ...this.state.posts,
        nomeUsuario: this.state.nomeUsuario,
        fotoUsuario: this.state.fotoUsuario,
        fotoPost: this.state.foto,
      }
    })
  }
  
  render() {
    // const posts = this.state.posts.map(post => {
    //   <Post
    //    nomeUsuario={post.nomeUsuario}
    //    fotoUsuario={post.fotoUsuario}
    //    fotoPost={post.fotoPost}
    //    />
    // });

    return (
      <div className={'app-container'}>
        {this.state.posts.map((post, i) => (
            <Post
              nomeUsuario={post.nomeUsuario}
              fotoUsuario={post.fotoUsuario}
              fotoPost={post.fotoPost}
              key={i}
            />
        ))
        }
        <form>
          <label htmlFor="nomeUsuario">
            Nome:
          </label>
          <input onChange={(nomeUsuario) => this.onChangeDados(nomeUsuario)} type="text" name="nomeUsuario" id="nomeUsuario" />

          <label htmlFor="fotoUsuario">
            Foto de usuário:
          </label>
          <input onChange={(fotoUsuario) => this.onChangeDados(fotoUsuario)}  type="text" name="fotoUsuario" id="fotoUsuario" />

          <label htmlFor="fotoPost">
            Foto do post:
          </label>
          <input onChange={(fotoPost) => this.onChangeDados(fotoPost)}  type="text" name="fotoPost" id="fotoPost" />

          <button type="submit" onClick={(e) => this.aoCriarPost (e)}>
            Criar
          </button>
        </form>
      </div>
    );
  }
}

export default App;

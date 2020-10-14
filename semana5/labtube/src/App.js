import React from 'react';
import logo from './logo.svg';
import perfil from './img/perfil.jpg';
import './App.css';

function App() {
  const titulo = "Título do vídeo";

  function reproduzVideo() {
      alert("O vídeo está sendo reproduzido");
  }

  return (
    <div className="App">
        <div className="tela-inteira">
            <header>
                <div className="menu-logo">
                  <div className="estender-menu">
                  </div>
                  <div className="logo">
                    <div className="logo-play">
                      <div className="logo-triangulo">
                      </div>
                    </div>
                    <h1 className="logo-nome">Lab Tube</h1>
                    <div className="logo-br">BR</div>
                  </div>
                </div>
                <div className="busca">
                  <input type="text" placeholder="Pesquisar" id="campoDeBusca" />
                  <div className="busca-icone"></div>
                </div>
                <nav className="menu-horizontal">
                    <div>
                        <div className="botoes-meunu-horizontal">
                          <div className="criar-video">
                          </div>
                        </div>
                        <div className="botoes-meunu-horizontal">
                          <div>

                          </div>
                        </div>
                        <div className="botoes-meunu-horizontal">
                          <div>5</div>
                        </div>
                        <hr />
                        <div className="botoes-meunu-horizontal">
                          <div><img className="canal-imagem" src={perfil} /></div>
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                <nav className="menu-vertical">
                    <div>
                        <div className="botoes-meunu-vertical">
                          <div className="icones-menu-vertical"></div>
                          <div>Início</div>
                        </div>
                        <div className="botoes-meunu-vertical">
                          <div className="icones-menu-vertical"></div>
                          <div>Em alta</div>
                        </div>
                        <div className="botoes-meunu-vertical">
                          <div className="icones-menu-vertical"></div>
                          <div>Inscrições</div>
                        </div>
                        <hr />
                        <div className="botoes-meunu-vertical">
                          <div className="icones-menu-vertical"></div>
                          <div>Biblioteca</div>
                        </div>
                    </div>
                </nav>
                
                <section className="painel-de-videos">
                    <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                        <div className="video">
                          <img src="https://picsum.photos/360/200?a=1 " alt="" />
                          <div className="tempo-atual">10:15</div>
                        </div>
                        <div className="descricao">
                          <div><img className="canal-imagem" src={perfil} /></div>
                          <h4 className="nome-canal">{titulo}</h4>
                          <div className="descricao-mais">
                            <div>Nome do canal</div>
                            <div>77 mil vizualiações</div>
                            <div>há 48 minutos</div>
                          </div>
                      </div>
                    </div>
                    <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                        <div className="video">
                          <img src="https://picsum.photos/360/200?a=2 " alt="" />
                          <div className="tempo-atual">10:15</div>
                        </div>
                        <div className="descricao">
                          <div><img className="canal-imagem" src={perfil} /></div>
                          <h4 className="nome-canal">{titulo}</h4>
                          <div className="descricao-mais">
                            <div>Nome do canal</div>
                            <div>77 mil vizualiações</div>
                            <div>há 48 minutos</div>
                          </div>
                      </div>
                    </div>
                    <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                        <div className="video">
                          <img src="https://picsum.photos/360/200?a=3 " alt="" />
                          <div className="tempo-atual">10:15</div>
                        </div>
                        <div className="descricao">
                          <div><img className="canal-imagem" src={perfil} /></div>
                          <h4 className="nome-canal">{titulo}</h4>
                          <div className="descricao-mais">
                            <div>Nome do canal</div>
                            <div>77 mil vizualiações</div>
                            <div>há 48 minutos</div>
                          </div>
                      </div>
                    </div>
                    <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                        <div className="video">
                          <img src="https://picsum.photos/360/200?a=4 " alt="" />
                          <div className="tempo-atual">10:15</div>
                        </div>
                        <div className="descricao">
                          <div><img className="canal-imagem" src={perfil} /></div>
                          <h4 className="nome-canal">{titulo}</h4>
                          <div className="descricao-mais">
                            <div>Nome do canal</div>
                            <div>77 mil vizualiações</div>
                            <div>há 48 minutos</div>
                          </div>
                      </div>
                    </div>
                    <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                        <div className="video">
                          <img src="https://picsum.photos/360/200?a=5 " alt="" />
                          <div className="tempo-atual">10:15</div>
                        </div>
                        <div className="descricao">
                          <div><img className="canal-imagem" src={perfil} /></div>
                          <h4 className="nome-canal">{titulo}</h4>
                          <div className="descricao-mais">
                            <div>Nome do canal</div>
                            <div>77 mil vizualiações</div>
                            <div>há 48 minutos</div>
                          </div>
                      </div>
                    </div>
                    <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                        <div className="video">
                          <img src="https://picsum.photos/360/200?a=6 " alt="" />
                          <div className="tempo-atual">10:15</div>
                        </div>
                        <div className="descricao">
                          <div><img className="canal-imagem" src={perfil} /></div>
                          <h4 className="nome-canal">{titulo}</h4>
                          <div className="descricao-mais">
                            <div>Nome do canal</div>
                            <div>77 mil vizualiações</div>
                            <div>há 48 minutos</div>
                          </div>
                      </div>
                    </div>
                    <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                        <div className="video">
                          <img src="https://picsum.photos/360/200?a=7 " alt="" />
                          <div className="tempo-atual">10:15</div>
                        </div>
                        <div className="descricao">
                          <div><img className="canal-imagem" src={perfil} /></div>
                          <h4 className="nome-canal">{titulo}</h4>
                          <div className="descricao-mais">
                            <div>Nome do canal</div>
                            <div>77 mil vizualiações</div>
                            <div>há 48 minutos</div>
                          </div>
                      </div>
                    </div>
                    <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                        <div className="video">
                          <img src="https://picsum.photos/360/200?a=8 " alt="" />
                          <div className="tempo-atual">10:15</div>
                        </div>
                        <div className="descricao">
                          <div><img className="canal-imagem" src={perfil} /></div>
                          <h4 className="nome-canal">{titulo}</h4>
                          <div className="descricao-mais">
                            <div>Nome do canal</div>
                            <div>77 mil vizualiações</div>
                            <div>há 48 minutos</div>
                          </div>
                      </div>
                    </div>
                   
                </section>
            </main>

            <footer>
                <h4>Oi! Eu moro no footer!</h4>
            </footer>
        </div>
    </div>
  );
}

export default App;

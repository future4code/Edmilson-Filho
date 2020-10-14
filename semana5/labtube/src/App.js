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
                    <ul>
                        <li className="botoes-meunu-horizontal">
                          <div className="criar-video">
                          </div>
                        </li>
                        <li className="botoes-meunu-horizontal">
                          <div>

                          </div>
                        </li>
                        <li className="botoes-meunu-horizontal">
                          <div>5</div>
                        </li>
                        <hr />
                        <li className="botoes-meunu-horizontal">
                          <div>

                          </div>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>
                <nav className="menu-vertical">
                    <ul>
                        <li className="botoes-meunu-vertical">Início</li>
                        <li className="botoes-meunu-vertical">Em alta</li>
                        <li className="botoes-meunu-vertical">Inscrições</li>
                        <hr />
                        <li className="botoes-meunu-vertical">Biblioteca</li>
                    </ul>
                </nav>
                
                <section className="painel-de-videos">
                    <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                        <div className="video">
                          <img src="https://picsum.photos/400/400?a=1 " alt="" />
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
                        <img src="https://picsum.photos/400/400?a=2 " alt="" />
                        <h4>{titulo}</h4>
                        <div>Nome do canal</div>
                        <div>77 mil vizualiações</div>
                        <div>há 48 minutos</div>
                    </div>
                    <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                        <img src="https://picsum.photos/400/400?a=3 " alt="" />
                        <h4>{titulo}</h4>
                        <div>Nome do canal</div>
                        <div>77 mil vizualiações</div>
                        <div>há 48 minutos</div>
                    </div>
                    <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                        <img src="https://picsum.photos/400/400?a=4 " alt="" />
                        <h4>{titulo}</h4>
                        <div>Nome do canal</div>
                        <div>77 mil vizualiações</div>
                        <div>há 48 minutos</div>
                    </div>
                    <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                        <img src="https://picsum.photos/400/400?a=5 " alt="" />
                        <h4>{titulo}</h4>
                        <div>Nome do canal</div>
                        <div>77 mil vizualiações</div>
                        <div>há 48 minutos</div>
                    </div>
                    <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                        <img src="https://picsum.photos/400/400?a=6 " alt="" />
                        <h4>{titulo}</h4>
                        <div>Nome do canal</div>
                        <div>77 mil vizualiações</div>
                        <div>há 48 minutos</div>
                    </div>
                    <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                        <img src="https://picsum.photos/400/400?a=7 " alt="" />
                        <h4>{titulo}</h4>
                        <div>Nome do canal</div>
                        <div>77 mil vizualiações</div>
                        <div>há 48 minutos</div>
                    </div>
                    <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                        <img src="https://picsum.photos/400/400?a=8 " alt="" />
                        <h4>{titulo}</h4>
                        <div>Nome do canal</div>
                        <div>77 mil vizualiações</div>
                        <div>há 48 minutos</div>
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

import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://i.imgur.com/zOpFANa.jpg" 
          nome="Edmilson" 
          descricao="Olá, sou desenvolvedor front end, futuro desenvolvedor full stack, apaixonado por ciência e tecnologia, que gosta de jogar e malhar nos tempos livres."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno
          imagem="https://www.flaticon.com/svg/static/icons/svg/725/725659.svg"
          nome="Email:"
          descricao="EdmilsonDevWeb@gmail.com"
        />

        <CardPequeno
          imagem="https://www.flaticon.com/svg/static/icons/svg/1332/1332678.svg"
          nome="Endereço:"
          descricao="Lauro de Freitas - BA"
        />
      </div>

      <div className="page-section-container">
        <h2>Cursos e formações</h2>
        <CardGrande 
          imagem="https://catunoticias.com.br/wp-content/uploads/2018/06/IMAGEM_NOTICIA_0-38.jpg" 
          nome="IFBA"
          descricao="Informática para Internet" 
        />
        
        <CardGrande 
          imagem="https://www.udemy.com/staticx/udemy/images/v6/default-meta-image.png" 
          nome="Udemy" 
          descricao="SASS e CSS avançado"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Cursando desenvolvimento web full stack" 
        />
        
        <CardGrande 
          imagem="https://hypescience.com/wp-content/uploads/2018/10/dicas-autodidatas-2-838x559.jpg" 
          nome="Autodidata" 
          descricao="Desenvolvendo sites pessoais"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;

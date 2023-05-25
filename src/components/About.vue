<template>
    <div class="about container">
      <b-row>
        <b-col>
          <h1 class="about-title">Sobre</h1>
          <p class="about-description">
            O site é um projeto de web scraping que utiliza técnicas para extrair informações do perfil de usuários do
            Spotify.
            Ele é capaz de visualizar as playlists do usuário, ler as músicas e coletar os artistas presentes em cada uma
            delas.
            As informações dos artistas são armazenadas em um banco de dados não relacional, permitindo que sejam facilmente
            pesquisadas no site.
          </p>
        </b-col>
      </b-row>
  
      <b-row>
        <b-col>
          <p class="about-description">
            O objetivo do projeto é fornecer uma forma prática e rápida de buscar informações sobre artistas presentes nas
            playlists do Spotify.
            Dessa forma, os usuários podem descobrir mais sobre seus artistas favoritos e explorar novas músicas.
          </p>
        </b-col>
      </b-row>
  
      <b-row>
        <b-col>
          <h2 class="about-title">Desenvolvedor</h2>
          <p class="about-description">
            <a href="https://github.com/ian-zaque" target="_blank" rel="noopener">Ian Zaque</a>.
          </p>
        </b-col>
      </b-row>
  
      <b-row>
        <b-col>
          <h2 class="about-title">Disciplina</h2>
          <p class="about-description">
            <a href="https://sites.google.com/a/ecomp.uefs.br/joao/home/courses/exa844" target="_blank"
              rel="noopener">EXA844 - Programação para Redes</a>.
          </p>
        </b-col>
      </b-row>
  
      <b-row>
        <b-col>
          <h2 class="about-title">Repositório</h2>
          <p class="about-description">
            Para mais detalhes sobre o projeto, incluindo código-fonte e documentação, visite o
            <a href="https://github.com/ian-zaque/exa844-projeto-vue" target="_blank" rel="noopener">repositório</a>.
          </p>
        </b-col>
      </b-row>
    </div>
  </template>
    
  <script>
  export default {
    name: 'About',
  };
  </script>
    
  <style scoped>
  .about {
    padding: 20px;
    background-color: #282828;
    color: #fff;
  }
  
  .about-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .about-description {
    margin-bottom: 15px;
  }
  
  .about-description a {
    color: #1db954;
    text-decoration: none;
  }
  
  .about-description a:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 576px) {
    .about {
      font-size: 14px;
    }
  }</style>
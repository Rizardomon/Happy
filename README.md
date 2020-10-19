<h2 align="center">
  <img src="https://img.shields.io/badge/Next%20Level%20Week-%233-00b8d3?style=for-the-badge" alt="Evento Next Level Week 3" />
  <img src="https://img.shields.io/badge/web%3F-ok-00b8d3?style=for-the-badge" alt="Sistema web Ok" />
  <img src="https://img.shields.io/badge/server%3F-ok-00b8d3?style=for-the-badge" alt="Server OK" />
  <img src="https://img.shields.io/badge/app mobile%3F-No-00b8d3?style=for-the-badge" alt="Aplicativo mobile No" />
  <img src="https://img.shields.io/github/license/matheusfelipeog/proffy?color=00b8d3&style=for-the-badge" alt="License" />
</h2>

<h1 align="center">
  <img src="./.github/assets/images/hapyy-capa.png" alt="Logo da Happy" width="1000px" />
</h1>

## 📸 Screenshots

<p align="center">
  <strong>Tela Web</strong> <br />
  <img src="./.github/assets/gifs/happy.gif" alt="Demonstração da plataforma Happy" />
</p>

## 🛠 Techs

- **Web**

  - [React](https://reactjs.org/)
  - [Typescript](https://www.typescriptlang.org/)
  - [Leaflet](https://leafletjs.com/)
  - [React Leaflet](https://react-leaflet.js.org/)
  - [Mapbox](https://www.mapbox.com/)

- **Backend**
  - [Nodejs](https://nodejs.org/en/)
  - [Express](https://expressjs.com/)
  - [Typeorm](https://typeorm.io/)
  - [Multer](https://github.com/expressjs/multer)
  - [Yup](https://github.com/jquense/yup)

## ⚙ Instalação e Start

Este repositório é um monorepo, portanto, manterá os fontes do projeto **Web**, **API** e **Mobile**. Cada parte do projeto tem suas dependências e é necessário instala-las individualmente antes da execução, para isso certifique-se de que tenha [NPM](https://www.npmjs.com/) ou [YARN](https://yarnpkg.com/) instalado em seu ambiente, além, é claro, o repositório clonado em seu ambiente.

Clone o repositório com:

```bash
> git clone https://github.com/matheusfelipeog/happy.git
```

As demonstrações utilizam **YARN** por padronização, mas, caso use **NPM**, basta substituir onde estiver escrito `yarn` por `npm`.

**Instalando dependências do projeto web:**

```bash
> cd happy/web
> yarn install
```

Para executar o projeto **web** completo é necessário ter um **token** de autenticação da API do Mapbox. Acesse sua conta no site e crie um token para ser utilizado no projeto. Com o token em mãos, crie um arquivo `.env` e coloque seu token como valor da chave `REACT_APP_MAPBOX_TOKEN`.

Exemplo:

```text
REACT_APP_MAPBOX_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Agora starte o projeto em seu ambiente com:

```bash
> yarn start
```

Acesse: [`http://127.0.0.1:3000/`](http://127.0.0.1:3000/) para visualizar.

**Instalando dependências do projeto backend:**

```bash
> cd happy/backend
> yarn install
```

Para executar o projeto **backend** é necessário criar o banco de dados com todas as tabelas utilizadas, para isso, use no diretório correspondente:

```bash
> yarn typeorm migration:run
> yarn dev
```

Acesse: [`http://127.0.0.1:3333/`](http://127.0.0.1:3333/) para visualizar.

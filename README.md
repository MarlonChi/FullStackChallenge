<h1 align="center">Na trave</h1>

<p align="center">
Evento exclusivo e gratuito, promovido pela Codar.me para ensino de tecnologias FullStack.
Foram 5 dias de aula, totalizando um pouco mais de 10 horas de vídeo, desenvolvendo uma API em NodeJS e um Front-end em React.
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-iniciando-a-aplicação">Iniciando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-contato">Contato</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>

<p align="center">
  <img alt="photo" src=".github/NaTrave.png" width="100%">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

* Back-end
  * __Node__ + __Koa__ + __Cors__
  * __Prisma ORM__ para acessar o banco de dados
  * __JWT__ para autenticação JWT (JSON Web Tokens)
* Front-end
  * __React + Vite__
  * __Tailwind CSS__ para estilização.
  * __Formik / Yup__ para validação de formulários
  * __React-Use__ para Hooks
  * __Date-Fns__ para formatar datas.
  * __React-Toastify__ para exibição de notificações de mensagens
  * __Axios__ para acessar a API.

## :car: Iniciando a aplicação
Baixe o repositório com git clone e entre na pasta do projeto.<br/>
Renomeie os arquivos _.env.example_ para _.env_ e informe as URLs e o JWT secret. É necessário ter um login no __PlanetScale__ para configurar as credenciais no arquivo _.env_ do código.<br/>
```bash
$ git clone https://github.com/MarlonChi/FullStackChallenge
```
* Back-end
```bash
$ cd api
$ npm install
$ npm run start
```
* Front-end
```bash
$ cd ..
$ cd web
$ npm install
$ npm run dev
```
## 💻 Projeto

O Na trave é um projeto composto de uma api desenvolvida com Node.js e um client desktop e responsivo desenvolvido com React.
A aplicação possui uma tela de login, cadastro de usuário, dashboard e tela de perfil. Ao entrar no sistema, o usuário logado visualiza os jogos da Copa do Mundo 2022, de acordo com o dia e horário informado.<br/>
É possível acompanhar e filtrar os jogos por data. Além disso, permite realizar palpites sobre os resultados dos jogos.<br/>
Todos os palpites são armazenados na nuvem, em um banco de dados chamado [PlanetScale](https://planetscale.com).<br />

## :memo: Licença

Esse projeto está sob a [licença MIT](LICENSE).

## :email: Contato

E-mail: [**marlonchiodelli@hotmail.com**](mailto:marlonchiodelli@hotmail.com)
---
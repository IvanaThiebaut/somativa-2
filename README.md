# Atividade Somativa 2 da disciplina: Tecnologias para desenvolvimento web

## Descrição do projeto
A aplicação é num sistema web completo que permite o registo, autenticação e gestão de usuarios. 
O projeto foi construído utilizando React.js para o front-end e os serviços de Authentication e Firestore do Firebase para o back-end.

## Funcionalidades principais

Página de cadastro: Permite que novos usuarios criem uma conta com os seus dados de nome, sobrenome, data de nascimento, e-mail e senha.
Página de login: Permite que os usuários que estejam registados consigam acessar a aplicação.
Gestão de sessão: A aplicação controla o estado de autenticação, protegendo rotas e dados.
Gestão de dados do usuário: Os dados dos usuários são criados no Firebase Authentication e as informações adicionais são armazenadas numa coleção no Cloud Firestore.
Página principal: Após o login, os dados do usuario (nome, sobrenome, data de nascimento) são exibidos na tela.
Navegação: Utilização do React Router Dom para criar uma navegação entre as páginas usando as rotas.

Eu também inclui uma página Sobre com detalhes do projeto e uma página NotFound para rotas inexistentes.

## Tecnologias Utilizadas
Front-End:
React.js: Biblioteca principal para a construção da interface.
React Router Dom: Para a gestão de rotas.
CSS: Para a estilização da aplicação.

Back-End:
Firebase authentication: Para o sistema de registo e login com e-mail e senha.
Cloud firestore: Como banco de dados para armazenar os dados dos utilizadores.

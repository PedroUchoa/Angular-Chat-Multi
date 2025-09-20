<h1 align="center"> Multi Chat Front </h1>

# Resumo do projeto
Este é o frontend do projeto Multi Chat API, uma aplicação de chat em tempo real inspirada no Discord. A interface foi construída com Angular e TypeScript para proporcionar uma experiência de usuário dinâmica e responsiva. A comunicação com o backend é gerenciada utilizando WebSocket, com a ajuda das bibliotecas Stomp.js e SockJS.

## Pré Requisitos

O que você precisa para instalar o software e como instalá-lo.

- Node.js e npm (ou Yarn)
- Angular CLI (instale com npm install -g @angular/cli)

## Instalando

Passo a passo que mostram como colocar o ambiente de desenvolvimento em funcionamento.

#### 1- Clonar o Repositório
- Abra seu terminal ou prompt de comando e clone o projeto com o seguinte comando:

```
git clone https://github.com/PedroUchoa/Angular-Chat-Multi.git
```

#### 2- Instalar as Dependências

- Navegue até o diretório do projeto e instale todas as dependências necessárias:

```
cd Angular-Chat-Multi
npm install
```

#### 3- Configurar a Conexão com o Backend

- Certifique-se de que o backend (projeto Java Spring Boot) está rodando em http://localhost:8080

#### 4- Executar o Servidor de Desenvolvimento

- Inicie a aplicação Angular com o seguinte comando:

```
ng serve
```

#### 5- Acessar a Aplicação

- Abra seu navegador e navegue para http://localhost:4200 para começar a usar a interface do chat.


## ✔️ Bibliotecas e tecnologias utilizadas

- ``Angular 19``
- ``TypeScript``
- ``Stomp.js``
- ``SockJS``
- ``Toastr``

## Funcionalidades Principais

- Registro e Login: Interface para criar uma conta ou acessar uma existente.
- Listagem de Grupos: Visualize os grupos de conversa disponíveis.
- -Criação de Grupos: Crie seus proprios grupos de conversa.
- Entrada e Saída de Grupos: Junte-se ou saia dos grupos de forma intuitiva.
- Chat em Tempo Real: Envie e receba mensagens instantaneamente dentro dos grupos, com suporte para comunicação bidirecional via WebSocket.

## Autor

* **Pedro Uchôa** - *Dev Back-end Java* - [Github](https://github.com/PedroUchoa)



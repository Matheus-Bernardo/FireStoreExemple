# FireStoreExemple
## Índice

- [Descrição](#descrição)
- [Protótipo](#protótipo)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Autor](#autor)

## Descrição

Este projeto é um exemplo de aplicação que realiza operações CRUD (Create, Read, Update, Delete) no banco de dados FireStore.

## Protótipo

Link para protótipo no Figma: [Clique aqui](https://www.figma.com/design/lXa9GDY1CIsuS9tCwF5IjS/desafio?node-id=0-1&p=f&t=iCRHzXYXMAaZbSGm-0)

## Tecnologias Utilizadas

- **Angular**: Framework utilizado para o desenvolvimento da interface visual.
- **Firebase FireStore**: Banco de dados NoSQL utilizado para armazenar os dados dos produtos.

## Funcionalidades

- Adicionar novos produtos
- Listar produtos existentes
- Atualizar informações dos produtos
- Remover produtos

## Como Executar o Projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/Matheus-Bernardo/FireStoreExemple.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd FireStoreExemple
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Dentro de src, crie um arquivo Environments/environment.ts e cole suas credenciais do firebase:
    ```// Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getFirestore } from "firebase/firestore";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    export const firebaseConfig = {
    apiKey: "yourkey",
    authDomain: "yourDomain",
    projectId: "your ProjectId",
    storageBucket: "YourStorageBucket",
    messagingSenderId: "number",
    appId: "appId"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    ```    
5. Execute a aplicação:
    ```bash
    ng serve
    ```
6. Acesse a aplicação no navegador:
    ```
    http://localhost:4200
    ```


    ## Autor
    Desenvolvido por Matheus Bernardo. Você pode entrar em contato através do [LinkedIn](https://www.linkedin.com/in/matheus-bernardo-b20796196/) para mais informações.
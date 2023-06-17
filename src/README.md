# Aplicação de Cadastro de Filmes

Esta é uma aplicação em Node.js que permite cadastrar filmes e preencher algumas informações relacionadas a eles, como nome, descrição e nota. Além disso, é possível criar tags relacionadas a cada filme.

## Informações

📅 Data: **17.06.2023**
🕛 Status do Projeto: **Em andamento⌛**

## Tecnologias Utilizadas

A aplicação utiliza as seguintes tecnologias:

- **Node.js**: plataforma de execução de código JavaScript no servidor.
- **Express**: framework web rápido e minimalista para Node.js, utilizado para criar APIs e rotas.
- **Knex.js**: biblioteca SQL query builder para Node.js, utilizada para interagir com o banco de dados.
- **Criptografia de Senhas**: técnica utilizada para proteger as senhas dos usuários.
- **Validação de E-mail**: recurso utilizado para verificar a validade dos endereços de e-mail fornecidos pelos usuários.
- **SQLite3**: sistema de gerenciamento de banco de dados SQL leve e de fácil configuração.

## Funcionalidades

A aplicação oferece as seguintes funcionalidades:

- Cadastro de filmes com informações como nome, descrição e nota.
- Criação de tags relacionadas a cada filme.
- Criptografia das senhas dos usuários para garantir a segurança.
- Validação de e-mail para garantir que os endereços fornecidos sejam válidos.
- Uso do recurso de cascade para garantir que uma tag será excluída caso o usuário opte por       excluir a nota relacionada a ela.

## Diagrama do Banco de Dados

A seguir, está o diagrama do banco de dados utilizado na aplicação:

![Diagrama do Banco de Dados](https://efficient-sloth-d85.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F37f55645-bc5d-4666-8b5c-d2fba08ef73b%2FUntitled.png?id=cbf9ad4e-2f3b-4867-aace-2cedba55bc1e&table=block&spaceId=08f749ff-d06d-49a8-a488-9846e081b224&width=2000&userId=&cache=v2)

## Configuração

Siga as instruções abaixo para configurar e executar a aplicação:

1. Certifique-se de ter o Node.js instalado em seu sistema.
2. Clone o repositório do projeto em seu ambiente local.
3. No diretório do projeto, execute o seguinte comando para instalar as dependências:

   ```
   npm install
   ```

4. Configure o banco de dados SQLite3. Você pode ajustar as configurações no arquivo `knexfile.js`.
5. Execute as migrações do banco de dados com o seguinte comando:

   ```
   npx knex migrate:latest
   ```

6. Inicie a aplicação com o seguinte comando:

   ```
   npm start
   ```

7. Acesse a aplicação através do navegador web utilizando o endereço `http://localhost:3000`.

## Conclusão

Esta aplicação em Node.js oferece uma forma simples e intuitiva de cadastrar filmes e adicionar informações relacionadas a eles, além de permitir a criação de tags. Utilizando tecnologias como Express, Knex.js, criptografia de senhas, validação de e-mail e SQLite3, a aplicação oferece segurança e eficiência na gestão de filmes. Sinta-se à vontade para explorar e utilizar essa aplicação para gerenciar sua coleção de filmes!
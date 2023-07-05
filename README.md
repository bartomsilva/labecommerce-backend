( readme em construção )

# labecommerce
Olá, apresento meu projeto back-end, onde apliquei toda a base de criação de uma API vinculada a um banco de dados real.<br><br>
<br>
<span id='indice'></span>
## Índice

- <a href="#layout">Layout</a>
- <a href="#requests">Requisições</a>
- <a href="#link">Visualizar este projeto</a>
- <a href="#comorodar">Como rodar este projeto</a>
- <a href="#requisitos">Requisitos do projeto</a>
- <a href="#tecnologias">Tecnologias Utilizadas</a>
- <a href="#author">Pessoas autoras</a>
- <a href="#next">Próximos Passos</a>

## Layout: 
<span id="layout"></span>
<a href="#indice">início</a>
### vscode
![image](https://github.com/bartomsilva/labecommerce-backend/assets/106079184/1e595cc6-5811-4f44-90ed-f9a41ce3971a)
### Tabelas: 
![image](https://github.com/bartomsilva/modeloReadme/assets/106079184/acefbe29-1413-480e-9480-20b23d72f4aa)
### Endpoints implementados :
- [X]  Get all users 
- [X]  Create user
- [X]  Create product
- [X]  Get all products funcionalidades 1 e 2
- [X]  Edit product by id
- [X]  Create purchase
- [X]  Delete purchase by id
- [X]  Get purchase by id
<hr/>
<span id="requests"></span>
<a href="#indice">início</a>

## Requisições (Paths) 🛣🛣
### Requisições de Usuários
- /users
### Requisições de Produtos
- /products
### Requisições de Compras
- /purchases

### Documentação no Postman:  
---- link

## Exemplos de requisição
## Get all users
Retorna todas as pessoas cadastradas.<br>
#### Exemplo
![image](https://github.com/bartomsilva/modeloReadme/assets/106079184/61a82c61-5c57-4a54-af58-a7b69cf679d7)

## Create user
Cadastra uma nova pessoa.<br>
#### Validações
- [X] ausência de informações.
- [X] tipos de dados diferentes dos esperados.
- [X] verificação de ID já castrado.
- [X] verificação de email já castrado.<br>
#### Exemplo
![image](https://github.com/bartomsilva/modeloReadme/assets/106079184/c59d4f6b-52d1-4bad-b63d-10a6fbc66590)

## Create product
Cadastra um novo produto.<br>
#### Validações
- [x] ausência de informações.
- [X] tipos de dados diferentes dos esperados.
- [X] valor do produto válido (deve ser maior que zero). 
- [X] verificação de ID já castrado.<br>
#### Exemplo
![image](https://github.com/bartomsilva/modeloReadme/assets/106079184/839d0e3e-202e-452e-b653-15ce6cdf9ef3)

## Get all products
Retorna todos os produtos cadastrados, mas se for enviado um query params (name)
retorna os produtos que contenham o _"name"_ informado no seu nome.
#### Exemplo
![image](https://github.com/bartomsilva/modeloReadme/assets/106079184/4211fe4d-07fc-4b28-9cbc-c970644fd398)
![image](https://github.com/bartomsilva/labecommerce-backend/assets/106079184/4f2a7e7b-9b72-4aff-a1b4-79d7706b5f57)

## Edit product by id
Edita um produto existente.
#### Validações
- [X] tipos de dados diferentes dos esperados.
- [X] valor do produto válido "caso seja informado deve ser maior que zero". 
- [X] verificação do 'id' informadado, se o mesmo está cadastrado.
- [X] verificação do novo ID "caso informado" evitando gerar erro no cadastramento.<br>
#### Exemplo
![image](https://github.com/bartomsilva/modeloReadme/assets/106079184/3ac601b1-da4d-44c8-9138-0895ba970e8d)
![image](https://github.com/bartomsilva/modeloReadme/assets/106079184/970a8d8b-185b-4a61-8254-bb1378cc1fef)

## Create purchase
Cadastra um novo pedido.
- [X] ausência de informações
- [X] tipos de dados diferentes dos esperados
- [X] duplicidade de compras pelo ID
- [X] cliente válido ( cadastrado )
- [X] produtos válido ( cadastrado )
#### Exemplo
![image](https://github.com/bartomsilva/modeloReadme/assets/106079184/8fef9a9e-6ca4-4a09-b638-e236a3038f9a)
|![image](https://github.com/bartomsilva/modeloReadme/assets/106079184/c7aef965-6483-4c47-b8c6-72c2b9091611)

## Delete purchase by id
Deleta um pedido existente.
#### Exemplo
![image](https://github.com/bartomsilva/modeloReadme/assets/106079184/f821649d-97ee-4d12-879c-60fe769a7bcf)

## Get purchase by id
Retorna os dados de uma compra, incluindo a lista de produtos da mesma.
#### Exemplo
![image](https://github.com/bartomsilva/labecommerce-backend/assets/106079184/fc0e5e03-97da-442d-bfec-f5b3b0edee50)

<span id='comorodar'></span>
<a href="#indice">início</a>
## 📄 Como rodar este projeto

<p>Caso queira baixar e instalar este projeto em seu computador, é necessário que tenha o git e o node instalados.</p>

### Links:  <a href="https://nodejs.org/en">Node</a> - <a href="https://git-scm.com/">Git</a>

<p>Se já tem ambos instalados ou após instalar, siga os passos abaixo:</p>

```bash

# Copie o link a baixo

https://github.com/bartomsilva/labecommerce-backend.git

# Abra um terminal e digite o seguinte comando

git clone (cole a url aqui)

# acesse a página criada 

cd labecommerce-backend

# Instale as dependências
npm install
ou
yarn install

# Executando o Projeto
nmp run dev
ou 
yarn dev

```

<hr/>

<span id='requisitos'></span>
<a href="#indice">início</a>
## Requisitos do Projeto 

### **Requisitos**



### Endpoins adicionais
```
```
<hr/>

## Tecnologias 
colocar as imagens

- NodeJS
- Typescript
- Express
- SQL
- SQLite
- Knex
- Postman

<hr/>

<span id="tecnologias"></span>
<a href="#indice">início</a>
## 💻 Tecnologias

![Git](https://user-images.githubusercontent.com/106079184/227621865-d6fd9ff4-2e10-4f7f-9759-f31c6434b565.png)

<hr/>
<span id="author"></span>
<a href="#indice">início</a>
## 📫 Pessoas autoras

<img style="width: 200px; border-radius: 50% 0 " src="https://avatars.githubusercontent.com/u/106079184?s=400&u=753f5466a77193fe7077e495475b242787de0435&v=4" alt="imagem do autor">
<p>Bartolomeu Mariano ( Bart Silva )</p>

linkedin: https://www.linkedin.com/in/bart-silva-br/

<span id='next'></span>
<a href="#indice">início</a>
## Próximos passos
- Refazer todos projetos utilizando POO. 






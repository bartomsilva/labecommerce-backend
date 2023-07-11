<img src="https://github.com/bartomsilva/labecommerce-backend/assets/106079184/bf5ce5a6-6ce5-4d8a-926d-fbe82bacdfa4" width="250px" />
<h1 align="left" margin-top="0">Labecommerce-backend</h1> 

A Labecommerce-backend é uma API que simula o fluxo de trabalho de um ecommerce, mas trata-se de um projeto acadêmico, que faz parte da lista de atividades do curso desenvolvedor web full stack da Labenu, onde apliquei toda a base de criação de uma API vinculada a um banco de dados real.<br>
<hr/>

<span id='indice'></span>
## Índice:

- <a href="#layout">Layout</a>
- <a href="#requests">Requisições</a>
- <a href="#example">Exemplo de Requisições</a>
- <a href="#comorodar">Como rodar este projeto</a>
- <a href="#tecnologias">Tecnologias Utilizadas</a>
- <a href="#link">Documentação</a>
- <a href="#author">Pessoas autoras</a>
- <a href="#next">Considerações sobre este projeto</a>
<hr/>

<span id="layout"></span>
<a href="#indice">:arrow_backward:Indíce</a>
	
## Layout: 
#### a) Estrutura das pastas
<img src="https://github.com/bartomsilva/labecommerce-backend/assets/106079184/1e595cc6-5811-4f44-90ed-f9a41ce3971a" height="40%"/>

#### b) Tabelas: 
<img src="https://github.com/bartomsilva/modeloReadme/assets/106079184/acefbe29-1413-480e-9480-20b23d72f4aa" width="100%px"/>

#### c) Endpoints implementados
- [X]  Create user
- [X]  Get all users 
- [X]  Create product
- [X]  Get all products 
- [X]  Get products by name
- [X]  Edit product by id
- [X]  Create purchase
- [X]  Delete purchase by id
- [X]  Get purchase by id      
<hr/>
<span id="requests"></span>
<a href="#indice">:arrow_backward:Indíce</a>

## Requisições (Paths): 
#### Requisições de Usuários
- /users
#### Requisições de Produtos
- /products
#### Requisições de Compras
- /purchases

<hr/>
<span id="example"></span>
<a href="#indice">:arrow_backward:Indíce</a>

## Exemplos de requisição:
### Get all users
Retorna todas as pessoas cadastradas.<br>
##### Exemplo
![image](https://github.com/bartomsilva/modeloReadme/assets/106079184/61a82c61-5c57-4a54-af58-a7b69cf679d7)

### Create user
Cadastra uma nova pessoa.<br>
#### Validações
- [X] ausência de informações.
- [X] tipos de dados diferentes dos esperados.
- [X] verificação de ID já castrado.
- [X] verificação de email já castrado.<br>
#### Exemplo
![image](https://github.com/bartomsilva/labecommerce-backend/assets/106079184/54d7735b-42d7-41d9-baa8-c02d3ef346ba)

### Create product
Cadastra um novo produto.<br>
#### Validações
- [x] ausência de informações.
- [X] tipos de dados diferentes dos esperados.
- [X] valor do produto válido (deve ser maior que zero). 
- [X] verificação de ID já castrado.<br>
#### Exemplo
![image](https://github.com/bartomsilva/labecommerce-backend/assets/106079184/e63a3096-0418-4584-9a39-e5f562ee247b)

### Get all products
Retorna todos os produtos cadastrados e se for enviado um "query params name"
retorna os produtos que contenham o _"name"_ informado no seu nome.
#### Exemplo
![image](https://github.com/bartomsilva/modeloReadme/assets/106079184/4211fe4d-07fc-4b28-9cbc-c970644fd398)
![image](https://github.com/bartomsilva/labecommerce-backend/assets/106079184/4f2a7e7b-9b72-4aff-a1b4-79d7706b5f57)

### Edit product by id
Edita um produto existente.
#### Validações
- [X] tipos de dados diferentes dos esperados.
- [X] valor do produto válido "caso seja informado deve ser maior que zero". 
- [X] verificação do 'id' informadado, se o mesmo está cadastrado.
- [X] verificação do novo ID "caso informado" se o mesmo já foi cadastrado.<br>
#### Exemplo
![image](https://github.com/bartomsilva/labecommerce-backend/assets/106079184/b75dcc4a-ea6c-456c-9f83-961a0bb60edd)

### Create purchase
Cadastra um novo pedido.
- [X] ausência de informações
- [X] tipos de dados diferentes dos esperados
- [X] duplicidade de compras pelo ID
- [X] cliente válido ( cadastrado )
- [X] produto válido ( cadastrado )
- [X] quantidade válida ( maior que zero )
#### Exemplo
![image](https://github.com/bartomsilva/labecommerce-backend/assets/106079184/bbc966f4-0813-4e37-a55d-3e257234c708)

### Delete purchase by id
Deleta um pedido existente.
#### Exemplo
![image](https://github.com/bartomsilva/labecommerce-backend/assets/106079184/079b0b80-747c-42ce-a4d4-597d7913ce0c)

### Get purchase by id
Retorna os dados de uma compra, incluindo a lista de produtos da mesma.
#### Exemplo
![image](https://github.com/bartomsilva/labecommerce-backend/assets/106079184/d56b5cdc-8100-4f05-b97c-ffabd68a02de)

<hr/>
<span id='comorodar'></span>
<a href="#indice">:arrow_backward:Indíce</a>

## 📄 Como rodar este projeto:

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
npm run start
ou 
yarn start

```
<hr/>
<span id="tecnologias"></span>
<a href="#indice">:arrow_backward:Indíce</a>

## 💻 Tecnologias:
<div align="center">

<img src="https://github.com/bartomsilva/labecommerce-backend/assets/106079184/2ecbb441-e22d-4be2-b67b-5fff6f606583" higth="35px"/>
<img src="https://github.com/bartomsilva/labecommerce-backend/assets/106079184/365c791b-268b-45f5-9268-9b1bad354a57" higth="35px"/>
<img src="https://github.com/bartomsilva/labecommerce-backend/assets/106079184/0e5d0c6e-bae0-43c9-b641-2d375361c29a" higth="35px"/><br>
<img src="https://github.com/bartomsilva/labecommerce-backend/assets/106079184/a6ce0cb3-39d8-4d48-af03-9b1ff68a2809" higth="35px"/>
<img src="https://github.com/bartomsilva/labecommerce-backend/assets/106079184/932a21bf-bd42-4b0c-87f8-8941d86f56f7" higth="35px"/><br>
<img src="https://github.com/bartomsilva/labecommerce-backend/assets/106079184/bb5f2801-cf54-40da-ab18-1878173a177b" higth="35px"/>
<img src="https://github.com/bartomsilva/labecommerce-backend/assets/106079184/1d7fa95f-2f7c-4701-945a-8ad0412c236d" higth="35px"/>
<img src="https://github.com/bartomsilva/labecommerce-backend/assets/106079184/cf9e6e98-36f5-4447-be7a-c6d00426b477" higth="35px"/>
</div>
<hr/>

<span id="link"></span>

## Documentação: 
---- link

<span id="author"></span>

## 📫 Pessoas autoras:

<img style="width: 200px; border-radius: 50% 0 " src="https://avatars.githubusercontent.com/u/106079184?s=400&u=753f5466a77193fe7077e495475b242787de0435&v=4" alt="imagem do autor">
<p>Bartolomeu Mariano ( Bart Silva )</p>

linkedin: https://www.linkedin.com/in/bart-silva-br/

<span id='next'></span>

## Considerações sobre este projeto:
Bom, sobre este projeto, gostaria de pontuar algumas coisas:
Com relação aos pedidos, acredito que deveria ser incluído na tabela de itens do pedido ( purchases_products ) a coluna referente
ao valor do produto ( price ), uma vez que sem esse valor registrado, em uma consulta posterior a referência do valor é 
perdida, pelo fato de que os preços podem aumentar ou diminuir, outra questão é a não implementação de uma autorização 
tanto para leitura como para escrita de dados no banco de dados, estes dois pontos, assim como algumas melhorias seram adicionadas
após a correção deste projeto.
<hr/>


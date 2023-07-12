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
<img src="https://github.com/bartomsilva/labecommerce-backend/assets/106079184/2904962f-f99d-4f1d-90dd-6223c5517ae7" height="40%"/>

#### b) Endpoints implementados
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
### GET /users
Retorna uma lista de todas pessoas cadastradas.<br>
```json
[
    {
        "id": "001",
        "name": "Armarildo Gomes",
        "email": "armarindo@gmail.com",
        "password": "123456@aZ",
        "createdAt": "2023-06-28 17:59:29"
    },
    {
        "id": "002",
        "name": "Zudilenildes Lima",
        "email": "zudilenilde@gmail.com",
        "password": "123456@cZ",
        "createdAt": "2023-06-28 17:59:29"
    }
]
```
### POST /users
Cadastra uma nova pessoa.<br>
```json
{
    "message": "Cadastro realizado com sucesso"
}
```

### POST /products
Cadastra um novo produto.<br>
```json
{
    "message": "Produto cadastrado com sucesso"
}
```

### GET /products  ou  GET /products?name=texto
Retorna todos os produtos cadastrados e se for enviado um "query params name"
retorna os produtos que contenham o _"name"_ informado no seu nome.
* Retorno sem filtro
```json
[
    {
        "id": "001",
        "name": "Teclado Gamer Flash",
        "price": 102,
        "description": "Melhor teclado Game",
        "imageUrl": "https://picsum.photos/seed/Mouse%20gamer/400"
    },
    {
        "id": "002",
        "name": "Mouse Gamer Flash",
        "price": 50,
        "description": "Melhor mouse Game",
        "imageUrl": "https://picsum.photos/seed/Mouse%20gamer/400"
    },
    {
        "id": "003",
        "name": "CPU Gamer Flash",
        "price": 900,
        "description": "CPU core I20",
        "imageUrl": "https://picsum.photos/seed/Mouse%20gamer/400"
    }
]
```
* Retorno com filtro ( busca por 'mouse' )
```json
[
  {
        "id": "002",
        "name": "Mouse Gamer Flash",
        "price": 50,
        "description": "Melhor mouse Game",
        "imageUrl": "https://picsum.photos/seed/Mouse%20gamer/400"
    }
]
```

### PUT /products/:id
Edita um produto pelo id
```json
{
    "message": "Produto atualizado com sucesso"
}
```

### POST /purchases
Cadastra um novo pedido.
```json
{
    "message": "Pedido realizado com sucesso"
}
```

### DELETE /purchases/:id
Deleta um pedido pelo id.
```json
{
    "message": "Pedido cancelado com sucesso"
}
```

### GET purchases/:id
Retorna os dados de um pedido.
```json
{
    "purchaseId": "8889",
    "buyerId": "001",
    "buyerName": "Armarildo Gomes",
    "buyerEmail": "armarindo@gmail.com",
    "totalPrice": 500.98,
    "createdAt": "2023-07-12 20:56:22",
    "products": [
        {
            "id": "003",
            "name": "CPU Gamer Flash",
            "price": 900,
            "description": "CPU core I20",
            "imageUrl": "https://picsum.photos/seed/Mouse%20gamer/400",
            "quantity": 2
        },
        {
            "id": "006",
            "name": "Teclado Gamer Head Shot",
            "price": 250,
            "description": "Teclado mecânico com numpad top",
            "imageUrl": "https://picsum.photos/seed/Teclado%20gamer/400",
            "quantity": 1
        }
    ]
}
```

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
<img src="https://github.com/bartomsilva/labecommerce-backend/assets/106079184/932a21bf-bd42-4b0c-87f8-8941d86f56f7" higth="35px"/>
<img src="https://github.com/bartomsilva/labecommerce-backend/assets/106079184/bb5f2801-cf54-40da-ab18-1878173a177b" higth="35px"/>
</div>
<hr/>

<span id="link"></span>

## Documentação: 
https://documenter.getpostman.com/view/26149268/2s946cfEBZ

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


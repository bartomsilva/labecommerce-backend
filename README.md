( readme em construção )

# labecommerce
Olá, venho com muita alegria, apresentar meu primeiro projeto acadêmico back-end, que faz parte da lista de atividades do curso desenvolverdor web full stack da Labenu.
Neste projeto, apliquei toda a base de criação de uma API vinculada a um banco de dados real.<br><br>
<span id='indice'></span>
## Índice

- <a href="#layout">Layout</a>
- <a href="#requests">Requisições</a>
- <a href="#link">Visualizar este projeto</a>
- <a href="#example">Exemplo de Requisições</a>
- <a href="#comorodar">Como rodar este projeto</a>
- <a href="#tecnologias">Tecnologias Utilizadas</a>
- <a href="#author">Pessoas autoras</a>
- <a href="#next">Considerações sobre este projeto</a>
<hr/>

<span id="layout"></span>
<a href="#indice">início</a>

## Layout: 
### vscode
![image](https://github.com/bartomsilva/labecommerce-backend/assets/106079184/1e595cc6-5811-4f44-90ed-f9a41ce3971a)
### Tabelas: 
![image](https://github.com/bartomsilva/modeloReadme/assets/106079184/acefbe29-1413-480e-9480-20b23d72f4aa)
### Endpoints implementados :
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
<a href="#indice">início</a>

## Requisições (Paths) 🛣🛣
### Requisições de Usuários
- /users
### Requisições de Produtos
- /products
### Requisições de Compras
- /purchases
<hr/>

<span id="link"></span>
### Documentação no Postman:  
---- link

<hr/>
<span id="example"></span>
<a href="#indice">início</a>

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
- [X] quantidade válida ( maior que zero )
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
<hr/>
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
npm run start
ou 
yarn start

```

<hr/>
<span id='reqextra'></span>
<a href="#indice">início</a>

### Endpoins adicionais
- [X] Edit user by id (alterando o id também é alterado nos pedidos
- [X] Get user by name 
- [X] Delete user by id ( remove o usuário o os pedidos relacionados a ele) 
<hr/>
<span id="tecnologias"></span>
<a href="#indice">início</a>

## 💻 Tecnologias
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
<span id="author"></span>
<a href="#indice">início</a>

## 📫 Pessoas autoras

<img style="width: 200px; border-radius: 50% 0 " src="https://avatars.githubusercontent.com/u/106079184?s=400&u=753f5466a77193fe7077e495475b242787de0435&v=4" alt="imagem do autor">
<p>Bartolomeu Mariano ( Bart Silva )</p>

linkedin: https://www.linkedin.com/in/bart-silva-br/

<span id='next'></span>
<a href="#indice">início</a>

## Considerações sobre este projeto
Bom, sobre este projeto, gostaria de pontuar algumas coisas:
Com relação aos pedidos, deveria ser incluído na tabela de itens do pedido ( purchases_products ) a coluna referente
ao valor do produto ( price ), uma vez que sem ter esse volor registrado, em uma consulta posterior a referência do valor é 
perdida, pelo fato de que os preços podem aumentar ou diminuir, outra questão é a não implementação de uma autorização 
tanto na leitura como na escrita de dados no banco de dados, estes dois pontos assim como algumas melhorias seram adicionadas
após a correção deste projeto.



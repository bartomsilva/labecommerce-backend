import { users, products } from "./database";
import { User, Product } from './types'
import { createId, formatDate } from './roles/rooles'

import express, { Request, Response, query } from "express";
import cors from 'cors'

const server = express()

server.use(express.json())
server.use(cors())

server.listen(5000, () => console.log("sever is on!"))

// Ping Pong teste para ver se a API está online

server.get("/ping",(req:Request, res:Response)=>
{
  res.send("Pong!")
})

// USERS
//createUser
server.post("/users", (req:Request, res:Response) => {

  try {

    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    if (name == undefined) throw new Error("error NAME no send")
    if (typeof name !== 'string') throw new Error("error NAME type error")
    if (name.length < 10) throw new Error("error NAME size")

    const newUser: User =
    {
      id: createId(12),
      name: name,
      email: email,
      password: password,
      createdAt: new Date().toISOString()   // checar se o projeto mudou
    }

    users.push(newUser)
    res.status(201).json({"data": "Cadastro realizado com sucesso"})

  } catch (error: any) {
    res.status(400).send(error.message)

  }

})

//USERS
// getAllUsers 
server.get('/users', (req:Request, res:Response) => {
  res.status(200).json({data: users})
})


// PRODUCTS
// createProduct
server.post("/products", (req:Request, res:Response) => {
  try {
    const { name, price, description, imageUrl } = req.body
    if (name == undefined) throw new Error("o nome do produto precisa ser informado!")
    if (price == undefined) throw new Error("o preço do produto precisa ser informado!")
    if (price <= 0) throw new Error("o preço informado não é aceito")
    if (description == undefined) throw new Error("a descrição do produto precisa ser informada!")
    if (imageUrl == undefined) throw new Error("a imagem do produto é requerida!")

    const newProduct: Product =
    {
      id: createId(16),
      name: name,
      price: price,
      description: description,
      imageUrl: imageUrl
    }
    products.push(newProduct)
    res.status(201).json({"data": "produto criado com sucesso!"})

  } catch (error) {
    res.status(400).send(error.message)
  }
})

// PRODUCTS
// getAllProdutcts  = funcionalidade 1
server.get("/products",(req:Request, res:Response)=>{
  res.status(200).json({"data": products })
})


// PRODUCT 
// getAllProducts  = funcionalidade 2
server.get("/products/search",(req:Request, res:Response)=>{
  const query = req.query.q  as string  // forçando a tipagem
  const result = products.filter((product)=> product.name.toLowerCase().includes(query.toLowerCase()))
  res.status(200).json({"data":result})
})

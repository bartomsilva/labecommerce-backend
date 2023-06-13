import express, { Request, Response, query } from "express";
import cors from 'cors'


import { users, products } from "./database";
import { User, Product } from './types'
import { findEmail, findId } from "./roles/rooles";


const server = express()

server.use(express.json())
server.use(cors())

server.listen(5000, () => console.log("sever is on!"))


//### ENDPOINTS

// ** teste 
server.get("/", (req: Request, res: Response) => {
  res.send("api labecommerce-backend online!")
})



// ## USERS
// getAllUsers 
server.get('/users', (req: Request, res: Response) => {
  try {
    res.status(200).send(users)
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500)
    }
    if (error instanceof Error) {
      res.send(error.message)
    } else {
      res.send("Erro inesperado.")
    }
  }
})

//createUser
server.post("/users", (req: Request, res: Response) => {

  try {

    const { id, name, email, password } = req.body

    if (id == undefined) {
      res.statusCode = 400
      throw new Error("O id é obrigatório.")
    } else if (typeof id != "string") {
      res.statusCode = 400
      throw new Error("O id precisa ser uma string e ter no mínimo 1 caracter.")
    }

    if (name === undefined || typeof name != "string" || name.length < 1) {
      res.statusCode = 400
      throw new Error("O nome é obrigatório, precisa ser do tipo string e ter no mínimo 1 caracter.")
    }

    if (email === undefined || typeof email !== "string") {
      res.statusCode = 400
      throw new Error("O email é obrigatório e precisa ser do tipo string.")
    }

    if (!email.match(/^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i)) {
      res.statusCode = 400
      throw new Error("O email inválido.")
    }

    if (password == undefined) {
      res.statusCode = 400
      throw new Error("a senha é obrigatória.")
    }

    if (!password.match(/^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/g)) {
      res.statusCode = 400
      throw new Error("a password deve possuir entre 6 e 15 caracteres, com letras maiúsculas e minúsculas e no mínimo um número e um caractere especial")
    }

    if (findId(users, id)) {
      res.statusCode = 400
      throw new Error("esse id já foi cadastrado.")
    }

    if (findEmail(users, email)) {
      res.statusCode = 400
      throw new Error("esse email já foi cadastrado.")
    }

    const newUser: User =
    {
      id: id,
      name: name,
      email: email,
      password: password,
      createdAt: new Date().toISOString()   // checar se o projeto mudou
    }

    users.push(newUser)
    res.status(201).send("Cadastro realizado com sucesso.")

  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500)
    }
    if (error instanceof Error) {
      res.send(error.message)
    } else {
      res.send("Erro inesperado.")
    }
  }

})



// DELETE USER
server.delete('/users/:id', (req: Request, res: Response) => {
  try {
    const id = req.params.id
    if (!findId(users, id)) {
      res.statusCode = 404
      throw new Error("esse id não existe.")
    }
    const userSelect = users.findIndex((element, index) => {
      if (element.id === id) {
        users.splice(index, 1)
      }
    })
    res.status(200).send("User apagado com sucesso.")
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500)
    }
    if (error instanceof Error) {
      res.send(error.message)
    } else {
      res.send("Erro inesperado.")
    }
  }

})




// ### PRODUCTS

// ## createProduct
server.post("/products", (req: Request, res: Response) => {
  try {
    const { id, name, price, description, imageUrl } = req.body
    if (id == undefined || typeof id != "string" || id.length < 1) {
      res.statusCode = 400
      throw new Error("o id precisa ser informado, ser do tipo string e ter no mínimo 1 caractere.")
    }
    if (name == undefined || typeof name != "string" || name.length < 10) {
      res.statusCode = 400
      throw new Error("o nome do produto precisa ser informado, ser tipo string e ter no mínimo 1 caractere.")
    }
    if (price == undefined || typeof price != "number" || price <= 0) {
      res.statusCode = 400
      throw new Error("o preço do produto precisa ser informado e ser maior que zero.")
    }
    if (description == undefined || typeof description != "string" || description.length < 5) {
      res.statusCode = 400
      throw new Error("a descrição do produto precisa ser informada, ser do tipo string e ter no mínimo 1 caractere.")
    }
    if (imageUrl == undefined || typeof imageUrl != "string") {
      res.statusCode = 400
      throw new Error("a imagem do produto é requerida.")
    }

    if (findId(products, id)) {
      res.statusCode = 400
      throw new Error("esse id já foi cadastrado.")
    }

    const newProduct: Product =
    {
      id: id,
      name: name,
      price: price,
      description: description,
      imageUrl: imageUrl
    }
    products.push(newProduct)
    res.status(201).send("Produto cadastrado com sucesso.")

  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500)
    }
    if (error instanceof Error) {
      res.send(error.message)
    } else {
      res.send("Erro inesperado")
    }
  }
})

// ## DELETE PRODUCT BY ID

server.delete('/products/:id', (req: Request, res: Response) => {
  try {
    const id = req.params.id
    if (!findId(products, id)) {
      res.statusCode = 404
      throw new Error("id não cadastrado.")
    }
    products.findIndex((element, index) => {
      if (element.id === id) {
        products.splice(index, 1)
      }
    })
    res.status(200).send("Produto apagado com sucesso.")

  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500)
    }
    if (error instanceof Error) {
      res.send(error.message)
    } else {
      res.send("Erro inesperado")
    }
  }


})

// getAllProducts  = funcionalidade 1 e  2
server.get("/products", (req: Request, res: Response) => {
  try {

    const query = req.query.name as string  // forçando a tipagem
    let result: Product[]

    if (query == undefined) {
      result = products
    } else if (query.length > 0) {
      result = products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))
    } else {
      res.statusCode = 400
      throw new Error("para realizar a pesquisa precisa informar ao menos um caracter.")
    }
    res.status(200).send(result)

  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500)
    }
    if (error instanceof Error) {
      res.send(error.message)
    } else {
      res.send("Erro inesperado")
    }
  }


})

server.put('/products', (req: Request, res: Response) => {
  res.send("como resolver isso!, é preciso informar o id do produto que deseja alterar.")
})

server.put('/products/:id', (req: Request, res: Response) => {
  try {

    const idProduct = req.params.id

    if (!idProduct) {
      res.statusCode = 400
      throw new Error("é preciso informar o id do produto que deseja alterar.")
    }

    const {
      id: newId,
      name: newName,
      price: newPrice,
      description: newDescription,
      imageUrl: newImageUrl
    } = req.body

    // verifica se o produto existe.
    const produtctUpdate = products.find((product) => product.id === idProduct)
    if (!produtctUpdate) {
      res.statusCode = 404
      throw new Error("id não cadastrado.")
    }

    // verifica se o novo id é válido ( string ).
    if (newId != undefined) {
      if (typeof newId != "string") {
        res.statusCode = 400
        throw new Error("O novo id precisa ser tipo string.")
      }
    }
    // verifica se o novo id ainda não foi cadastrado.
    if (findId(products, newId)) {
      res.statusCode = 400
      throw new Error("não é possivel atualizar, o id informado já está cadastrado.")
    }
    produtctUpdate.id = newId || produtctUpdate.id
    produtctUpdate.name = newName || produtctUpdate.name
    produtctUpdate.price = newPrice || produtctUpdate.price
    produtctUpdate.imageUrl = newImageUrl || produtctUpdate.imageUrl
    res.status(200).send("Produto atualizado com sucesso.")

  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500)
    }
    if (error instanceof Error) {
      res.send(error.message)
    } else {
      res.send("Erro inesperado")
    }
  }

})

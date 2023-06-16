import express, { Request, Response } from "express";
import cors from 'cors'

import { getAllUsers } from "./endpoints/users/getAllUsers";
import { createUser } from "./endpoints/users/createUser";
import { deleteUser } from "./endpoints/users/deleteUser";
import { createProduct } from "./endpoints/products/createProduct";
import { getAllProducts } from "./endpoints/products/getAllProducts";
import { editProduct } from "./endpoints/products/editProduct";
import { deleteProduct } from "./endpoints/products/deleteProduct";


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
server.get('/users', getAllUsers)

//createUser
server.post("/users", createUser)

// DELETE USER
server.delete('/users/:id', deleteUser)


// ### PRODUCTS

// ## createProduct
server.post("/products", createProduct)

// ## DELETE PRODUCT BY ID
server.delete('/products/:id',deleteProduct)

// getAllProducts  = funcionalidade 1 e  2
server.get("/products", getAllProducts)

//editProduct by Id
server.put('/products/:id',editProduct)

import express, { Request, Response } from "express";
import cors from 'cors'

import { getAllUsers } from "./endpoints/users/getAllUsers";
import { createUser } from "./endpoints/users/createUser";

import { createProduct } from "./endpoints/products/createProduct";
import { getAllProducts } from "./endpoints/products/getAllProducts";
import { editProduct } from "./endpoints/products/editProduct";

import { createPurchase } from "./endpoints/purchases/createPurchase";
import { deletePurchase } from "./endpoints/purchases/deletePurchase";
import { getPurchaseById } from "./endpoints/purchases/getPurchaseById";
//=======================

const server = express()

server.use(express.json())
server.use(cors())

server.listen(5000, () => console.log("sever is on! port 5000"))

server.get("/", (req: Request, res: Response) => {
  res.send("api labecommerce-backend online!")
})

// Get all users 
server.get('/users', getAllUsers)

// Create user
server.post("/users", createUser)

// Create product
server.post("/products", createProduct)

// Get all products  = funcionalidade 1 e  2
server.get("/products", getAllProducts)

// Edit product by id
server.put('/products/:id',editProduct)

// Create purchase
server.post("/purchases", createPurchase)

// Delete purchase
server.delete("/purchases/:id",deletePurchase)

// Get purchase by id
server.get("/purchases/:id",getPurchaseById)


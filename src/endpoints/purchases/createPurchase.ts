import { Request, Response } from "express";
import { PurchaseDb, PurchaseProductsDB } from "../../interfaces";
import { handlerError } from "../handlerError";
import { db } from '../../database/knex'

export async function createPurchase(req: Request, res: Response) {
  try {

    const { id, buyer, total_price, products } = req.body

    if (id == undefined || typeof id != "string" || id.length < 1) {
      res.statusCode = 400
      throw new Error(`'id' is requerid, need to be the string type 
      and must heave at least one character`)
    }
    if (buyer == undefined || typeof buyer != "string" || buyer.length < 1) {
      res.statusCode = 400
      throw new Error(`'buyer' is requirid, need to be the string type
      and must heave at least one character`)
    }
    if (total_price == undefined || typeof total_price != "number" || total_price <= 0) {
      res.statusCode = 400
      throw new Error(`'price' is requerid, need to be te number type 
      and must be greater than zero`)
    }
    if (products == undefined || products.length < 1) {
      res.statusCode = 400
      throw new Error('incomplete purchase, missing products')
    }
    // ===========================================================================
    // verifica se o id e quantidade são válidos 
    let invalidProductType: boolean = false
    let invalidQuantity: boolean = false
    let productNotFound: boolean = false

    for (let product of products) {
      if (product.id == undefined || typeof product.id != "string") {
        invalidProductType = true
        break
      } else {
        if (product.quantity == undefined || typeof product.quantity != "number" || product.quantity <= 0) {
          invalidQuantity = true
          break
        }
      }
    }
    // produto com ID inválido
    if (invalidProductType) {
      res.statusCode = 400
      throw new Error("'id product' is requerid and need to be the string type")
    }
    // produto com quanditade inválida
    if (invalidQuantity) {
      res.statusCode = 400
      throw new Error(`'quantity' is requerid, need to be te number type 
       and must be greater than zero`)
    }
    // verifica se o cliente existe
    let [result] = await db("users").where({ id: buyer })
    if (!result) {
      res.statusCode = 400
      throw new Error("'buyer' not registered")
    }
    // verifica se ja foi cadastrado esse id
    [result] = await db("purchases").where({ id: id })
    if (result) {
      res.statusCode = 400
      throw new Error(`'purchase id' already registered`)
    }
    for (let product of products) {
      const [result] = await db("products").where({ id: product.id })
      if (!result) {
        productNotFound = true
        break
      }
    }
    //produto não localizado 
    if (productNotFound) {
      res.statusCode = 400
      throw new Error("'product' not registered")
    }
    // cria o objeto da nova compra
    const newPurchase: PurchaseDb = {
      "id": id,
      "buyer": buyer,
      "total_price": total_price,
      "created_at": new Date().toISOString().slice(0, 19).replace('T', ' ')
    }
    // criar o objeto do produtos
    const newPurchaseProducts: PurchaseProductsDB[] = []
    
    for (let product  of products) {
      const newProduct: PurchaseProductsDB = {
        product_id: product.id,
        purchase_id: id,
        quantity: product.quantity
      }
      newPurchaseProducts.push(newProduct)
    }
    // salva do banco de dados a compra
    await db("purchases").insert(newPurchase)
    await db("purchases_products").insert(newPurchaseProducts)

    res.status(201).send({ message: "Pedido realizado com sucesso" })
    
  } catch (error:unknown) {
    handlerError(res, error)
  }
}
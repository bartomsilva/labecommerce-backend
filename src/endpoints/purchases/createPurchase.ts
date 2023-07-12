import { Request, Response } from "express";
import { PurchaseDb, PurchaseProductsDB } from "../../interfaces";
import { handlerError } from "../handlerError";
import { db } from '../../database/knex'

export async function createPurchase(req: Request, res: Response) {
  try {

    const { id, buyer, total_price, products } = req.body

    if (id == undefined || typeof id != "string" || id.length < 1) {
      res.statusCode = 422
      // throw new Error(`'id' is requerid, need to be the string type 
      // and must heave at least one character`)
      throw new Error("(id) é obrigatorio e deve ser uma string\n"+
      "com no mínimo 1 caracter")
    }
    if (buyer == undefined || typeof buyer != "string" || buyer.length < 1) {
      res.statusCode = 422
      // throw new Error(`'buyer' is requirid, need to be the string type
      // and must heave at least one character`)
      throw new Error("(buyer) é obrigatorio e deve ser uma string\n"+
      "com no mínimo 1 caracter")
    }
    if (total_price == undefined || typeof total_price != "number" || total_price <= 0) {
      res.statusCode = 422
      // throw new Error(`'price' is requerid, need to be te number type 
      // and must be greater than zero`)
      throw new Error("(total_price) é obrigatorio e deve ser maior do que zero")
    }
    if (products == undefined || products.length < 1) {
      res.statusCode = 422
//      throw new Error('incomplete purchase, missing products')
      throw new Error("lista de produtos é obritória")
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
      res.statusCode = 422
      // throw new Error("'id product' is requerid and need to be the string type")
      throw new Error("(id product) é obrigatorio e deve ser uma string\n"+
      "com no mínimo 1 caracter")
    }
    // produto com quanditade inválida
    if (invalidQuantity) {
      res.statusCode = 422
      // throw new Error(`'quantity' is requerid, need to be te number type 
      //  and must be greater than zero`)
      throw new Error("(quantity) é obrigatoria e deve ser marior do que zero")
    }
    // verifica se o cliente existe
    let [result] = await db("users").where({ id: buyer })
    if (!result) {
      res.statusCode = 404
      // throw new Error("'buyer' not registered")
      throw new Error("'buyer' não encontrado")
    }
    // verifica se ja foi cadastrado esse id
    [result] = await db("purchases").where({ id: id })
    if (result) {
      res.statusCode = 400
      // throw new Error(`'purchase id' already registered`)
      throw new Error(`'purchase id' já cadastrado`)
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
      res.statusCode = 404
      throw new Error("'id product' não encontrado")
    }
    // cria o objeto da nova compra
    const newPurchase: PurchaseDb = {
      "id": id,
      "buyer": buyer,
      "total_price": total_price,
      "created_at": new Date().toISOString().slice(0, 19).replace('T', ' ')
    }

    // salva na tabela
    await db("purchases").insert(newPurchase)

    // criar o objeto do produtos
    
    for (let product  of products) {
      const newProduct: PurchaseProductsDB = {
        product_id: product.id,
        purchase_id: id,
        quantity: product.quantity
      }
      // salva na tabela 
      await db("purchases_products").insert(newProduct)
    }

    // res.status(201).send({ message: "Successfully registered purchase" })
    res.status(201).send({ message: "Pedido realizado com sucesso" })
    
  } catch (error:unknown) {
    handlerError(res, error)
  }
}
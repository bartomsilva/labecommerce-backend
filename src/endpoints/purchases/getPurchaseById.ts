import { Request, Response } from "express";
import { Purchase } from "../../interfaces";
import { db } from '../../database/knex'
import { handlerError } from "../handlerError";

export async function getPurchaseById(req:Request, res:Response){

  const { id:idPurchase} = req.params

  try {
    
    // testa se id  (não foi passado = undefined)
    if(idPurchase === ":id" ) {
      throw new Error("'id' is requerid")      
    }

    // primeira parte ( dados do pedido)
    
    const [resultPurchase] = await
    db.select("purchase.id AS purchaseId", "purchase.buyer AS buyerId",
    "user.name AS buyerName", "user.email AS buyerEmail",
    "purchase.total_price AS totalPrice", "purchase.created_at AS createdAT")
    .from("purchases as purchase")
    .innerJoin("users as user","purchase.buyer","=","user.id")
    .where("purchase.id", "=", idPurchase)

    // se não encontrar nada não estressa o banco de dados procurando itens
    if(resultPurchase===undefined){
      res.status(400).send({message: "purchase not found"})
    }

    // segunda parte produtos do pedido (ítens)
    const resultPurchaseProducts = await
    db.select("product.id", "product.name", "product.price",
    "product.description", "product.image_url AS imageUrl", "pp.quantity")
    .from("purchases_products as pp")
    .innerJoin("products as product","pp.product_id","product.id")
    .where("pp.purchase_id", "=", idPurchase)

    //monta o objeto para ser devolvido
    const result:Purchase = {
      ...resultPurchase,
      products: resultPurchaseProducts
    }
    
    res.status(200).json(result)

  } catch (error:unknown) {
    handlerError(res,error)
  }
}
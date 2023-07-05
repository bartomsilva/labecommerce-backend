import { Request, Response } from "express";
import { Product } from "../../interfaces";
import { db } from '../../database/knex'
import { handlerError } from "../handlerError";

export async function createProduct(req: Request, res: Response) {
  try {
    
    const { id, name, price, description, imageUrl } = req.body

    if (id == undefined || typeof id != "string" || id.length < 1) {
      res.statusCode = 400
      throw new Error(`'id' is requerid, need to be the string type 
      and must heave at least one character`)
    }
    
    if (name == undefined || typeof name != "string" || name.length < 10) {
      res.statusCode = 400
      throw new Error(`'name' is requirid, need to be the string type
      and must heave at least one character`)
    }
    
    if (price == undefined || typeof price != "number" || price <= 0) {
      res.statusCode = 400
      throw new Error(`'price' is requerid and must be greater than zero`)
    }
    
    if (description == undefined || typeof description != "string" || description.length < 5) {
      res.statusCode = 400
      throw new Error(`'description' is requerid, need to be the string type
      and must heave at least one character` )
    }
    
    if (imageUrl == undefined || typeof imageUrl != "string") {
      res.statusCode = 400
      throw new Error(`'image' is requerid`)
    }

    // verifica se ja foi cadastrado esse id
    const [result] = await db("products").select().where({id: id})

    if(result){
      res.statusCode = 400
      throw new Error(`'id' already registered`)
    }

    const newProduct: Product =
    {
      "id": id,
      "name": name,
      "price": price,
      "description": description,
      "image_url": imageUrl
    }

    await db("products").insert(newProduct)
    res.status(201).send({message: "Produto cadastrado com sucesso"})

  } catch (error:unknown) {
    handlerError(res,error)
  }
}
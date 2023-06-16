import { Request, Response } from "express";
import { products } from "../../database/database";
import { findId, handlerError } from "../../roles/rooles";
import { Product } from "../../interfaces";

export function createProduct(req: Request, res: Response) {
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
    handlerError(res,error)
  }
}
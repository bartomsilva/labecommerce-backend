import { Request, Response } from "express";
import { handlerError } from "../handlerError";
import { db } from "../../database/knex"
import { UpdatePro } from "../../interfaces";

export async function editProduct(req: Request, res: Response) {
  try {

    const idPro = req.params.id

    const {
      id: newId,
      name: newName,
      price: newPrice,
      description: newDescription,
      imageUrl: newImage_url
    } = req.body

    const updatePro:UpdatePro = {} 


    // verifica se o novo id é válido ( string ).
    if (newId != undefined) {
      if (typeof newId != "string") {
        res.statusCode = 422
        throw new Error("'id' need to be the string type")
      }
      updatePro.id = newId;
    }

    if (newName !== undefined) {
      if (typeof newName !== "string" || newName.length < 2) {
        res.statusCode = 422
        throw new Error(`'name' need to be the string type and
         heave at least one character`)
      }
      updatePro.name = newName
    }

    if (newPrice !== undefined) {
      if (typeof newPrice !== "number" || newPrice <= 0) {
        res.statusCode = 422
        throw new Error(`'price' need to be the numeric type and 
         must to be greater than zero`)
      }
      updatePro.price = newPrice
    }

    if (newDescription !== undefined) {
      if (typeof newDescription !== "string" || newDescription.length < 2) {
        res.statusCode = 422
        throw new Error(`'description' need to be the string type and 
         heave at least one character`)
      }
      updatePro.description = newDescription
    }

    if (newImage_url !== undefined) {
      if (typeof newImage_url !== "string" || newImage_url.length < 10) {
        res.statusCode = 422
        throw new Error(`'image' need to be the string type`)
      }
      updatePro.image_url = newImage_url
    }

    const checkUpdatePro = Object.values(updatePro)
    if(checkUpdatePro.length<1){
      res.statusCode = 400
      throw new Error("'body' is requerid")
    }

    // // verifica se o produto existe.
    let [result] = await db("products").where({ id: idPro })
    if (!result) {
      res.statusCode = 404
      throw new Error("'id' not found")
    }

    // verifica se o novo ID já foi cadastrado
    if (newId){
      [result] = await db("products").where({ id: newId })
      if (result) {
        res.statusCode = 404
        throw new Error("'id' already exists")
      }
    } 

    await db("products").update(updatePro).where({id:idPro})


    res.status(200).send("Produto atualizado com sucesso")

  } catch (error:unknown) {
    handlerError(res, error)
  }
}
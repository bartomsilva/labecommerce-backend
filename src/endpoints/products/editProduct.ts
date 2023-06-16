import { Request, Response } from "express";
import { products } from "../../database/database";
import { handlerError } from "../../roles/rooles";
import { findId } from "../../roles/rooles";

export function editProduct(req: Request, res: Response){
  try {

    const idProduct = req.params.id

    const {
      id: newId,
      name: newName,
      price: newPrice,
      description: newDescription,
      imageUrl: newImageUrl
    } = req.body
    
    // verifica se o produto existe.
    if (!findId(products,idProduct)){
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

    
    if(newName !== undefined){
      if(typeof newName !== "string" || newName.length<2){
        res.statusCode=400
        throw new Error("o 'name' precisar ser tipo string e ter no mínimo uma letra.")
      }
    }

    if(newPrice !== undefined){
      if(typeof newPrice !== "number" || newPrice<=0){
        res.statusCode=400
        throw new Error("o 'price' precisar ser tipo numérico e ser maior que zero.")
      }
    }
    
    if(newDescription !== undefined){
      if(typeof newDescription !== "string" || newDescription.length<2){
        res.statusCode=400
        throw new Error("a 'description' precisar ser tipo string e ter no mínimo uma letra.")
      }
    }

    if(newImageUrl !== undefined){
      if(typeof newImageUrl !== "string" || newImageUrl.length<10){
        res.statusCode=400
        throw new Error("a 'imageUrl' precisar ser tipo string e ter no mínimo 10 letras.")
      }
    }

    // search product 
    const produtctUpdate = products.find( product => product.id === idProduct)

    // update data
    produtctUpdate.id = newId || produtctUpdate.id
    produtctUpdate.name = newName || produtctUpdate.name
    produtctUpdate.description = newDescription || produtctUpdate.description
    produtctUpdate.price = newPrice || produtctUpdate.price
    produtctUpdate.imageUrl = newImageUrl || produtctUpdate.imageUrl

    res.status(200).send("Produto atualizado com sucesso.")

  } catch (error) {
    handlerError(res,error)
  }

}
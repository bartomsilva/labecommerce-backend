import { Request, Response } from "express";
import { handlerError } from "../handlerError";
import { db } from '../../database/knex'

export async function deletePurchase(req:Request,res:Response){
  
  const { id:idDelete} = req.params
  
  try {
    // teste se id  (não foi passado = undefined)
    if(idDelete === ":id" ) {
      // throw new Error("'id' is requerid")      
      throw new Error("(id) é obrigatório")      
    }
    // 
    const result = await db("purchases").del().where({id: idDelete})
    if(!result){
      res.statusCode = 404
      // throw new Error("cancellation failed 'id' not found")
      throw new Error("(id) não encontrado")
    }

    // res.status(200).send({message: "successfully canceled purchase"})
    res.status(200).send({message: "Pedido cancelado com sucesso"})

  } catch (error:unknown) {
    handlerError(res,error)
  }
}

import { Request, Response } from "express";
import { db } from '../../database/knex'
import { handlerError } from "../handlerError";

export async function deleteUser(req: Request, res: Response){
  try {
    
    const { id:idDelete } = req.params

    if(idDelete==":id"){
      res.status(400)
      throw new Error("'id' is requerid")
    }
    
    const result = await db("users").del().where( {id: idDelete})
    if (!result) {
      res.statusCode = 400
      throw new Error("'id' not found.")
    }
   
    // res.status(200).send("'User' successfully deleted .")
    res.status(200).send("usuário excluído com sucesso")

  } catch (error) {
    handlerError(res,error)
  }
}
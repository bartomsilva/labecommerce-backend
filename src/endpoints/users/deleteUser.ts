import { Request, Response } from "express";
import { db } from '../../database/knex'
import { handlerError } from "../handlerError";

export async function deleteUser(req: Request, res: Response){
  try {
    
    const idDelete = req.params.id
    
    const [ result ] = await db("users").where({ id: idDelete })
    if (!result){
        res.statusCode = 404
        throw new Error("'id' not found.")
    }
      
    await db("users").del().where({ id: idDelete })
    //res.status(200).send("'User' successfully deleted .")
    res.status(201).send({message: "Usuário deletado com sucesso"})

  } catch (error:unknown) {
    handlerError(res,error)
  }
}
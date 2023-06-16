import { Request, Response } from "express";
import { users } from "../../database/database";
import { findId, handlerError } from "../../roles/rooles";

export function deleteUser(req: Request, res: Response){
  try {
    
    const id = req.params.id

    if (!findId(users, id)) {
      res.statusCode = 404
      throw new Error("esse id não existe.")
    }

    const userSelect = users.findIndex((element, index) => {
      if (element.id === id) {
        users.splice(index, 1)
      }
    })

    res.status(200).send("User apagado com sucesso.")

  } catch (error) {
    handlerError(res,error)
  }
}
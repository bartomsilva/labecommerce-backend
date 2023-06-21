import { Request, Response } from "express";
import { users } from "../../database/database";
import { findId, handlerError } from "../../roles/rooles";

export function deleteUser(req: Request, res: Response){
  try {
    
    const id = req.params.id

    if (!findId(users, id)) {
      res.statusCode = 404
      throw new Error("'id' not found.")
    }

    const userSelect = users.findIndex((element, index) => {
      if (element.id === id) {
        users.splice(index, 1)
      }
    })

    res.status(200).send("'User' successfully deleted .")

  } catch (error) {
    handlerError(res,error)
  }
}
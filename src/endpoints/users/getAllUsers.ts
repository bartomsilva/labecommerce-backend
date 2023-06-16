import { Request, Response } from "express";
import { users } from "../../database/database";
import { handlerError } from "../../roles/rooles";

export function getAllUsers(req:Request, res:Response){

  try {
    res.status(200).send(users)
  } catch (error) {
    handlerError(res,error)
  }
}
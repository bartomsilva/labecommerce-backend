import { Request, Response } from "express";
import { handlerError } from "../../roles/rooles";
import { db } from '../../database/knex'

export async function getAllUsers(req:Request, res:Response){

  try {
    const result = await db("users").select("id","name","email","created_at AS createdAt")
    res.status(200).send(result)
  } catch (error) {
    handlerError(res,error)
  }
}
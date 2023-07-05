import { Request, Response } from "express";
import { db } from '../../database/knex'
import { handlerError } from "../handlerError";
import { unknown } from "zod";

export async function getAllUsers(req:Request, res:Response){

  try {
    const result = await db("users").select("id","name","email","password","created_at AS createdAt")
    res.status(200).send(result)
  } catch (error:unknown) {
    handlerError(res, error)
  }
}
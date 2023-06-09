import { Request, Response } from "express";
import { db } from '../../database/knex'
import { handlerError } from "../handlerError";
import { error } from "console";
// import { pg } from "../../database/knex";

export async function getAllUsers(req: Request, res: Response) {

  try {
    const query = req.query.name as string;

    const result =
      query
        ?
        await db("users")
          .select("id", "name", "email", "password", "created_at AS createdAt")
          .where("name", "like", `%${query}%`)
        :
        await db("users")
          .select("id", "name", "email", "password", "created_at AS createdAt")

    // const result = await pg("users").select("id","name","email","password","created_at AS createdAt")
    res.status(200).send(result)
  } catch (error: unknown) {
    handlerError(res, error)
  }
}
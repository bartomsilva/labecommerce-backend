import { Request, Response } from "express";
import { db } from "../../database/knex"
import { handlerError } from "../handlerError";


export async function getAllProducts(req: Request, res: Response){
  try {

    const query = req.query.name as string 
    
    let result 

    if(query){
      result = await db("products")
      .select("id","name","price","description","image_url AS imageUrl")
      .where("name", "LIKE", `%${query}%` )
    } else {
      result = await db("products")
      .select("id","name","price","description","image_url AS imageUrl")
    }

    res.status(200).send(result)

  } catch (error:unknown) {
    handlerError(res,error)
  }
}
import { Request, Response } from "express";
import { products } from "../../database/database";
import { handlerError } from "../../roles/rooles";
import { Product } from "../../interfaces";

export function getAllProducts(req: Request, res: Response){
  try {

    const query = req.query.name as string  

    let result: Product[]

    if (query == undefined) {
      result = products
    } else if (query.length > 0) {
      result = products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))
    } else {
      res.statusCode = 400
      throw new Error("para realizar a pesquisa precisa informar ao menos um caracter.")
    }

    res.status(200).send(result)

  } catch (error) {
    handlerError(res,error)
  }
}
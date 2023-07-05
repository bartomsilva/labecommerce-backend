import { Request, Response } from "express";
import { handlerError } from "../handlerError";

export function deleteProduct(req: Request, res: Response) {
  try {

    const id = req.params.id

    // if (!findId(products, id)) {
    //   res.statusCode = 404
    //   throw new Error("id não cadastrado.")
    // }

    // products.findIndex((element, index) => {
    //   if (element.id === id) {
    //     products.splice(index, 1)
    //   }
    // })

    res.status(200).send("Produto apagado com sucesso.")

  } catch (error:unknown) {
    handlerError(res,error)
  }
}
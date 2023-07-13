import {Response } from 'express'

// mensagens de erro
export const handlerError =(res:Response, error:unknown)=>{
  if (res.statusCode === 200) {
    res.status(500)
  }
  if (error instanceof Error) {
    res.send({ message: error.message.toString()})
  } else {
    res.send("unexpected error.")
  }
}

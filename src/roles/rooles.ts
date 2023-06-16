import {Response } from 'express'

// busca a existência de um id no array indicado
export function findId( db:{id:string}[], id:string):boolean{
  const result = db.find((obj)=>obj.id == id) 
  return result !== undefined
}

// busca a existência de um email no arry indicado
export function findEmail( db:{email:string}[], email:string):boolean{
  const result = db.find((obj)=>obj.email == email) 
  return result !== undefined
}

// mensagens de erro
export const handlerError =(res:Response, error:unknown)=>{
  if (res.statusCode === 200) {
    res.status(500)
  }
  if (error instanceof Error) {
    res.send(error.message)
  } else {
    res.send("Erro inesperado.")
  }
}


// cria um id aleatório
export function createId(length: number): string {
  let id: string = '';
  const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return id;
}

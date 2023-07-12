import { Request, Response } from "express";
import { User } from "../../interfaces";
import { db } from '../../database/knex'
import { handlerError } from "../handlerError";
// import { pg } from "../../database/knex";

export async function createUser(req: Request, res: Response) {

  try {

    const { id, name, email, password, createdAt } = req.body

    if (id == undefined) {
      res.statusCode = 422
      // throw new Error("'id' is required.")
      throw new Error("(id) é obrigatório")
    } else if (typeof id !== "string") {
      res.statusCode = 422
      // throw new Error("'id' need to be the type string.")
      throw new Error("(id) deve ser uma string")
    } else if (id.length < 3) {
      res.statusCode = 422
      // throw new Error("'id' invalid. Must have at least three strings.")
      throw new Error("(id) invalido. Deve ter no mínimo 1 caracter")
    }

    if (name === undefined) {
      res.statusCode = 422
      // throw new Error("'name' is requerid!")
      throw new Error("(name) é obrigatório")
    } else if (typeof name != "string") {
      res.statusCode = 422
      // throw new Error("'name' needs to be the type string.")
      throw new Error("(name) deve ser uma string")
    } else if (name.length < 1) {
      res.statusCode = 422
      // throw new Error("'name' invalid. Must have at least one string.")
      throw new Error("(name) invalido. Deve ter no mínimo 1 caracter")
    }

    if (email === undefined) {
      res.statusCode = 422
      // throw new Error("'email' is requerid.")
      throw new Error("(email) é obrigatório")
    } else if (typeof email !== "string") {
      res.statusCode = 422
      // throw new Error("'email' needs to be the type string.")
      throw new Error("(email) deve ser uma string")
    } else if (!email.match(/^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i)) {
      res.statusCode = 422
      // throw new Error("'email' invalid. Does not meet the standard.")
      throw new Error("(email)' invalido. Não atende os padrões")
    }
    
    if (password == undefined) {
      res.statusCode = 422
      // throw new Error("password' is requerid.")
      throw new Error("(password) é obrigatória")
    }
    if (typeof password != "string"){
      res.statusCode = 422
      throw new Error("(password) deve ser uma string")
    }
    if (!password.match(/^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/g)) {
      res.statusCode = 422
      // throw new Error("'password' must be between 6 and 15 characters,\n"+ 
      //                 "with uppercase and lowercase letters and at least\n"+
      //                 "one number and one special character.")
      throw new Error("(password) deve ter entre 6 e 15 caracteres, incluindo números,\n"+ 
                      "letras minusculas e no mínimo uma letra maiuscula, e um caracter especial")
    }

    const [ result ] = await db("users").where({ id: id }).orWhere({email: email})
    if (result){
        res.statusCode = 400
        // throw new Error("'id or email' already registered.")
        throw new Error("(id ou email) já cadastrado")
    }

    const newUser: User =
    {
      "id": id,
      "name": name,
      "email": email,
      "password": password,
      "created_at": new Date().toISOString().slice(0, 19).replace('T', ' ')
    }

    // salvando do banco de dados
    await db("users").insert(newUser);

    // res.status(201).send({message: "successfully registered user"})
    res.status(201).send({message: "Cadastro realizado com sucesso"})

  } catch (error:unknown) {
    handlerError(res, error)
  }

}
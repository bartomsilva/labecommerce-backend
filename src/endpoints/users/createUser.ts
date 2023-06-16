import { Request, Response } from "express";
import { users } from "../../database/database";
import { findEmail, findId, handlerError } from "../../roles/rooles";
import { User } from "../../interfaces";

export function createUser(req: Request, res: Response) {

  try {

    const { id, name, email, password } = req.body

    if (id == undefined) {
      res.statusCode = 400
      throw new Error("O id é obrigatório.")
    } else if (typeof id != "string") {
      res.statusCode = 400
      throw new Error("O id precisa ser uma string e ter no mínimo 1 caracter.")
    }

    if (name === undefined || typeof name != "string" || name.length < 1) {
      res.statusCode = 400
      throw new Error("O nome é obrigatório, precisa ser do tipo string e ter no mínimo 1 caracter.")
    }

    if (email === undefined || typeof email !== "string") {
      res.statusCode = 400
      throw new Error("O email é obrigatório e precisa ser do tipo string.")
    }

    if (!email.match(/^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i)) {
      res.statusCode = 400
      throw new Error("O email inválido.")
    }

    if (password == undefined) {
      res.statusCode = 400
      throw new Error("a senha é obrigatória.")
    }

    if (!password.match(/^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/g)) {
      res.statusCode = 400
      throw new Error("a password deve possuir entre 6 e 15 caracteres, com letras maiúsculas e minúsculas e no mínimo um número e um caractere especial")
    }

    if (findId(users, id)) {
      res.statusCode = 400
      throw new Error("esse id já foi cadastrado.")
    }

    if (findEmail(users, email)) {
      res.statusCode = 400
      throw new Error("esse email já foi cadastrado.")
    }

    const newUser: User =
    {
      id: id,
      name: name,
      email: email,
      password: password,
      createdAt: new Date().toISOString()   // checar se o projeto mudou
    }

    users.push(newUser)
    res.status(201).send("Cadastro realizado com sucesso.")

  } catch (error) {
    handlerError(res,error)
  }

}
import { Request, Response } from "express";
import { users } from "../../database/database";
import { findEmail, findId, handlerError } from "../../roles/rooles";
import { User } from "../../interfaces";

export function createUser(req: Request, res: Response) {

  try {

    const { id, name, email, password } = req.body

    if (id == undefined) {
      res.statusCode = 400
      throw new Error("'id' is required.")
    } else if (typeof id !== "string") {
      res.statusCode = 422
      throw new Error("'id' need to be the type string.")
    } else if (id.length < 3) {
      res.statusCode = 400
      throw new Error("'id' invalid. Must have at least three strings.")
    }

    if (name === undefined) {
      res.statusCode = 400
      throw new Error("'name' is requerid!")
    } else if (typeof name != "string") {
      res.statusCode = 422
      throw new Error("'name' needs to be the type string.")
    } else if (name.length < 1) {
      res.statusCode = 400
      throw new Error("'name' invalid. Must have at least one string.")
    }

    if (email === undefined) {
      res.statusCode = 400
      throw new Error("'email' is requerid.")
    } else if (typeof email !== "string") {
      res.statusCode = 422
      throw new Error("'email' need to be the type string")
    } else if (!email.match(/^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i)) {
      res.statusCode = 400
      throw new Error("'email' invalid. Does not meet the standard.")
    }

    if (password == undefined) {
      res.statusCode = 400
      throw new Error("password' is requerid.")
    }

    if (!password.match(/^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/g)) {
      res.statusCode = 400
      throw new Error(`
      'password' must be between 6 and 15 characters, 
      with uppercase and lowercase letters and at least
      one number and one special character.`)
    }

    if (findId(users, id)) {
      res.statusCode = 400
      throw new Error("'id' already registered.")
    }

    if (findEmail(users, email)) {
      res.statusCode = 400
      throw new Error("'email' already registered.")
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
    res.status(201).send("Registration done successfully.")

  } catch (error) {
    handlerError(res, error)
  }

}
/* eslint-disable dot-notation */

import { Request, Response, NextFunction } from 'express'
const { Users } = require('../app/models')
const jwt = require('jsonwebtoken')

const Auth = async (req:Request, res:Response, next:NextFunction) => {
  try {
    // console.log(req.header('Bearer'))
    // req.cookies.Token
    // req.header('authorization')
    // console.log(req.cookies['Bearer'])
    const token = req.headers.authorization?.replace('Bearer ', '')
    console.log(token)
    const decoded = jwt.verify(token, 'sabia')
    console.log(decoded)
    /* const usuario = await Users.findOne({
      where: { email: decoded.email, token: token }
    })
    if (!usuario.token == null) {
      throw new Error()
    } */
    // req.token = token
    // req.usuario = usuario
    next()
  } catch (e) {
    res.status(401).send({ error: 'Autenticação Obrigatória' })
  }
}
module.exports = { Auth }

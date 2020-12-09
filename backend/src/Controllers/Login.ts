import { Request, Response } from 'express'
const { Users } = require('../app/models')
const uuid = require('uuid4')
const bcreypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { Op } = require('sequelize')
module.exports = {
  // cadastro de usuário com email único e senha criptografada junto com um ID único personalizado
  async store (req:Request, res:Response) {
    try {
      req.body.password_hash = await bcreypt.hash(req.body.password_hash, 8)
      console.log('asf')
      const user_check = await Users.findAll({
        where: {
          [Op.or]: [
            { email: req.body.email }

          ]
        }
      })
      if (user_check[0]) {
        return res.status(400).json({ mesagem: 'email deve ser único' })
      }
      const { name, email, password_hash } = req.body
      console.log(req.body.password_hash)
      const data = {
        id: uuid(),
        name,
        email,
        password_hash
      }

      console.log(data)
      const user = await Users.create(data)

      return res.json(user)
    } catch (e) {
      return res.status(200).json({ error: 'impossível cadastrar usuário' })
    }
  },
  // listar os usuários cadastrados a partir do token de verificação
  async index (req:Request, res:Response) {
    const user = await Users.findAll()
    return res.json(user)
  },
  // método necessário para fazer o login do usuário
  async LoginVerificar (req:Request, res:Response) {
    try {
      const user = await Users.findOne({
        where: {
          email: req.body.email
        }
      })

      if (!user) {
        throw new Error('Unable to login')
      }
      console.log(user.password_hash)

      const verif = await bcreypt.compare(req.body.password_hash, user.password_hash)
      if (!verif) {
        throw new Error('Unable to login')
      }

      const token = jwt.sign({
        id: user.id,
        email: user.email
      }, 'sabia', {
        expiresIn: '1h'
      })
      res.status(200).send({
        mensagem: 'Certo',
        token: token
      })
    } catch (e) {
      res.status(401).json({ error: 'Enable' })
    }
  }
}

import { Express } from 'express'

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
class AppController {
  express: Express
  constructor () {
    this.express = express()

    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.express.use(cors())

    this.express.use(express.json())
  }

  routes () {
    this.express.use(morgan('dev'))
    this.express.use(require('./routes'))
  }
}

module.exports = new AppController().express

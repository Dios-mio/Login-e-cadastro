
const express = require('express')
const UserControle = require('../src/Controllers/Login')
const { Auth } = require('../src/middleware/auth')
const routes = express.Router()

routes.post('/test', UserControle.store)
routes.get('/user', Auth, UserControle.index)
routes.post('/ver', UserControle.LoginVerificar)
module.exports = routes

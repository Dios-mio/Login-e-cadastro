'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Login extends Model {}
  Login.init({
    id: {
      type: DataTypes.STRING,
      autoIncremenet: true,
      primaryKey: true,
      validate: {
        isUUID: 4
      }
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password_hash: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Users',
    freezeTableName: true
  })
  return Login
}

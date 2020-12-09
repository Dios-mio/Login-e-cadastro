
module.exports = {

  host: '127.0.0.1',
  username: 'postgres',
  password: 'postgres',
  database: 'teste',
  dialect: process.env.DB_DIALECT || 'postgres'

}

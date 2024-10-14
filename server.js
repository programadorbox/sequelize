const db = require('./app/models')
const controller = require('./app/controllers/user.controller.js')
const run = async () => {
 // Crear un Usuario
 const user1 = await controller.createUser({
 name: 'José Alberto',
 })
 const user2 = await controller.createUser({
 title: 'Carlos Mejias',
 })
}
// db.sequelize.sync()
db.sequelize.sync({
 force: true
}).then(() => {
 console.log('Eliminando y resincronizando la base de datos.')
 run()
})
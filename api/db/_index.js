const mongoose = require('mongoose')

const mongoServer = 'mongodb+srv://opiretaoyo:opire465@cluster0.tcho6.mongodb.net/database1?retryWrites=true&w=majority'
// const mongoServer = 'mongodb://127.0.0.1:27017/local?retryWrites=true&w=majority'
const mongoConnection = mongoose.createConnection(mongoServer)

const DietSchema = require('./model/_diet')
const dietSchema = mongoose.Schema(DietSchema)
const Diet = mongoConnection.model('Diet', dietSchema)

const UserSchema = require('./model/_user')
const userSchema = mongoose.Schema(UserSchema)
const User = mongoConnection.model('User', userSchema)

const WorkingHourSchema = require('./model/_workingHour')
const workingHourSchema = mongoose.Schema(WorkingHourSchema)
const WorkingHour = mongoConnection.model('WorkingHour', workingHourSchema)

module.exports = {
    mongoConnection,
    Diet,
    User,
    WorkingHour
}

const mongoLink = 'mongodb+srv://opiretaoyo:opire465@cluster0.tcho6.mongodb.net/database1?retryWrites=true&w=majority'

const DietModel = {
    id: {
        type: String,
        unique: true,
    },
    name: String,
    date: Date,
}

module.exports = {
    mongoLink,
    DietModel,
}

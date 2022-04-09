const mongoose = require('mongoose')
import { mongoLink, DietModel } from './db'

module.exports = async (req, res) => {
    try {
        mongoose.connect(mongoLink)
        const Diet = mongoose.model('Diet', DietModel)
        const result = await Diet.find()
        res.status(200).json(result)
    } catch (error) {
        throw error
    }
}

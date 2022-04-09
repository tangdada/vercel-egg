const mongoose = require('mongoose')
import { mongoLink, DietModel } from './db'

module.exports = async (req, res) => {
    mongoose.connect(mongoLink)
    const id = req.headers['x-real-ip'].split('.').reverse().join('')

    try {
        const Diet = mongoose.model('Diet', DietModel)
        const oneDiet = new Diet({ id })
        await oneDiet.save()
        res.status(200).json(id)
    } catch (error) {
        res.status(451).json(error)
    }
}

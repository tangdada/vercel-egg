// const mongoose = require('mongoose')
const { User } = require('../db/_index')

module.exports = async (req, res) => {
    try {
        const result = await User.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(451).json(error)
        throw error
    }
}

// const mongoose = require('mongoose')
const { Diet } = require('../db')

module.exports = async (req, res) => {
    try {
        const result = await Diet.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(451).json(error)
        throw error
    }
}

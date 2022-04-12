// const mongoose = require('mongoose')
const { WorkingHour } = require('../db/_index')

module.exports = async (req, res) => {
    try {
        const { pageNo = 1, pageSize = 10 } = req.query

        const total = await WorkingHour.count()
        WorkingHour.find()
            .skip((pageNo - 1) * pageSize)
            .limit(parseInt(pageSize))
            .sort({ createTime: -1 })
            .exec((err, doc) => {
                if (err) {
                    res.status(451).json(err)
                } else {
                    res.status(200).json({
                        list: doc,
                        page: { pageNo: parseInt(pageNo), pageSize, total }
                    })
                }
            })
    } catch (error) {
        res.status(451).json(error)
        throw error
    }
}

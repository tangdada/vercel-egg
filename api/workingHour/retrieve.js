// const mongoose = require('mongoose')
const { WorkingHour } = require('../db/_index')

module.exports = async (req, res) => {
    try {
        const id = req.headers['x-real-ip'].split('.').reverse().join('')
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
                        list: markCurrentUser(doc, id),
                        page: { pageNo: parseInt(pageNo), pageSize, total },
                    })
                }
            })
    } catch (error) {
        res.status(451).json(error.message)
    }
}

const markCurrentUser = (list, id) => {
    let copyList = JSON.parse(JSON.stringify(list))
    copyList.map((item) => {
        if (item.id === id) {
            item.isSelf = true
        }
        return item
    })
    return copyList
}

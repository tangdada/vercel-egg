// const mongoose = require('mongoose')
const { Diet, User } = require('../db/_index')

module.exports = async (req, res) => {
    try {
        const userName = req.query.userName
        const food = req.query.food || '1234567'
        // const id = req.headers['x-real-ip'].split('.').reverse().join('')

        const dietVo = {
            userName,
            food,
            createTime: new Date().getTime()
        }

        await validateDiet(dietVo)

        const diet = new Diet(dietVo)
        const savedDiet = await diet.save()
        res.status(200).json(savedDiet._id)
    } catch (error) {
        res.status(451).json(error.message)
    }
}

const validateDiet = async (dietVo) => {
    const existUser = await User.findOne({ name: dietVo.userName })

    if (!existUser) {
        throw new Error('用户不存在')
    }
    if (dietVo.userName) {
        const result = await Diet.find({ userName: dietVo.userName })
        if (result.length >= 200) {
            throw new Error('抱歉，您最多只能添加200条数据')
        }
    }
    const oneDiet = new Diet(dietVo)
    var error = oneDiet.validateSync()
    if (error) {
        error.errors.forEach((val) => {
            throw new Error(val.message)
        })
    }
}

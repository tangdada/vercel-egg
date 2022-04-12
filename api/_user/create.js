// const mongoose = require('mongoose')
const { User } = require('../db/_index')

module.exports = async (req, res) => {
    try {
        const name = req.query.name
        const userVo = {
            name
        }

        await validateUser(userVo)
        const user = new User(userVo)
        const saveUser = await user.save()
        res.status(200).json(saveUser._id)
    } catch (error) {
        res.status(451).json(error.message)
    }
}

const validateUser = async (userVo) => {
    const result = await User.find()
    if (result.length >= 200) {
        throw new Error('抱歉，您最多只能添加200个用户')
    }
    if (result.some((item) => item.name === userVo.name)) {
        throw new Error('抱歉，姓名已经存在，请换一个')
    }
}

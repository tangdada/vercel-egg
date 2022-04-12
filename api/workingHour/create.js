// const mongoose = require('mongoose')
const { WorkingHour } = require('../db/_index')

module.exports = async (req, res) => {
    try {
        // const id = req.headers['x-real-ip'].split('.').reverse().join('')
        const id = req.headers['host'].split('.').reverse().join('') + Math.random()
        // const name = req.query.name
        const { startTime, endTime, job, gender, age } = req.query
        const workHourVo = {
            id,
            startTime,
            endTime,
            job,
            gender,
            age,
            createTime: new Date().getTime()
        }

        await validateWorkingHour(workHourVo)
        const wh = new WorkingHour(workHourVo)
        const saveWorkingHour = await wh.save()
        res.status(200).json(saveWorkingHour._id)
    } catch (error) {
        res.status(451).json(error.message)
    }
}

const validateWorkingHour = async (workHourVo) => {
    const result = await WorkingHour.find({ id: workHourVo.id })
    if (result.length > 0) {
        throw new Error('抱歉，只能添加一条数据')
    }
}

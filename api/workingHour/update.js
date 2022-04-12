// const mongoose = require('mongoose')
const { WorkingHour } = require('../db/_index')

module.exports = async (req, res) => {
    try {
        const id = req.headers['x-real-ip'].split('.').reverse().join('')
        // const id = req.headers['host'].split('.').reverse().join('')
        // const name = req.query.name
        const { startTime, endTime, job, gender, age, company, remark } = req.query
        const workHourVo = {
            id,
            startTime,
            endTime,
            job,
            company,
            gender,
            age,
            remark,
            updateTime: new Date().getTime(),
        }
        const oldWorkingHour = await WorkingHour.findOneAndUpdate({ id }, workHourVo)
        res.status(200).json(oldWorkingHour)
    } catch (error) {
        res.status(451).json(error.message)
    }
}

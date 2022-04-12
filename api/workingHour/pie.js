const { WorkingHour } = require('../db')

module.exports = async (req, res) => {
    try {
        const result = await WorkingHour.find()
        const endTimeGroup = groupByEndTime(result)

        res.status(200).json(endTimeGroup)
    } catch (error) {
        res.status(451).json(error)
        throw error
    }
}

const groupByEndTime = (list) => {
    let map = {}
    list.forEach((item) => {
        if (map[item.endTime]) {
            map[item.endTime] += 1
        } else {
            map[item.endTime] = 1
        }
    })
    return map
}

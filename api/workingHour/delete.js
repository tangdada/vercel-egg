const { WorkingHour } = require('../db/_index')

module.exports = async (req, res) => {
    try {
        const userId = req.headers['x-real-ip'].split('.').reverse().join('')
        const { id } = req.query

        if (userId !== id) {
            throw new Error('抱歉，你无权删除这条数据')
        }
        const result = await WorkingHour.remove({ id })
        res.status(200).json(result)
    } catch (error) {
        res.status(451).json(error.message)
    }
}

const WorkHourSchema = {
    id: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    job: {
        type: String
    },
    company: {
        type: String,
        maxlength: 16
    },
    gender: {
        type: String,
        enum: ['男', '女']
    },
    age: {
        type: String
    },
    remark: {
        type: String,
        maxlength: 140
    },
    createTime: {
        type: Number
    },
    updateTime: {
        type: Number
    }
}

module.exports = WorkHourSchema

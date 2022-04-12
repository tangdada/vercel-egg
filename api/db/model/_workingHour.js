const WorkHourSchema = {
    id: {
        type: String,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    job: {
        type: String,
    },
    gender: {
        type: String,
        maxlength: ['男', '女'],
    },
    age: {
        type: String,
    },
    createTime: {
        type: Number,
    },
    updateTime: {
        type: Number,
    },
}

module.exports = WorkHourSchema

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
        maxlength: [16, '公司名称不能超过16个字']
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
        maxlength: [140, '备注不能超过140个字']
    },
    createTime: {
        type: Number
    },
    updateTime: {
        type: Number
    }
}

module.exports = WorkHourSchema

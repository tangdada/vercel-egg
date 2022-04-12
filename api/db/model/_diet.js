const DietSchema = {
    userName: {
        type: String,
        required: true,
    },
    food: {
        type: String,
        maxlength: [32, '名称不能超过32个字'],
    },
    recordDate: Date,
    src: {
        type: String,
        enum: ['外卖', '便利店', '自己做'],
    },
    remark: {
        type: String,
        maxlength: [100, '备注不能超过100个字'],
    },
    createTime: {
        type: Number,
    },
}

module.exports = DietSchema

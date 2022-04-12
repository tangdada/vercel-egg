const UserSchema = {
    name: {
        type: String,
        required: true,
        maxlength: [20, '姓名不能超过20个字'],
    },
}

module.exports = UserSchema

//mongodb模块账号密码
const mongoose = require('mongoose');
module.exports = async (req, res) => {
    try {
            mongoose.connect('mongodb+srv://opiretaoyo:opire465@cluster0.tcho6.mongodb.net/database1?retryWrites=true&w=majority');
            //mongoose.connect('mongodb+srv://你的用户名:你的密码@cluster0.ltzqy.mongodb.net/test');
            const Cat = mongoose.model('Cat', { name: String });
            const kitty = new Cat({ name: 'Zildjian' });
            await kitty.save().then(() => console.log('meow'));
    } catch (error) {
        throw error
    }
  res.status(200).json('save done');
}
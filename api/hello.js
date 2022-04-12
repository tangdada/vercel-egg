module.exports = function (request, response) {
    const { name } = request.query
    response.status(200).send(`Hello haha ${name || '无名氏'}!`)
}

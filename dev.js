const http = require('http')
const express = require('express')
let app = express()

app.get('/', require('./api/hello'))
app.get('/diet/retrieve', require('./api/diet/retrieve'))
app.get('/diet/create', require('./api/diet/create'))

app.get('/user/create', require('./api/user/create'))
app.get('/user/retrieve', require('./api/user/retrieve'))

app.get('/workingHour/create', require('./api/workingHour/create'))
app.get('/workingHour/update', require('./api/workingHour/update'))
app.get('/workingHour/retrieve', require('./api/workingHour/retrieve'))
app.get('/workingHour/pie', require('./api/workingHour/pie'))

let server = http.createServer(app)
server.listen('8080', function () {
    console.log('应用启动成功: localhost:8080')
})

'use strict'
var express = require('express')
var routes = require('./api/routes')
var app = express()
var port = process.env.PORT || 8081

routes(app)
app.listen(port)
console.log('server started on port '+ port)
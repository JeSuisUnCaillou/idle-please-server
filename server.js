'use strict'
var express = require('express')
var bodyParser = require('body-parser')
var routes = require('./api/routes')

var app = express()
var port = process.env.PORT || 8081

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
routes(app)

app.listen(port)
console.log('server started on port '+ port)
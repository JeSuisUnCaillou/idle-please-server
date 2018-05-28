'use strict'
var express = require('express')

var app = express()
var port = process.env.PORT || 8081

app.listen(port)
console.log('server started on port '+ port)
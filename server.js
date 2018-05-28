var express = require('express')

var app = express()
var port = process.env.PORT || 8081
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.send('Vous êtes à l\'accueil')
})

app.listen(port)
console.log('server started on port '+ port)
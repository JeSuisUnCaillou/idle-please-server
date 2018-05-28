'use strict'
module.exports = (app) => {
  app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.send('Please don\'t')
  })
  .post('/scores', (req, res) => {
    res.send('ola')
  })
}
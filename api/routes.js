'use strict'
module.exports = (app) => {
  let controller = require('./controller')

  app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.send('Please don\'t')
  })
  .post('/scores', (req, res) => {
    controller.test(req.body)
      .then((result) => {
        res.send(result)
      })
      .catch((error) => {
        res.status(400)
        res.send({ error: error })
      })
  })
}
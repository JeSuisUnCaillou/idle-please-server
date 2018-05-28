'use strict'

let model = require('./model')

module.exports = {
  test (body) {
    return model.send(body)
  }
}
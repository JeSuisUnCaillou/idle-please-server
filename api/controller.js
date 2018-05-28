'use strict'

let model = require('./model')

module.exports = {
  test (body) {
    return new Promise((resolve, reject) => {
      model.send(body)
        .then((result) => {
          return resolve(result)
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }
}
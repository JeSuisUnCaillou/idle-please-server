'use strict'
let MongoClient = require('mongodb').MongoClient

let mongoUser = process.env.MONGOUSER
let mongoPassword = process.env.MONGOPASSWORD
let mongoDomain = process.env.MONGODOMAIN
let mongoPort = process.env.MONGOPORT
let dbName = 'idle-please'
let mlabUrl = `mongodb://${mongoUser}:${mongoPassword}@${mongoDomain}:${mongoPort}/${dbName}`

module.exports = {
  send (payload) {
    MongoClient.connect(mlabUrl)
    .then((client) => {
      console.log('Asking mlab...')
      const db = client.db(dbName)
      const collection = db.collection('scores')
      collection.insert(
        payload,
        function(err, result) {
          console.log(`Inserted document into the collection`)
          client.close()
        })
    })
  }
}

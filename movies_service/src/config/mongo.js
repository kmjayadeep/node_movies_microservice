const MongoClient = require('mongodb').MongoClient

const getMongoUrl = (options) => {
  const url = options.servers
    .reduce((prev, cur) => prev + cur + ',', 'mongodb://')
  return url.slice(0, -1)
}


const connect = (options, mediator) => {
  mediator.once('boot.ready', () => {
    MongoClient.connect(getMongoUrl(options), options.parameters(options.repl), (err, client) => {
      if (err) {
        mediator.emit('db.error', err)
      }
      var db = client.db(options.db)
      mediator.emit('db.ready', db)
    })
  })
}

module.exports = Object.assign({}, { connect })
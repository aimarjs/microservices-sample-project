const MongoClient = require('mongodb')

const getMongoURL = (options) => {
  const url = options.servers
    .reduce((prev, cur) => prev + cur + ',', 'mongodb://')
  return `${url.substr(0, url.length - 1)}/${options.db}`
}

const settings = {
  w: 'majority',
  wtimeout: 10000,
  j: true,
  readPreference: 'ReadPreference.SECONDARY_PREFERRED',
  native_parser: false,
  autoReconnect: true,
  poolSize: 10,
  keepAlive: 300,
  connectTimeoutMS: 30000,
  socketTimeoutMS: 30000,
  replicaSet: 'rs1',
  ha: true,
  haInterval: 10000,
  poolSize: 10,
}

// const authenticate = (options) => {
//   db.admin().authenticate(options.user, options.pass, (err, result) => {
//     if (err) {
//       mediator.emit('db.error', err)
//     }
//     mediator.emit('db.ready', db)
//   })
// }

const connect = (options, mediator) => {
  mediator.once('boot.ready', () => {
    MongoClient.connect(
      getMongoURL(options), settings, (err, db) => {
        if (err) {
          mediator.emit('db.error', err)
        }
        // mediator.emit('db.ready', db)
        db.admin().authenticate(options.user, options.pass, (err, result) => {
          if (err) {
            mediator.emit('db.error', err)
            console.log(err);
          }
          mediator.emit('db.ready', db)
        })
      })
  })
}

module.exports = Object.assign({}, {connect})

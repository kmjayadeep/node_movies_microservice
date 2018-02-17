const dbSettings = {
  db: process.env.DB || 'movies',
  user: process.env.DB_USER || 'root',
  pass: process.env.DB_PASS || '',
  repl: process.env.DB_REPLS || 'rs1',
  servers: (process.env.DB_SERVERS) ? process.env.DB_SERVERS.split(' ') : [
    'localhost:27017'
  ],
  parameters: (replset='rs1') => ({
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
    // replset: {
    //   replicaSet: replset,
    //   ha: true,
    //   haInterval: 10000,
    //   poolSize: 10,
    //   socketoptions: {
    //     keepAlive: 300,
    //     connectTimeoutMS: 30000,
    //     socketTimeoutMS: 30000
    //   }
    // }
  })
}

const serverSettings = {
  port: process.env.PORT || 3000
}

module.exports = Object.assign({}, { dbSettings, serverSettings })

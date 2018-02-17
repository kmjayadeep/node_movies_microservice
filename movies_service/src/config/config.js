const dbSettings = {
  db: process.env.DB || 'movies',
  user: process.env.DB_USER || 'punisher',
  pass: process.env.DB_PASS || 'mypass123',
  repl: process.env.DB_REPLS || 'rs1',
  servers: (process.env.DB_SERVERS) ? process.env.DB_SERVERS.split(' ') : [
    '192.168.99.100:27017',
    '192.168.99.101:27017',
    '192.168.99.102:27017'
  ],
  parameters: (replset = 'rs1') => ({
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
    replicaSet: replset,
    ha: true,
    haInterval: 10000,
    poolSize: 10,
    authSource: 'admin'
  })
}
const serverSettings = {
  port: process.env.PORT || 3000
}
module.exports = Object.assign({}, { dbSettings, serverSettings })
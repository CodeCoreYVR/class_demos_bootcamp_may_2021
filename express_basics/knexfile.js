// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      datbase: 'express_rest_posts',
    },
    migrations: {
      tableName: 'migrations',
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds'
    }
  },


};

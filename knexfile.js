// Update with your config settings.

module.exports = {
    development: {
      client: "sqlite3",
      connection: {
        filename: "./data/data.bookr"
      },
      useNullAsDefault: true,
      migrations: {
        directory: "./data/migrations",
        tableName: "dbmigrations"
      },
      seeds: { directory: "./data/seeds" }
    },
  
    production: {
      client: "postgresql",
      connection: {
        database: "my_db",
        user: "username",
        password: "password"
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: "knex_migrations"
      }
    }
  };
  
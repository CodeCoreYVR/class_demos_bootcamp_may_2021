
exports.up = function(knex) {
  return knex.schema.createTable('posts', table => {
      table.increments('id'); //creates an autoincrementing column named 'id' = 'id' SERIAL in SQL
      table.string('title'); // "title" VARCHAR(255)
      table.text('content'); //"content" TEXT
      table.integer('view_count'); //"view_count" INTEGER
      table.timestamp('created_at').defaultTo(knex.fn.now()); //created_at timestamp defaulted to time now()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('posts')
};

//The up function is what is run when we migrate:latest
//The down function is what is run when we rollback our migration


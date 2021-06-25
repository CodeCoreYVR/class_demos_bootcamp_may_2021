
exports.up = function(knex) {
  return knex.schema.table('posts', table => {
      table.string('image_url'); //Add column of image_url with type VARCHAR(255)
  })
};

exports.down = function(knex) {
  return knex.schema.table('posts', table => {
      table.dropColumn('image_url'); //Drop the column image_url
  })
};

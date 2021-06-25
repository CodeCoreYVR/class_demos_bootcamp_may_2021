const faker = require('faker')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts')
    .del()
    .then(function () {
      // Inserts seed entries
      //generate an array of 1000 posts using faker
      const posts = Array.from({ length: 1000 }).map(() => {
        return {
          title: faker.company.catchPhrase(),
          content: faker.lorem.paragraph(),
          image_url: faker.image.imageUrl(),
          view_count: faker.random.number(100),
          created_at: faker.date.past()
        };
      })
      //Insert seed entries
      //Inside of a callback passed to the the function
      //Always return the knex query that you create!!!!
      return knex('posts').insert(posts);
    });
};

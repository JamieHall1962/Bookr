exports.up = function(knex) {
  return knex.schema
    .createTable("users", function(users) {
      users.increments('id');

      users
        .string("name", 128)
        .notNullable()
        .unique();

      users.string("password", 255).notNullable();
    })
    .createTable("books", function(books) {
      books.increments('id');

      books.text("title", 255).notNullable();

      books.text("author", 255).notNullable();

      books.text("publisher", 255).notNullable();

      books.text("image_url", 255).notNullable();

      books.text("brief_desc", 128).notNullable();

      books.text("detailed_desc", 255).notNullable();
    })
    .createTable("reviews", function(reviews) {
      reviews.increments('id');

      reviews.text("review", 255).notNullable();

      reviews
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users");

      reviews
        .integer("book_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("books");

      reviews.integer("rating").notNullable();

      reviews.unique(["user_id", "book_id"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("books")
    .dropTableIfExists("reviews");
};

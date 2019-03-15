const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { name: "Davina", password: bcrypt.hashSync("Taylor", 14) },
        { name: "Edward", password: bcrypt.hashSync("Jeong", 14) },
        { name: "Ilya", password: bcrypt.hashSync("Yelizarov", 14) },
        { name: "Jamie", password: bcrypt.hashSync("Hall", 14) },
        { name: "Joshua", password: bcrypt.hashSync("Smoot", 14) }
      ]);
    });
};

// book routes will go here

const express = require("express");
const db = require("../data/dbConfig.js");
const { validateToken } = require("../auth/authenticate");
const router = express.Router();

router.get("/", (req, res) => {
  db("books")
    .then(books => {
      res.status(200).json(books);
    })
    .catch(err =>
      res.status(500).json({
        Message: "Server error. Unable to retrieve books"
      })
    );
});

router.get("/:id", (req, res) => {
  const book_id = req.params.id;

  db("books")
    .where({ id: book_id })
    .first()
    .then(book => {
      res.status(200).json(book);
    })
    .catch(err =>
      res.status(500).json({
        Message: "Server error. Unable to retrieve book"
      })
    );
});

// this is to delete a book. Also have to delete all the reviews associated with that book

router.delete("/:id", validateToken, (req, res) => {
  const book_id = req.params.id;
  db("reviews")
    .where({ book_id: book_id })
    .delete()
    .then(book => {
      db("books")
        .where({ id: book_id })
        .first()
        .delete()
        .then( () => {
         
          db("books")
          .then(books => {
            console.log("Books:  ", books);
            res.status(200).json({message: "The book has been deleted" , books });
          })
        });
    })
    .catch(err =>
      res.status(500).json({ Message: "Server Error. Cannot delete book" })
    );
});

module.exports = router;

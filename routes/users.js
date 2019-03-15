const express = require("express");
const db = require("../data/dbConfig.js");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { restricted, generateToken } = require("../auth/authenticate");


router.get("/", restricted, (req, res) => {
  db("users")
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err =>
      res.status(500).json({
        Message: "Server Error. Can't get users"
      })
    );
});

router.post("/login", (req, res) => {
  const { name, password } = req.body;

  db("users")
    .where({ name: name })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ id: user.id, name: user.name, token, message: `Welcome ${name}` });
      } else {
        res.status(401).json({ message: "You shall not pass!" });
      }
    })
    .catch(err =>
      res.status(500).send({ message: "Server error. Can't log in" })
    );
});

router.post("/register", (req, res) => {
  const { name, password } = req.body;
  if (!name || !password)
    res
      .status(422)
      .json({ message: "You must include the requested information" });

  const hash = bcrypt.hashSync(password, 14);

  db("users")
    .insert({ name, password: hash })
    .then(ids => {
      const id = ids[0];

      db("users")
        .where({ id })
        .first()
        .then(user => {
          const token = generateToken(user);
          res
            .status(201)
            .json({ id: user.id, token, message: "User successfully added" });
        })

        .catch(err => res.status(500).send(err));
    })
    .catch(err => res.status(500).send({message: "Server error. Most likely you are trying to enter a User name that already exists"}));
});

module.exports = router;

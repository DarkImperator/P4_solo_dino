const models = require("../models")

const browse = (req, res) => {
  models.articles
    .findAllExtended()
    .then(([articles]) => {
      res.send(articles)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send("Error retrieving data from database articles")
    })
}

const read = (req, res) => {
  models.articles
    .find(req.params.id)
    .then(([articles]) => {
      res.json(articles)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send("Error retrieving data from database articles")
    })
}

module.exports = {
  browse,
  read,
}

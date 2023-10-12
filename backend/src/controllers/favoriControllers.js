const models = require("../models")

const destroy = (req, res) => {
  const { utilisateurID, articleID } = req.body

  models.favori
    .deleteFavori(utilisateurID, articleID)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404)
      } else {
        res.sendStatus(204)
      }
    })
    .catch((err) => {
      console.error(err)
      res.status(500)
    })
}

const add = (req, res) => {
  const { utilisateurID, articleID } = req.body

  models.favori
    .add(utilisateurID, articleID)
    .then(([result]) => {
      res.sendStatus(201)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const verifyArticleIsFavoriteForUser = (req, res) => {
  const userId = parseInt(req.params.userId, 10)
  const articleID = parseInt(req.params.articleID, 10)
  console.info("userId", userId)
  console.info("articleID", articleID)

  models.favori
    .verifyArticleIsFavoriteForUser(userId, articleID)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404)
      } else {
        res.send(rows)
      }
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

module.exports = {
  destroy,
  add,
  verifyArticleIsFavoriteForUser,
}

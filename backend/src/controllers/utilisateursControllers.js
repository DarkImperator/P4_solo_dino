const models = require("../models")

const add = (req, res) => {
  const infos = req.body
  console.info("infos__C", infos)

  models.utilisateurs
    .insert(infos)
    .then(([result]) => {
      res.json(result.insertId)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const browse = async (req, res) => {
  try {
    const [results] = await models.utilisateurs.findAll()
    res.send(results)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}

const readUserByPseudoWithPassword = async (req, res, next) => {
  const pseudo = req.body.pseudo
  try {
    const [result] = await models.utilisateurs.findByPseudowithHashedPassword(
      pseudo
    )
    if (result[0] == null) {
      res.sendStatus(404)
    } else {
      req.user = result[0]
      next()
    }
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}

const sendUserWhoHasGoodPseudoAndPassword = async (req, res) => {
  const pseudo = req.body.pseudo
  try {
    const [result] =
      await models.utilisateurs.findUserWhoHasGoodPseudoAndPassword(pseudo)
    if (result[0] == null) {
      res.sendStatus(404)
    } else {
      res.send(result[0])
    }
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}

module.exports = {
  add,
  browse,
  readUserByPseudoWithPassword,
  sendUserWhoHasGoodPseudoAndPassword,
}

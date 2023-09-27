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

module.exports = {
  add,
  browse,
}

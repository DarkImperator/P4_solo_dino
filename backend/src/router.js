const express = require("express")

const router = express.Router()

const { hashPassword, verifyPassword } = require("./services/authentification")

const articlesControllers = require("./controllers/articlesControllers")
const utilisateursControllers = require("./controllers/utilisateursControllers")
const favoriControllers = require("./controllers/favoriControllers")

router.get("/articles", articlesControllers.browse)
router.get("/articles/:id", articlesControllers.read)

router.get("/utilisateurs", utilisateursControllers.browse)
router.post(
  "/signup",
  // validateUserDataSignup,
  // utilisateursControllers.verifyEmailAndLogin,
  hashPassword,
  utilisateursControllers.add
)
router.post(
  "/login",
  // validateUserDataLogin,
  utilisateursControllers.readUserByPseudoWithPassword,
  verifyPassword,
  utilisateursControllers.sendUserWhoHasGoodPseudoAndPassword
)

router.post("/favori", favoriControllers.add)
router.delete("/favori", favoriControllers.destroy)
router.get(
  "/utilisateurs/:userId/article/:articleID",
  favoriControllers.verifyArticleIsFavoriteForUser
)

module.exports = router

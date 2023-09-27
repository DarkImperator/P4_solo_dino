const express = require("express")

const router = express.Router()

// const { hashPassword, verifyPassword } = require("./services/authentification")
const { hashPassword } = require("./services/authentification")

const articlesControllers = require("./controllers/articlesControllers")
const utilisateursControllers = require("./controllers/utilisateursControllers")

router.get("/articles", articlesControllers.browse)
router.get("/articles/:id", articlesControllers.read)

// router.post(
//   "/login",
//   // validateUserDataLogin,
//   // utilisateursControllers.readUserByEmailWithPassword,
//   verifyPassword,
//   utilisateursControllers.sendUserWhoHasGoodEmailAndPassword
// )

router.get("/utilisateurs", utilisateursControllers.browse)
router.post(
  "/signup",
  // validateUserDataSignup,
  // utilisateursControllers.verifyEmailAndLogin,
  hashPassword,
  utilisateursControllers.add
)

module.exports = router

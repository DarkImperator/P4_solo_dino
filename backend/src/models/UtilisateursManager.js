const AbstractManager = require("./AbstractManager")

class UtilisateursManager extends AbstractManager {
  constructor() {
    super({ table: "utilisateurs" })
  }

  insert(infos) {
    return this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, pseudo, email, hashedPassword, img, password) VALUES (?,?,?,?,?,?,?)`,
      [
        infos.firstname,
        infos.lastname,
        infos.pseudo,
        infos.email,
        infos.hashedPassword,
        infos.img,
        infos.password,
      ]
    )
  }

  findByPseudowithHashedPassword(pseudo) {
    return this.database.query(
      `SELECT id, firstname, lastname, hashedPassword FROM ${this.table} WHERE pseudo = ?`,
      [pseudo]
    )
  }

  findUserWhoHasGoodPseudoAndPassword(pseudo) {
    return this.database.query(
      `SELECT id, firstname, lastname, pseudo, email, img, inscription_date FROM ${this.table} WHERE pseudo = ?`,
      [pseudo]
    )
  }
}

module.exports = UtilisateursManager

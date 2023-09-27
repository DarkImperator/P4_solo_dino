const AbstractManager = require("./AbstractManager")

class UtilisateursManager extends AbstractManager {
  constructor() {
    super({ table: "utilisateurs" })
  }

  insert(infos) {
    console.info("infos__M", infos)
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
}

module.exports = UtilisateursManager

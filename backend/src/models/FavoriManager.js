const AbstractManager = require("./AbstractManager")

class ArticlesManager extends AbstractManager {
  constructor() {
    super({ table: "favori" })
  }

  deleteFavori(utilisateurID, articleID) {
    return this.database.query(
      `DELETE FROM ${this.table} WHERE utilisateur_id=? AND articles_id= ?`,
      [utilisateurID, articleID]
    )
  }

  add(utilisateurID, articleID) {
    return this.database.query(
      `INSERT INTO ${this.table} (utilisateur_id, articles_id) VALUES (?, ?)`,
      [utilisateurID, articleID]
    )
  }

  verifyArticleIsFavoriteForUser(utilisateurID, articleID) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE utilisateur_id=? AND articles_id=?`,
      [utilisateurID, articleID]
    )
  }
}

module.exports = ArticlesManager

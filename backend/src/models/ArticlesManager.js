const AbstractManager = require("./AbstractManager")

class ArticlesManager extends AbstractManager {
  constructor() {
    super({ table: "articles" })
  }

  findAllExtended() {
    return this.database
      .query(`SELECT ${this.table}.id, nom_typeArt, nom_article, img, size_item_Llh, color_main, color_sec, name_env, name_alim, nombre_element, prix
    FROM ${this.table}
    INNER JOIN  type_article ON type_item_id = type_article.id
    INNER JOIN  environnement ON env_id = environnement.id
    INNER JOIN  alimentation ON food_id = alimentation.id
    ORDER BY ${this.table}.id`)
  }
}

module.exports = ArticlesManager

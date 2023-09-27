import React, { useState, useContext } from "react"
import fullStar from "../assets/img/etoile-pleine.png"
import emptyStar from "../assets/img/etoile-vide.png"

import "./CarteMag.scss"

import UserContext from "../components/UserContext"
import dinoDefault from "../assets/img/dino_defaut.avif"

const CarteMag = ({ dino }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const { user, setUser } = useContext(UserContext)

  const handleClickFavorite = () => {
    console.info(setUser) // <=============== A supprimer, pour eviter un erreur pdt le dev
    setIsFavorite(!isFavorite)
    // if (user !== null) {
    //   setIsFAvorite(!isFavorite)
    //   if (isFavorite) {
    //     axios.delete(`http://localhost:4242/favorite`, {
    //       data: {
    //         utilisateurID: user.id,
    //         scenarioID: scenario.id,
    //       },
    //     })
    //   } else {
    //     axios.post(`http://localhost:4242/favorite`, {
    //       utilisateurID: user.id,
    //       scenarioID: scenario.id,
    //     })
    //   }
    // } else {
    //   alert("Please log in to add favorites")
    // }
  }

  // const dinox = [
  //   {
  //     nom: "Tyrannosaure Rex Bleu",
  //     img: "https://www.schleich-s.com/media/catalog/product/cache/83692542a9c74a6d25222cd552a583b2/7/2/72155_main_v20_tp.jpg",
  //     taille: "28.0x09.5x14.0",
  //     couleur1: "bleue",
  //     couleur2: "rouge",
  //     env: "terrestre",
  //     alim: "carnivore",
  //     prix: 30,
  //   },
  // ]

  return (
    <>
      <div className="carteGlobal">
        <div className="test">
          <div className="nameFavorite">
            <p>{dino.nom_article}</p>
            {user !== null && (
              <img
                src={isFavorite ? fullStar : emptyStar}
                onClick={handleClickFavorite}
                alt="Dino favori ?"
              />
            )}
          </div>
          <img
            src={dino.img === null ? dinoDefault : dino.img}
            alt={dino.nom}
          />
          <p>Taille (Lxlxh) en cm : {dino.size_item_Llh}</p>
          <p>Couleur principale : {dino.color_main}</p>
          <p>Couleur secondaire : {dino.color_sec}</p>
          <p>Environnement : {dino.name_env}</p>
          <p>Regime alimentaire : {dino.name_alim}</p>
          <p>
            Prix : {dino.prix}
            {" €"}
          </p>
        </div>
      </div>
    </>
  )
}

export default CarteMag

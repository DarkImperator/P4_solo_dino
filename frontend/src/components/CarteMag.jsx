// import React, { useState, useContext, useEffect } from "react"
import React, { useState, useContext } from "react"
import fullStar from "../assets/img/etoile-pleine.png"
import emptyStar from "../assets/img/etoile-vide.png"
import cartBlack from "../assets/img/cart_black.png"
import cartGold from "../assets/img/cart_gold.png"
import dinoDefault from "../assets/img/dino_defaut.avif"

// import tyr1 from "../assets/img/tyran_noir1.webp"
// import tyr2 from "../assets/img/tyran_bleu2.webp"
// import the1 from "../assets/img/theri_noir3.webp"
// import que1 from "../assets/img/quetz_marron4.webp"
// import bra1 from "../assets/img/brach_vert5.webp"
// import mos1 from "../assets/img/mosas_turquoise6.webp"
// import edm1 from "../assets/img/edmon_beigeasse7.webp"
// import vec1 from "../assets/img/vehicule_captur8.webp"
// import str1 from "../assets/img/station_recherche9.webp"

import "./CarteMag.scss"

import MyContext from "../components/MyContext"

import { useNavigate } from "react-router-dom"
import axios from "axios"

const CarteMag = ({ dino }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isAdd, setIsAdd] = useState(false)

  const { user } = useContext(MyContext)

  const navigate = useNavigate()

  // pour être rediriger vers le scenario au clic de l'image
  // const handleGoToScenarioSelected = () => {
  //   navigate("//magasin/:id", { state: scenario })
  // }

  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite)
    // console.info("uid", user.id)
    // console.info("aid", dino.id)
    if (user !== null) {
      setIsFavorite(!isFavorite)
      if (isFavorite) {
        axios.delete(`http://localhost:4243/favori`, {
          data: {
            utilisateurID: user.id,
            articleID: dino.id,
          },
        })
      } else {
        axios.post(`http://localhost:4243/favori`, {
          utilisateurID: user.id,
          articleID: dino.id,
        })
      }
    } else {
      alert("Please log in to add favorites")
    }
  }

  const addToCart = () => {
    setIsAdd(!isAdd)
  }

  // A adapter pour aller chercher le favori ....
  // useEffect(() => {
  //   if (user !== null) {
  //     axios
  //       .get(`http://localhost:4243/utilisateurs/${user.id}/article/${dino.id}`)
  //       .then(({ data }) => {
  //         setIsFavorite(true)
  //       })
  //       .catch(() => setIsFavorite(false))
  //   }
  // }, [])

  return (
    <>
      <div className="carteGlobal">
        <div className="mainContent">
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
            src={
              dino.img === "null" || dino.img === "NULL"
                ? dinoDefault
                : `http://localhost:4243${dino.img}`
            }
            alt={dino.nom}
          />
          <p>Environnement : {dino.name_env}</p>
          <p>Regime alimentaire : {dino.name_alim}</p>
          <p>
            Prix : {dino.prix}
            {/* {" €"} */}
            {" Boulette(s) de teuch"}
          </p>
          <div className="addCart">
            {user !== null && (
              <img
                src={isAdd ? cartGold : cartBlack}
                onClick={addToCart}
                alt="add to cart"
              />
            )}
            <div className="linkDinoCard">
              <button
                onClick={() =>
                  navigate(`/magasin/${dino.id}`, {
                    state: {
                      dino,
                      // isFavorite,
                      // setIsFavorite,
                      // handleClickFavorite,
                      dinoDefault,
                    },
                  })
                }
              >
                Voir plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CarteMag

import React, { useContext, useEffect, useState } from "react"
// import { useParams, useLocation, useNavigate } from "react-router-dom"
import { useLocation, useNavigate } from "react-router-dom"

import axios from "axios"

import NavBare from "./NavBare"

import MyContext from "../components/MyContext"

import fullStar from "../assets/img/etoile-pleine.png"
import emptyStar from "../assets/img/etoile-vide.png"
import cartBlack from "../assets/img/cart_black.png"
import cartGold from "../assets/img/cart_gold.png"

import "./CarteMagDetails.scss"

const CarteMagDetails = () => {
  const { user } = useContext(MyContext)
  // const { id } = useParams()

  const location = useLocation()

  const navigate = useNavigate()

  const dino = location.state.dino
  const [isFavorite, setIsFavorite] = useState()
  // const  = location.state.setIsFavorite
  // const handleClickFavorite = location.state.handleClickFavorite
  const dinoDefault = location.state.dinoDefault
  const isAdd = false

  const handleClickFavorite = () => {
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

  // const addToCart = () => {
  //   setIsAdd(!isAdd)
  // }
  // useEffect(() => {
  //   axios.get(`http://localhost:4243/${id}`)
  // }, [])

  useEffect(() => {
    if (user !== null) {
      axios
        .get(`http://localhost:4243/utilisateurs/${user.id}/article/${dino.id}`)
        .then(({ data }) => {
          setIsFavorite(true)
        })
        .catch(() => setIsFavorite(false))
    }
  }, [])

  return (
    <>
      <NavBare />
      {/* {console.info("bloob", location.state.isFavorite)}
      {console.info("bloob__2", isFavorite)} */}
      <div className="carteGlobal">
        <p>Je suis dans les details !</p>
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
          <p>Taille (Lxlxh) en cm : {dino.size_item_Llh}</p>
          <p>Couleur principale : {dino.color_main}</p>
          <p>Couleur secondaire : {dino.color_sec}</p>
          <p>Environnement : {dino.name_env}</p>
          <p>Regime alimentaire : {dino.name_alim}</p>
          <p>
            Prix : {dino.prix}
            {" €"}
          </p>
          <div className="addCart">
            {user !== null && (
              <img
                src={isAdd ? cartGold : cartBlack}
                // onClick={addToCart}
                alt="add to cart"
              />
            )}
            <button onClick={() => navigate(`/magasin`)}>retour</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CarteMagDetails

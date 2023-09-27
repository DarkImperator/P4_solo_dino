import React, { useEffect, useState, useContext } from "react"
import axios from "axios"

import "./Magasin.scss"
import NavBare from "../components/NavBare"
import CarteMag from "../components/CarteMag"
import UserContext from "../components/UserContext"

const Magasin = () => {
  const [dinos, setDinos] = useState([])
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    console.info(setUser) // <=============== A supprimer, pour eviter un erreur pdt le dev
    axios
      .get("http://localhost:4242/articles")
      .then(({ data }) => {
        setDinos(data)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <main>
      <NavBare />
      {user !== null ? (
        <p>Ok</p>
      ) : (
        <p>
          Vous devez être connecté pour ajouter des favoris et pour pouvoir
          effectuer des achats !
        </p>
      )}
      {dinos.map((dino) => (
        <div className="dinoCarte" key={dino.id}>
          <CarteMag dino={dino} />
        </div>
      ))}
    </main>
  )
}

export default Magasin

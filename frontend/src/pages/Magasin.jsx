import React, { useContext } from "react"

import "./Magasin.scss"
import NavBare from "../components/NavBare"
import CarteMag from "../components/CarteMag"

import MyContext from "../components/MyContext"

// import tyr1 from "../assets/img/tyran_noir1.webp"
// import tyr2 from "../assets/img/tyran_bleu2.webp"
// import the1 from "../assets/img/theri_noir3.webp"
// import que1 from "../assets/img/quetz_marron4.webp"
// import bra1 from "../assets/img/brach_vert5.webp"
// import mos1 from "../assets/img/mosas_turquoise6.webp"
// import edm1 from "../assets/img/edmon_beigeasse7.webp"
// import vec1 from "../assets/img/vehicule_captur8.webp"
// import str1 from "../assets/img/station_recherche9.webp"

const Magasin = () => {
  const { dinos } = useContext(MyContext)
  const { user } = useContext(MyContext)

  return (
    <>
      <NavBare />
      <main className="mainMag">
        <div className="infoLoginIn">
          {user !== null ? null : (
            <p>
              Vous devez être connecté pour ajouter des favoris et pour pouvoir
              effectuer des achats !
            </p>
          )}
        </div>
        <div className="dinoCartes">
          {dinos.map((dino) => (
            <div className="dinoCarte" key={dino.id}>
              <CarteMag dino={dino} />
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default Magasin

import React, { useContext } from "react"

import "./HomePage.scss"

import Footer from "../components/Footer"
import NavBare from "../components/NavBare"

import UserContext from "../components/MyContext"

const HomePage = () => {
  const { user } = useContext(UserContext)

  // useEffect(() => {}, [])

  return (
    <main>
      <NavBare />
      <div className="bloob">
        <h1>Salut, fan de dinosaure ...</h1>
        {user ? (
          <p>
            Bonjour <span>{user[0]?.firstname}</span>, bienvenue sur le meilleur
            site de dinosaures, ever ever ever ... ever ... <span>ever</span> !
          </p>
        ) : (
          <p>
            Bonjour <span>inconnu</span>, bienvenue sur le meilleur site de
            dinosaures, ever ever ever ... ever ... <span>ever</span> !
          </p>
        )}
        <p>Tus nes pa la par hazart !</p>
        <p>Tu est au bonne androi ptite etre pour le moment insignifiant !</p>
      </div>
      <Footer />
    </main>
  )
}

export default HomePage

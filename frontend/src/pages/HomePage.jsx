// import React, { useContext } from "react"
import React from "react"

import "./HomePage.scss"

import Footer from "../components/Footer"
import NavBare from "../components/NavBare"

// import UserContext from "../components/UserContext"

const HomePage = () => {
  // const { user, setUser, setFollowedAutors } = useContext(UserContext)

  // useEffect(() => {}, [])

  return (
    <main>
      <NavBare />
      <div className="bloob">
        <h1>Salut, fan de dinosaure ...</h1>
        <p>Tus nes pa la par hazart !</p>
        <p>Tu est au bonne androi ptite etre !</p>
        {/* <p>{user.name}</p> */}
      </div>
      <Footer />
    </main>
  )
}

export default HomePage

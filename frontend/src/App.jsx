import HomePage from "./pages/HomePage"
import Encyclo from "./pages/Encyclo"
import Magasin from "./pages/Magasin"

import { Routes, Route } from "react-router-dom"
import { useState, useMemo, useEffect } from "react"

import UserContext from "./components/UserContext"

import "./App.scss"

function App() {
  // users sera l'ensemble des utilisateurs de mon site
  const [users, setUsers] = useState([])
  // user sera l'utilisateur de mon site, quand on entre sur le site il est initialisé à null
  // il changera quand on l'utilisateur se connectera
  const [user, setUser] = useState(null)

  // pour conserver l'utilisateur connecté même en cas de raffraichissement
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  // stockage de l'état initial de user, setUser et users via un useMemo
  const valeursFourniesDansMyContextProvider = useMemo(
    () => ({
      user,
      setUser,
      users,
      setUsers,
    }),
    [user, setUser, users, setUsers]
  )

  return (
    <>
      <section className="App">
        <UserContext.Provider value={valeursFourniesDansMyContextProvider}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/encyclopedie" element={<Encyclo />} />
            <Route path="/magasin" element={<Magasin />} />
          </Routes>
        </UserContext.Provider>
      </section>
    </>
  )
}

export default App

import HomePage from "./pages/HomePage"
import Encyclo from "./pages/Encyclo"
import Magasin from "./pages/Magasin"
import CarteMagDetails from "./components/CarteMagDetails"

import { Routes, Route } from "react-router-dom"
import { useState, useMemo, useEffect } from "react"
import axios from "axios"

import MyContext from "./components/MyContext"

import "./App.scss"

function App() {
  // users sera l'ensemble des utilisateurs de mon site
  const [users, setUsers] = useState([])
  // user sera l'utilisateur de mon site, quand on entre sur le site il est initialisé à null
  // il changera quand on l'utilisateur se connectera
  const [user, setUser] = useState(null)
  const [dinos, setDinos] = useState([])

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
      dinos,
      setDinos,
    }),
    [user, setUser, users, setUsers, dinos, setDinos]
  )

  useEffect(() => {
    axios
      // .get("http://localhost:4242/articles")
      .get("http://localhost:4243/articles")
      .then(({ data }) => {
        setDinos(data)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <>
      <section className="App">
        <MyContext.Provider value={valeursFourniesDansMyContextProvider}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/encyclopedie" element={<Encyclo />} />
            <Route
              path="/magasin"
              element={<Magasin dinos={dinos} setDinos={setDinos} />}
            />
            <Route
              path="/magasin/:id"
              element={<CarteMagDetails dinos={dinos} />}
            />
          </Routes>
        </MyContext.Provider>
      </section>
    </>
  )
}

export default App

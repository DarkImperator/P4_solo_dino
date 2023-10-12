import React, { useContext, useState } from "react"
import logoDino from "../assets/img/logo-dinosaure-colere.avif"

// import { Link, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import UserContext from "./MyContext"

import "./NavBare.scss"
import LoginD from "./LoginD"
import SignUpD from "./SignUpD"

const NavBare = () => {
  const { user, setUser } = useContext(UserContext)
  const [openFormLogin, setOpenFormLogin] = useState(false)
  const [openFormSignUp, setOpenFormSignUp] = useState(false)
  const [changeClassToOpenMenu, setChangeClassToOpenMenu] = useState(false)

  const HandleChangeClassTopOpenMenu = () => {
    setChangeClassToOpenMenu(!changeClassToOpenMenu)
  }

  // const navigate = useNavigate()

  const HandleClickOpenLog = () => {
    setOpenFormLogin(true)
  }

  const HandleClickLogout = () => {
    // navigate("/")
    setUser(null)
  }

  const HandleClickOpenSignUp = () => {
    setOpenFormSignUp(true)
  }

  return (
    <nav className="ContainNav">
      <figcaption className="NavLogo" alt="logoDino">
        <Link to="/" className="li-container">
          <img src={logoDino}></img>
        </Link>
      </figcaption>
      <ul className="unorderListDinos">
        <Link to="/encyclopedie" className="li-container">
          <li className="link" alt="encyclopedie">
            Encyclopedie
          </li>
        </Link>
        <Link to="/magasin" className="li-container">
          <li className="link" alt="magasin">
            Magasin
          </li>
        </Link>
      </ul>
      <div className="PushContain">
        {user === null ? (
          <>
            <button className="push" type="button" onClick={HandleClickOpenLog}>
              LOG IN
            </button>
            <button
              // className={user === null ? "push" : "hidden"}
              className="push"
              type="button"
              onClick={HandleClickOpenSignUp}
            >
              SIGN UP
            </button>
          </>
        ) : (
          <div className="loginContainer">
            <button
              title="Clique pour te deconnecter, petit-e !"
              className="userConnect"
              type="button"
              onClick={() => {
                HandleClickLogout()
                HandleChangeClassTopOpenMenu()
              }}
            >
              <p>{user.pseudo}</p>
            </button>
          </div>
        )}

        {openFormLogin && (
          <LoginD
            setOpenFormLogin={setOpenFormLogin}
            setOpenFormSignUp={setOpenFormSignUp}
            setChangeClassToOpenMenu={setChangeClassToOpenMenu}
          />
        )}
        {openFormSignUp && (
          <SignUpD
            setOpenFormSignUp={setOpenFormSignUp}
            setOpenFormLogin={setOpenFormLogin}
            setChangeClassToOpenMenu={setChangeClassToOpenMenu}
          />
        )}
      </div>
    </nav>
  )
}

export default NavBare

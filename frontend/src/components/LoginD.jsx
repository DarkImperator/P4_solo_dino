import React, { useContext, useState } from "react"
import axios from "axios"
import UserContext from "./MyContext"

import croix from "../assets/img/Close.svg"
import eye from "../assets/img/eye.svg"
import eyeOff from "../assets/img/eye_Off.svg"

import "./LoginD.scss"

const LoginD = ({
  setOpenFormLogin,
  setOpenFormSignUp,
  setChangeClassToOpenMenu,
}) => {
  const { user, setUser } = useContext(UserContext)
  const [pseudo, setPseudo] = useState("")
  const [mdp, setMdp] = useState("")
  // const [wrongEmailOrPassword, setWrongEmailOrPassword] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const HandleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const HandleSubmitlogin = () => {
    console.info("pseudo", pseudo)
    console.info("password", mdp)
    axios
      // .post("http://localhost:4242/login", {
      .post("http://localhost:4243/login", {
        user,
        pseudo,
        password: mdp,
      })
      .then(({ data }) => {
        setUser(data)
        console.info("user", data)
        setOpenFormLogin(false)

        // Sauvegarde des informations de l'utilisateur dans le localStorage
        localStorage.setItem("user", JSON.stringify(data))
      })
      .catch((err) => {
        // setWrongEmailOrPassword(true)
        console.error(err)
      })
    setChangeClassToOpenMenu(false)
  }

  const HandleclosFormLogin = () => {
    setOpenFormLogin(false)
    setChangeClassToOpenMenu(false)
  }

  const HandleCloseFormLoginOpenSignup = () => {
    setOpenFormLogin(false)
    setOpenFormSignUp(true)
    setChangeClassToOpenMenu(false)
  }

  const HandleChangeEmail = (event) => {
    setPseudo(event.target.value)
  }

  const HandleChangeMdp = (event) => {
    setMdp(event.target.value)
  }

  return (
    <div className="popUp">
      <form className="logIn">
        <div className="imgcontainer">
          <img
            src={croix}
            alt="fermer la fenetre"
            onClick={HandleclosFormLogin}
          />
        </div>
        <div className="containerForm">
          <h2>Log in</h2>
          <div className="conteneurSVG">
            <svg>
              <line x1="0" x2="200" y1="0" y2="0" />
            </svg>
          </div>
          <div className="EmailPassword">
            <div className="labelInput">
              <label htmlFor="pseudo">Pseudo</label>
              <input
                id="email"
                type="pseudo"
                name="pseudo"
                value={pseudo}
                onChange={HandleChangeEmail}
              />
            </div>

            <div className="labelInput">
              <label htmlFor="passWord">Password</label>
              <div className="inputPassword">
                <input
                  id="passWord"
                  type={showPassword ? "text" : "password"}
                  name="passWord"
                  value={mdp}
                  onChange={HandleChangeMdp}
                />
                <div className="containerImg" onClick={HandleClickShowPassword}>
                  <img
                    src={showPassword ? eyeOff : eye}
                    title={
                      showPassword
                        ? "masquer le mot de passe"
                        : "afficher le mot de passe"
                    }
                    alt={
                      showPassword
                        ? "logo oeil masquer le mot de passe"
                        : "logo oeil afficher le mot de passe"
                    }
                  />
                </div>
              </div>
            </div>

            {/* {wrongEmailOrPassword && (
              <p className="wrongLogin">Wrong Pseudo or PassWord</p>
            )} */}
          </div>
          <button type="button" onClick={HandleSubmitlogin}>
            Log In
          </button>

          <p>
            If you don't have an account,{" "}
            <span onClick={HandleCloseFormLoginOpenSignup}>
              create one here
            </span>
          </p>
        </div>
      </form>
    </div>
  )
}

export default LoginD

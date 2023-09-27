import React, { useState } from "react"
import axios from "axios"

import "./SignUpD.scss"

import croix from "../assets/img/Close.svg"
import eye from "../assets/img/eye.svg"
import eyeOff from "../assets/img/eye_Off.svg"
import avatar from "../assets/img/pas_content.png"

const SignUpD = ({
  setOpenFormLogin,
  setOpenFormSignUp,
  setChangeClassToOpenMenu,
}) => {
  const [lastname, setLastname] = useState("")
  const [firstname, setFirstname] = useState("")
  const [pseudo, setPseudo] = useState("")
  const [email, setEmail] = useState("")
  const [mdp, setMdp] = useState("")
  const [img, setImg] = useState("none")
  // const [emailAlreadyUsed, setEmailAlreadyUsed] = useState(false)
  // const [loginAlreadyUsed, setLoginAlreadyUsed] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  // const [errorDataUser, setErrorDataUser] = useState([])

  const passwordLimits = `The password must contain at least :\n
  - a upper case letter,
  - a lower case letter,
  - a number,
  - a special character,
  and have a minimum length of 8 characters.`

  const HandleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const HandleSubmitSignUp = () => {
    console.info(setImg) // <=============== A supprimer, pour eviter un erreur pdt le dev
    axios
      .post("http://localhost:4242/signup", {
        firstname,
        lastname,
        pseudo,
        email,
        password: mdp,
        img,
      })
      .then(() => setOpenFormSignUp(false))
      .catch((err) => console.error(err))
    // .catch((err) => {
    //   if (err.response) {
    //     const { data } = err.response
    //     setErrorDataUser(data)

    //     if (data.errorMessage.includes("Mail déjà existant")) {
    //       let checkEmailAlreadyUsed = true
    //       setEmailAlreadyUsed(checkEmailAlreadyUsed)
    //       checkEmailAlreadyUsed = false
    //     }

    //     if (data.errorMessage.includes("Pseudo déjà existant")) {
    //       let checkLoginAlreadyUsed = true
    //       setLoginAlreadyUsed(checkLoginAlreadyUsed)
    //       checkLoginAlreadyUsed = false
    //     }
    //   } else {
    //     console.error("Une erreur s'est produite : ", err.message)
    //   }
    // })
    setChangeClassToOpenMenu(false)
    // setEmailAlreadyUsed(false)
    // setLoginAlreadyUsed(false)
  }

  const HandleCloseFormSignOpenLog = () => {
    setOpenFormSignUp(false)
    setOpenFormLogin(true)
    setChangeClassToOpenMenu(false)
  }

  const HandleclosFormSignUp = () => {
    setOpenFormSignUp(false)
    setChangeClassToOpenMenu(false)
  }

  const HandleChangeLastname = (event) => {
    setLastname(event.target.value)
  }

  const HandleChangeFirstname = (event) => {
    setFirstname(event.target.value)
  }

  const HandleChangePseudo = (event) => {
    setPseudo(event.target.value)
  }

  const HandleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const HandleChangeMdp = (event) => {
    setMdp(event.target.value)
  }

  // const HandleChangeImg = (e) => {
  //   const file = e.target.files[0]
  //   const formData = new FormData()
  //   formData.append("image", file)
  //   if (img === "none") {
  //     axios
  //       .post("http://localhost:4242/tmpImage", formData)
  //       .then(({ data }) => setImg(data))
  //   } else {
  //     axios.delete("http://localhost:4242/deleteTmpImage", {
  //       data: {
  //         img_src: img,
  //       },
  //     })
  //     axios
  //       .post("http://localhost:4242/tmpImage", formData)
  //       .then(({ data }) => setImg(data))
  //   }
  // }

  return (
    <div className="popUpSignUp">
      <form className="signUp">
        <div className="imgcontainer">
          <img
            src={croix}
            alt="fermer la fenetre"
            onClick={HandleclosFormSignUp}
          />
        </div>
        <div className="mainContainer">
          <div className="containerForm">
            <h2>Register</h2>
            <div className="conteneurSVG">
              <svg>
                <line x1="0" x2="200" y1="0" y2="0" />
              </svg>
            </div>
            <div className="containInformation">
              <div className="LastnameFirstname">
                <div className="labelInput">
                  <label htmlFor="lastname">Lastname</label>
                  <input
                    id="lastname"
                    type="text"
                    name="lastname"
                    placeholder="100 characters max"
                    value={lastname}
                    onChange={HandleChangeLastname}
                  />
                  {/* {errorDataUser.length !== 0
                    ? errorDataUser.validationErrors
                        ?.filter((error) => error.message.includes("lastname"))
                        .map((err) => (
                          <p className="signUpErrors" key={err.context.key}>
                            {err.message}
                          </p>
                        ))
                    : null} */}
                </div>
                <div className="labelInput">
                  <label htmlFor="firstname">Firstname</label>
                  <input
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="100 characters max"
                    value={firstname}
                    onChange={HandleChangeFirstname}
                  />
                  {/* {errorDataUser.length !== 0
                    ? errorDataUser.validationErrors
                        ?.filter((error) => error.message.includes("firstname"))
                        .map((err) => (
                          <p className="signUpErrors" key={err.context.key}>
                            {err.message}
                          </p>
                        ))
                    : null} */}
                </div>
              </div>
              <div className="labelInput">
                <label htmlFor="login">Pseudo</label>
                <input
                  id="login"
                  type="text"
                  name="pseudo"
                  placeholder="100 characters max"
                  value={pseudo}
                  onChange={HandleChangePseudo}
                />
                {/* {loginAlreadyUsed && (
                  <p className="signUpErrors">Login already used</p>
                )}
                {errorDataUser.length !== 0
                  ? errorDataUser.validationErrors
                      ?.filter((error) => error.message.includes("login"))
                      .map((err) => (
                        <p className="signUpErrors" key={err.context.key}>
                          {err.message}
                        </p>
                      ))
                  : null} */}
              </div>
              <div className="labelInput">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="ex: jane.doe@exemple.com"
                  value={email}
                  onChange={HandleChangeEmail}
                />
                {/* {emailAlreadyUsed && (
                  <p className="signUpErrors">Email already used</p>
                )}
                {errorDataUser.length !== 0
                  ? errorDataUser.validationErrors
                      ?.filter((error) => error.message.includes("email"))
                      .map((err) => (
                        <p className="signUpErrors" key={err.context.key}>
                          {err.message}
                        </p>
                      ))
                  : null} */}
              </div>
              <div className="labelInput">
                <label htmlFor="passWord">Password</label>
                <div className="inputPassword">
                  <input
                    id="passWord"
                    type={showPassword ? "text" : "password"}
                    title={passwordLimits}
                    name="passWord"
                    value={mdp}
                    onChange={HandleChangeMdp}
                  />
                  <div
                    className="containerImg"
                    onClick={HandleClickShowPassword}
                  >
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
                {/* {errorDataUser.length !== 0
                  ? errorDataUser.validationErrors
                      ?.filter((error) => error.message.includes("password"))
                      .map((err) => (
                        <p
                          className="signUpErrors sUEPassword"
                          key={err.context.key}
                        >
                          {err.message}
                        </p>
                      ))
                  : null}
                {errorDataUser.length !== 0
                  ? errorDataUser.validationErrors
                      ?.filter((error) => error.message.includes("value"))
                      .map((err) => (
                        <p
                          className="signUpErrors sUEPassword"
                          key={err.context.key}
                        >
                          {err.message}
                        </p>
                      ))
                  : null} */}
              </div>
              <div className="labelInput labelInputFileAvatar">
                <label htmlFor="img">Choose your profile picture</label>
                <label className="button-import-image" htmlFor="img">
                  <img
                    src={img === "none" ? avatar : img}
                    alt="Image avatar"
                    title="Click to choose your avatar"
                  />
                </label>
                <input
                  className="inputFileAvatar"
                  id="img"
                  type="file"
                  name="img"
                  // onChange={HandleChangeImg}
                />
              </div>
            </div>
            <button type="button" onClick={HandleSubmitSignUp}>
              Confirme registration
            </button>
            <p>
              If you already have an account,{" "}
              <span onClick={HandleCloseFormSignOpenLog}>
                please log in here.
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignUpD

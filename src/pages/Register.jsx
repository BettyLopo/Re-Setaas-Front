import React, { useState } from 'react'
import Input from '../components/inputs/Input'
import Button from '../components/buttons/Button'
import { Link, useNavigate } from 'react-router-dom'
import InputImg from '../components/inputs/InputImg'
import PopUp from '@/components/popUp/PopUp'

const Register = () => {
    const [username, setUsermame] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profile, setProfile] = useState("")

    const navigate = useNavigate();

    const [popUpMessage, setPopUpMessage] = useState("");
    const [popUpFunction, setPopUpFunction] = useState(null);
    const [isPopUpOpen, setIsPopUpOpen] = useState(null);
  
    const closePopup = () => setIsPopUpOpen(false);

    const handleSubmit = async (e) => {
      e.preventDefault;

      try {
        const response = await fetch("http://localhost:3001/auth/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password, profile })
          }
        );

        if(!response.ok) {
          setPopUpMessage("Error, no se ha podido crear el usuario.")
          setIsPopUpOpen(true)
          setPopUpFunction(() => reloadPage)
          console.error("Fetch error:", error)
        } else {
            setUsername("");
            setEmail("");
            setPassword("")
            setProfile("");
            setPopUpMessage(`El usuario ${username} se ha creado correctamente, ya puedes iniciar sesión.`);
            setIsPopUpOpen(true); 
            setPopUpFunction(() => navigateLogin)
        }
      } catch (error) {
        setPopUpMessage("No se ha podido crear el usuario.")
        setPopUpFunction(() => reloadPage)
        setIsPopUpOpen(true)
        console.error("Fetch error:", error)
        
      }
    };

    const navigateLogin = () => {
      navigate("/login")
    }

    const reloadPage = () => {
      if(isPopUpOpen) setIsPopUpOpen(false);
      window.location.reload();
    }


  return (
    <section className="flex flex-col items-center justify-center bg-gr-pink-pink h-screen w-screen relative pb-[6rem] gap-[1.8rem]">
      <div className="fixed -z-9 inset-0">
          <img src="/public/img/seta_1.svg" alt="Seta decorativa" className="fixed -bottom-10 w-[65%] -right-10 -z-9 opacity-60"/>
        </div>
      <h1 className="text-center font-ultra text-ptitle text-darklila leading-7 mb-7">Re<br/>(Setas)</h1>
      <div className="flex flex-col relative gap-[2rem]">
        <label htmlFor="registro" className="text-center font-ultra text-darklila text-stitle">Registro</label>
        <form action="" onSubmit={handleSubmit} id="registro" className="flex flex-col justify-center gap-6">
        <Input 
            placeholder="Nombre" 
            className="bg-brokenwhite w-[18.1rem] placeholder:text-darklila" 
            id="nombre" 
            htmlFor="nombre" 
            type="text" 
            value={username}
            onChange={(e) => setUsermame(e.target.value)} />
          <Input 
            placeholder="E-mail" 
            className="bg-brokenwhite w-[18.1rem] placeholder:text-darklila" 
            id="email" 
            htmlFor="email" 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <Input 
            placeholder="Contraseña" 
            className="bg-brokenwhite w-[18.1rem] placeholder:text-darklila" 
            id="contrasena" 
            htmlFor="contrasena" 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
            <InputImg 
              className="w-[18.1rem] gap-6"
              onChange={(imgUrl) => setProfile(imgUrl)}
              />
            <div className="flex flex-row justify-center gap-7 mt-2">
              <Button className="bg-lightlila text-brokenwhite" type="submit" text="Registrar"/>
              <Button className="bg-softblue  text-darklila" type="button" onClick={() => {navigate("/")}} text="Cancelar"/>
            </div>
        </form>
        <div className="text-center my-2">
          <p className="font-raleway text-regu font-semibold text-darklila">¿Ya tienes cuenta?</p>
          <p className="font-raleway text-regu font-semibold text-darklila">Entra <Link to="/login" className="font-ultra text-brokenwhite">aquí</Link></p>
        </div>
      </div>
      <PopUp 
        isPopUpOpen={isPopUpOpen}
        closePopup={closePopup}
        onConfirm={popUpFunction}
        message={popUpMessage}
        buttonAcc="Aceptar"
        showCancel={false}
      />
      
    </section>
  )
}

export default Register

import React, { useState } from 'react'
import Input from '../components/inputs/Input'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/buttons/Button'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [popUpMessage, setPopUpMessage] = useState("");
  const [popUpFunction, setPopUpFunction] = useState(null)

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        console.error("Response error:", errorResponse);
        setPopUpMessage("Error, usuario o contraseña incorrectos.");
        reloadPage();
        return;
      }

      const data = await response.json();
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', data.user.id);
      setPopUpMessage(
        `Hola de nuevo ${data.user.username}`
      );
      console.log(`Hola de nuevo ${data.user.username}`)
      navigateHome();
      
    } catch (error) {
      console.error("Fetch error:", error);
      setPopUpMessage("Error, usuario o contraseña incorrectos.");
    }
  }

  const reloadPage = () => {
    window.location.reload();
  }

  const navigateHome = () => {
    navigate("/")
  }

  return (
    <section className="flex flex-col items-center justify-center bg-gr-pink-pink h-screen w-screen relative pb-[6rem] gap-[1.8rem]">
      <div className="fixed -z-9 inset-0">
          <img src="/public/img/seta_2.svg" alt="Seta decorativa" className="fixed -bottom-12 w-[80%] -right-4 -z-9 opacity-25"/>
          <img src="/public/img/seta_1.svg" alt="Seta decorativa" className="fixed -top-5 w-[30%] -left-5 -z-9 opacity-90 rotate-[145deg]"/>
        </div>
      <h1 className="text-center font-ultra text-ptitle text-darklila leading-7 my-[3.5rem]">Re<br/>(Setas)</h1>
      <div className="flex flex-col relative gap-[2rem]">
      <label htmlFor="login" className="text-center font-ultra text-darklila text-stitle ">Inicia sesión</label>
        <form onSubmit={handleSubmit} id="login" className="flex flex-col justify-center gap-7">
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
            onChange={(e) => setPassword(e.target.value)}
            />
          <div className="flex flex-row justify-center gap-7 mt-2">
          <Button className="bg-lightlila text-brokenwhite" type="submit" text="Aceptar"/>
          <Button className="bg-softblue  text-darklila" type="button" text="Cancelar"/>
        </div>
        </form>
        <div className="text-center my-2">
          <p className="font-raleway text-regu font-semibold text-darklila">¿No tienes cuenta?</p>
          <p className="font-raleway text-regu font-semibold text-darklila">Registrate <Link to="/sign-in" className="font-ultra text-brokenwhite">aquí</Link></p>
        </div>
      </div>
    </section>
  )
}

export default Login

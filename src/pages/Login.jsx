import React from 'react'
import Input from '../components/inputs/Input'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className="flex flex-col items-center justify-around bg-gr-pink-pink h-screen w-screen relative pb-[4rem]">
      <div className="fixed -z-9 inset-0">
          <img src="/public/img/seta_2.svg" alt="Seta decorativa" className="fixed -bottom-12 w-[80%] right-6 -z-9 opacity-30"/>
          <img src="/public/img/seta_1.svg" alt="Seta decorativa" className="fixed -top-5 w-[30%] -left-5 -z-9 opacity-90 rotate-[145deg]"/>
        </div>
      <h1 className="text-center font-ultra text-ptitle text-darklila leading-7 mb-7">Re<br/>(Setas)</h1>
      <div className="relative">
        <form action="" onSubmit="" className="flex flex-col justify-center gap-6">
          <Input 
            placeholder="E-mail" 
            className="bg-brokenwhite w-[18.1rem]" 
            id="email" 
            htmlFor="email" 
            type="email" 
            // value={email}
            onChange="" />
          <Input 
            placeholder="Contraseña" 
            className="bg-brokenwhite w-[18.1rem]" 
            id="contrasena" 
            htmlFor="contrasena" 
            type="password" 
            // value={password}
            onChange=""/>
        </form>
        <div>
        {/* buttons */}
        </div>
        <div className="text-center my-4">
          <p className="font-raleway text-regu font-semibold text-darklila">¿No tienes cuenta?</p>
          <p className="font-raleway text-regu font-semibold text-darklila">Registrate <Link className="font-ultra text-brokenwhite">aquí</Link></p>
        </div>
        
      </div>


      
    </section>
  )
}

export default Login

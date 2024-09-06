import React from 'react'
import Input from '../components/inputs/Input'

const Login = () => {
  return (
    <section className="flex flex-col justify-center bg-gr-pink-pink">
      <div className="flex flex-col gap-3">
        <Input placeholder="" className=""/>
        <Input placeholder="" className=""/>
      </div>
      <div>
        {/* buttons */}
      </div>
      <div className="text-center my-4">
        <p className="font-raleway text-darklila">¿No tienes cuenta?</p>
        <p className="font-raleway text-darklila">Registrate <Link className="font-ultra text-brokenwhite">aquí</Link></p>
      </div>

      
    </section>
  )
}

export default Login

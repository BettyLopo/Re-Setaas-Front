import React from 'react'
import InputTextArea from '../components/inputs/InputTextArea'
import InputImg from '../components/inputs/InputImg'
import Input from '../components/inputs/Input'
import CategoryInput from '../components/inputs/CategoryInput'
import Button from '../components/buttons/Button'

const Create = () => {
  return (
    <div className="w-screen h-full bg-gr-blue-lila">
      <section className="flex py-[6rem] px-5 flex-col gap-5 relative">
        <div className="fixed -z-9 inset-0">
            <img src="/public/img/seta_1.svg" alt="Seta decorativa" className="fixed -top-4 w-[30%] -right-5 -z-9 opacity-90 rotate-[245deg]"/>
        </div>
        <h1 className="font-ultra text-darklila text-[3rem] leading-9 pl-3 py-4">Nueva receta</h1>
        <form action="submit" className="flex flex-col gap-10 justify-center items-center relative">
          <CategoryInput className=""/>
          <div>
            <label htmlFor="titulo" className="font-raleway font-semibold text-regu text-darklila">Cómo se llama esta receta</label>
            <Input 
            className="placeholder:text-brokenwhite w-[20.2rem] bg-lightlila"
            id="titulo"/>
          </div>
          <InputImg 
          className="w-[20.2rem] gap-[4rem]"/>
          <InputTextArea 
            title="Ingredientes"
            placeholder={`Lista todos los ingredientes de tu receta separados por comas (2 patatas, 4 cebollas, 2 huevos, 1 manojo de espárragos) para que puedan visualizarse así:\n· 2 patatas\n· 4 cebollas\n· 2 huevos\n· 1 manojo de espárragos`}/>
          <InputTextArea 
            title="Herramientas"
            placeholder={`Lista todas las herramientas necesarias para tu receta separadas por comas (Horno, Airfryer, Sartén) para que puedan visualizarse así:\n· Horno\n· Airfryer\n· Sartén`}/>
            <InputTextArea 
            title="Pasos"
            placeholder={`Escribe aquí todos los pasos necesarios para que tu receta quede riquísima. Puedes hacerlo en\n · formato de lista\n · separando cada paso\n · con una coma\n (de esta forma: paso 1, paso 2, paso 3) o como párrafos enteros.`}/>
            <div className="flex flex-row justify-center gap-7 mt-2 mb-10">
              <Button className="bg-pink text-darklila" type="button" onClick="" text="Crear"/>
              <Button className="bg-softblue  text-darklila" type="button" onClick="" text="Cancelar"/>
          </div>
        </form>
      </section>
      
    </div>
  )
}

export default Create

import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFormatDate from '../hooks/useFormatDate';
import InputTextArea from '../components/inputs/InputTextArea'
import InputImg from '../components/inputs/InputImg'
import Input from '../components/inputs/Input'
import CategoryInput from '../components/inputs/CategoryInput'
import Button from '../components/buttons/Button'
import DurationInput from '../components/inputs/DurationInput'
import PopUp from '../components/popUp/PopUp'

const Create = () => {
  const actualUser = parseInt(localStorage.getItem("user"));
  const token = localStorage.getItem("authToken");

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("")
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [ingredients, setIngredients] = useState("")
  const [tools, setTools] = useState("")
  const [steps, setSteps] = useState("")
  const [faved, setFaved] = useState(false);

  const [popUpMessage, setPopUpMessage] = useState("");
  const [popUpFunction, setPopUpFunction] = useState(null);
  const [isPopUpOpen, setIsPopUpOpen] = useState(null);

  const closePopup = () => setIsPopUpOpen(false);

  const { formatDate } = useFormatDate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedDuration = `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;

    try {
      const response = await fetch ("http://localhost:3001/recipes/create",
        {
          method: "POST",
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: title,
            id_category: category,
            image: image,
            duration: formattedDuration,
            ingredients: ingredients,
            tools: tools,
            steps: steps,
            faved: faved,
            date: formatDate(new Date()),
            id_user: actualUser,

          }),
        }
      );

      if (response.ok) {
        setPopUpMessage(
          `La receta ${title} se ha creado correctamente`
        );
        setTitle("");
        setCategory("");
        setImage("");
        setHours("");
        setMinutes("");
        setIngredients("");
        setTools("");
        setSteps("");
        setFaved(false);
        setPopUpFunction(() => navigateHome)
        setIsPopUpOpen(true)
        console.log("Receta creada correctamente")
      }
    
    } catch {
      setPopUpMessage(
        `No se ha podido crear la receta ${title}`
      );
      setPopUpFunction(() => reloadPage)
      setIsPopUpOpen(true)
      console.log("Error creando receta")
      console.error("Fetch error:", error);
    }
  }
; 
  const navigateHome = () => {
    if (isPopUpOpen)setIsPopUpOpen(false);
    navigate("/")
  }

  const reloadPage = () => {
    if(isPopUpOpen) setIsPopUpOpen(false);
    window.location.reload();
  }



  return (
    <div className="w-screen h-full bg-gr-blue-lila">
      <section className="flex py-[6rem] px-5 flex-col gap-5 relative">
        <div className="fixed -z-9 inset-0">
            <img src="/public/img/seta_1.svg" alt="Seta decorativa" className="fixed -top-4 w-[30%] -right-5 -z-9 opacity-90 rotate-[245deg]"/>
        </div>
        <h1 className="font-ultra text-darklila text-[3rem] leading-9 pl-3 py-4">Nueva receta</h1>
        <form action="submit" className="flex flex-col gap-10 justify-center items-center relative" onSubmit={handleSubmit}>
          <CategoryInput 
          onChange={(e) => setCategory(e.target.value)}
          value={category}/>
          <div>
            <label htmlFor="titulo" className="font-raleway font-semibold text-regu text-darklila">Cómo se llama esta receta</label>
            <Input 
            onChange={(e) => setTitle(e.target.value)}
            className="placeholder:text-brokenwhite w-[20.2rem] bg-lightlila"
            id="titulo"
            value={title}/>
          </div>
          <DurationInput
          valueMin={minutes}
          valueHour={hours}
          onChangeHour={(e) => setHours(e.target.value)}
          onChangeMin={(e) => setMinutes(e.target.value)} />
          <InputImg 
            onChange={(imgUrl) => setImage(imgUrl)}
            className="w-[20.2rem] gap-[4rem] mt-4"
            value={image}/>
          <InputTextArea 
            onChange={(e) => setIngredients(e.target.value)}
            value={ingredients}
            title="Ingredientes"
            placeholder={`Lista todos los ingredientes de tu receta separados por comas (2 patatas, 4 cebollas, 2 huevos, 1 manojo de espárragos) para que puedan visualizarse así:\n· 2 patatas\n· 4 cebollas\n· 2 huevos\n· 1 manojo de espárragos`}/>
          <InputTextArea
            onChange={(e) => setTools(e.target.value)} 
            value={tools}
            title="Herramientas"
            placeholder={`Lista todas las herramientas necesarias para tu receta separadas por comas (Horno, Airfryer, Sartén) para que puedan visualizarse así:\n· Horno\n· Airfryer\n· Sartén`}/>
          <InputTextArea
              onChange={(e) => setSteps(e.target.value)} 
              value={steps}
              title="Pasos"
              placeholder={`Escribe aquí todos los pasos necesarios para que tu receta quede riquísima. Puedes hacerlo en\n · formato de lista\n · separando cada paso\n · con una coma\n (de esta forma: paso 1, paso 2, paso 3) o como párrafos enteros.`}/>
            <div className="flex flex-row justify-center gap-7 mt-2 mb-10">
              <Button 
              className="bg-pink text-darklila" 
              type="submit" 
              text="Crear"/>
              <Button 
              className="bg-softblue text-darklila" 
              type="button" 
              text="Cancelar"
              onClick=""/>
          </div>
        </form>
      </section>
      <PopUp 
        isPopUpOpen={isPopUpOpen}
        closePopup={closePopup}
        onConfirm={popUpFunction}
        message={popUpMessage}
        buttonAcc="Aceptar"
        showCancel={false}
      />
      
    </div>
  )
}

export default Create

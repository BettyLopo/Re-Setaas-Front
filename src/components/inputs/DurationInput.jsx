import React from 'react'

const DurationInput = ({valueHour, valueMin, onChangeHour, onChangeMin}) => {
  return (
    <div className="w-[20rem] flex flex-col">
        <p className="font-raleway font-semibold text-regu text-darklila">Cuánto dura esta receta</p>
        <section className="flex flex-row justify-stretch">
            <label htmlFor="hour"/>
            <input
            id="hour" 
            type="number"
            value={valueHour}
            placeholder="1 H"
            onChange={onChangeHour}
            className="border-[0.18rem] border-brown rounded-inp shadow-bigs placeholder:font-raleway w-[6rem] placeholder:text-regu text-left h-[2.5rem] placeholder:font-semibold pl-4 pt-1 bg-lightlila mr-6 placeholder:text-brokenwhite" />
            <label htmlFor="minutes" />
            <input
            id="minutes" 
            type="number"
            value={valueMin}
            placeholder="31 MIN"
            onChange={onChangeMin}
            className="border-[0.18rem] border-brown rounded-inp shadow-bigs placeholder:font-raleway w-[8rem] placeholder:text-regu text-left h-[2.5rem] placeholder:font-semibold pl-4 pt-1  bg-lightlila mr-6 placeholder:text-brokenwhite" />
        </section>
    </div>
  )
}

export default DurationInput

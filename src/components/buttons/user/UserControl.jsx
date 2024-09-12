import React from 'react'
import ControlButton from './ControlButton'

const UserControl = () => {
  return (
    <div className="flex flex-col gap-1 justify-center items-center">
        <section className="flex flex-row gap-3 py-1 px-1">
            <ControlButton className=" bg-softblue w-[12.25rem]" text="Calendario"/>
            <ControlButton className=" bg-lightlila w-[8.25rem]"/>
        </section>
        <section className="flex flex-row gap-3 py-1 px-1">
            <ControlButton className=" bg-lightlila w-[8.25rem]"/>
            <ControlButton className=" bg-softblue w-[12.25rem]" text="Categorías"/>
        </section>
    </div>
  )
}

export default UserControl

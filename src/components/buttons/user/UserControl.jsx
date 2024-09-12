import React from 'react'
import ControlButton from './ControlButton'

const UserControl = () => {
  return (
    <div className="flex flex-col gap-1">
        <section>
            <ControlButton className=" bg-lightlila w-[8.25rem]"/>
            <ControlButton className=" bg-softblue w-[12.25rem]"/>
        </section>
        <section>
            <ControlButton className=" bg-softblue w-[12.25rem]"/>
            <ControlButton className=" bg-lightlila w-[8.25rem]"/>
        </section>
    </div>
  )
}

export default UserControl

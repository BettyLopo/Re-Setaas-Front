import React from 'react'

const InputImg = ({id, handleFileChange}) => {
  return (
    <div className="flex flex-row gap-2 justify-center items-center relative">
        
        <div className="">
            <label htmlFor={id} />
            <input
            id={id} 
            type="file"
            onChange={handleFileChange}
            className="opacity-0 absolute cursor-pointer w-[19rem] h-[2.5rem]"
             />
             <div className="w-[18rem] h-[2.5rem] bg-brokenwhite border-[0.1rem] border-brown shadow-bigs rounded-inp flex justify-start items-center gap-6 pl-4">
             <p className='font-raleway text-regu text-darklila font-semibold'>Escoge una foto</p>
                <img src="/img/Camera.svg" alt="" />
             </div>
        </div>
    </div>
  )
}

export default InputImg

import React from 'react'
import { useEffect, useRef } from 'react'

const InputTextArea = ({title, placeholder, value, onChange}) => {
    const textareaRef = useRef(null);

    const adjustHeight = () => {
        if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    useEffect(() => {
        adjustHeight();
    }, []);
    

    return (
    <section className="flex flex-col gap-2">
        <label htmlFor="" className="font-raleway font-semibold text-regu text-darklila pl-2">{title}</label>
        <textarea type="text" className="rounded-inp border-[0.16rem] border-brown shadow-bigs w-[20.3rem] h-auto bg-brokenwhite font-raleway py-6 px-5 placeholder:text-tiny placeholder:text-darklila placeholder:opacity-60" placeholder={placeholder} ref={textareaRef} onInput={adjustHeight} value={value} onChange={onChange}/>
    
    </section>
  )
}

export default InputTextArea

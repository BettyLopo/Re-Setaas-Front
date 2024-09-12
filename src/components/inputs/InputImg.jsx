import React, { useState } from 'react'

const InputImg = ({id, className, value, onChange}) => {

  const preset_name = "u7m857fi";
  const cloud_name = "dmhx2hija";

  const [fileName, setFileName]= useState("");
  const [selectedFile, setSelectedFile] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    setFileName(file.name)
    setSelectedFile(file);
    const imgUrl = await uploadImage(file);
    onChange(imgUrl);
  }

  const uploadImage = async (file) => {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", preset_name);
        setSelectedFile(true);


    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, 
        {
          method: 'POST',
          body: data
        });

      const file = await response.json();
      return file.secure_url;
      
    } catch (error) {
      console.error("Error uploading image", error)
    }
  }

  return (
    <div className="flex flex-row gap-2 justify-center items-center relative">
        
        <div className="">
            <label htmlFor={id} />
            <input
            id={id} 
            type="file"
            onChange={handleFileChange}
            className={`opacity-0 absolute cursor-pointer ${className} h-[2.5rem]`}
             />
              <div className={`${className} h-[2.8rem] bg-brokenwhite border-[0.18rem] border-brown shadow-bigs rounded-inp flex justify-start items-center pl-4`}>
                <p className='font-raleway text-regu text-darklila font-semibold overflow-hidden'>{ selectedFile ? fileName : 'Escoge una foto' }</p>
                  <img src="/img/Camera.svg" alt="" className="pr-2"/>
             </div>
        </div>
    </div>
  )
}

export default InputImg

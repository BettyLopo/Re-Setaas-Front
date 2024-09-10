import React, { useState } from 'react'

const InputImg = ({id, className, value, onChange}) => {

  const preset_name = "one";
  const cloud_name = "two";

  const [fileName, setFileName]= useState("");
  const [selectedFile, setSelectedFile] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.value;
    setFileName(file.name)
    setSelectedFile(file);
    const imgUrl = await uploadImage(file);
    onChange(imgUrl);
  }

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', preset_name)


    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, 
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
            value={value}
            onChange={handleFileChange}
            className={`opacity-0 absolute cursor-pointer ${className} h-[2.5rem]`}
             />
              <div className={`${className} h-[2.8rem] bg-brokenwhite border-[0.18rem] border-brown shadow-bigs rounded-inp flex justify-start items-center pl-4`}>
                <p className='font-raleway text-regu text-darklila font-semibold'>{ selectedFile ? fileName : 'Escoge una foto' }</p>
                  <img src="/img/Camera.svg" alt="" />
             </div>
        </div>
    </div>
  )
}

export default InputImg

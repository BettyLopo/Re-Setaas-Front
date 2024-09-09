import React from 'react'
import Button from '../buttons/Button';

const CategoryInput = ({value, onChange}) => {

    const categories = ['Pasta', 'Fruta', 'Ensaladas', 'Postres'];

  return (
    <div className="w-[20.2rem] relative">
        <form className="pt-2">
        <label for="category" className="sr-only">Categorías</label>
        <select id="category" value={value} className="block w-[20rem] py-2 px-2 text-ctitle font-semibold text-darklila font-raleway rounded-inp shadow-bigs bg-brokenwhite border-[0.16rem] border-brown appearance-none dark:text-darklila dark:border-darklila relative" onChange={onChange}>
            <option selected>Escoge una categoría</option>
                { categories.map((cate) => (
                <option value={categories} className="focus:select-bg-softblue">{cate}</option>
                ))} 
        </select>
        <img src="img/Arrow.svg" alt="" className="absolute right-[1.2rem] top-[1.3rem]"/>
        </form>
    </div>
  )
}

export default CategoryInput

import React, { useEffect, useState } from 'react'
import Button from '../buttons/Button';

const CategoryInput = ({value, onChange}) => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch ('http://localhost:3001/categories');
                const data = await response.json();
                setCategories(data);
                
            } catch (error) {
                console.error('Error fetching categories', error);
            }
        };

        fetchCategories();
    }, []);

  return (
    <div className="w-[20.2rem] relative pt-2">
        <label for="category" className="sr-only">Categorías</label>
        <select 
            id="category" 
            value={value} 
            className="block w-[20rem] py-2 px-2 text-ctitle font-semibold text-darklila font-raleway rounded-inp shadow-bigs bg-brokenwhite border-[0.16rem] border-brown appearance-none dark:text-darklila dark:border-darklila relative" 
            onChange={onChange}>
            <option selected>Escoge una categoría</option>
                { categories.map((cate) => (
                <option key={cate.id} value={cate.id} className="focus:select-bg-softblue">
                    {cate.category}
                </option>
                ))} 
        </select>
        <img src="img/Arrow.svg" alt="" className="absolute right-[1.2rem] top-[1.3rem]"/>
    </div>
  )
}

export default CategoryInput

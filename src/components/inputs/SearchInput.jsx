import React, { useState } from 'react'
import Input from './Input'

const SearchInput = () => {
    const [value, setValue] = useState("");
    const [result, setResultState] = useState([])

    const fetchData = async (value) => {
        try {
            const response = await fetch ('http://localhost:3001/recipes');
            const data = await response.json();

            const results = data.filter((recipe) => {
                return (
                    value &&
                    recipe &&
                    (recipe.category.toLowerCase().includes(value.toLowerCase()) ||
                    recipe.user.toLowerCase().includes(value.toLowerCase()))
                );
            });
            setResultState(results);
            setResultState(results);
        } catch (error) {
            console.error("error fetching data:", error)
        }
    }

    const handleChange = (value) => {
        setValue(value);
        if (value === "") {
            setResultState([])
            setResultState([])
        } else {
            fetchData(value)
        }
    }

  return (
    <section className="relative">
        <Input 
        id="search"
        type="text"
        className="bg-brokenwhite w-[18rem] relative"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        />
        <img src="img/Arrow.svg" alt="" className="absolute right-[3.5rem] top-[0.6rem]"/>
    </section>
  )
}

export default SearchInput

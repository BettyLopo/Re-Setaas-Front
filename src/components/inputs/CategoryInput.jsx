import React from 'react'

const CategoryInput = () => {

  return (
    <div>
        <form class="max-w-sm mx-auto">
        <label for="underline_select" class="sr-only">Underline select</label>
        <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-brokenwhite border-[0.18rem] border-brown appearance-none dark:text-darklila dark:border-darklila focus:outline-none focus:ring-0 focus:border-gray-200">
            <option selected>Escoge una categoría</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
        </select>
        </form>
    </div>
  )
}

export default CategoryInput

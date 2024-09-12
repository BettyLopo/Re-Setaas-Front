import SearchInput from '@/components/inputs/SearchInput'
import React from 'react'

const Search = () => {
  return (
    <div className="bg-gr-white-blue h-screen w-screen ">
      <div className="flex flex-col py-[6rem] px-10 gap-4 ">
        <h1 className="font-ultra text-ptitle text-darklila text-left">Búsqueda</h1>
        <SearchInput />
      </div>
      
    </div>
  )
}

export default Search

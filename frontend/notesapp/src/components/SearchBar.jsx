import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'

export default function SearchBar({value, onChange, handleSearch}) {
  return (
    <div className='bg-slate-200 w-[550px] p-2.5 rounded-lg flex'>
        <input type="text"
        placeholder='Search notes'
        value={value}
        onChange={onChange}
        className='bg-slate-200 w-full outline-none'
        />
        <FaMagnifyingGlass size={22} className='text-slate-500 cursor-pointer hover:text-black' onClick={handleSearch} />
    </div>
  )
}

import React from 'react'
import { HiOutlineAdjustments } from 'react-icons/hi'
import { IoSearch } from 'react-icons/io5'

const SearchBar = () => {

  return (

    <div className='w-full text-[1.2rem] px-2 py-1 rounded-xl border-main border-[2px] flex justify-between items-center'>

        <IoSearch/>

        <input type='text' className='w-180 outline-none' placeholder='Поиск'/>

        <HiOutlineAdjustments/>

    </div>

  )

}

export default SearchBar
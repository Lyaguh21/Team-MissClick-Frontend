import React from 'react'
import { NavLink } from 'react-router'

interface IProps {
    text: string
    to: string
}

const LinkButton:React.FC<IProps> = ({text, to}) => {

  return (

    <div className='flex h-full justify-center items-center'>
    <NavLink to={to} className={({isActive}) => `h-full px-4 flex justify-center items-center ${isActive ? 'bg-red-700 text-white' : 'bg-transparent'}`}>
        {text}
    </NavLink>
    </div>

  )

}

export default LinkButton
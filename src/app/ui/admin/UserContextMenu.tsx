import React, { useState } from 'react'
import { FaEllipsisVertical } from 'react-icons/fa6'
import ContextWindow from '../global/ContextWindow'

const UserContextMenu = () => {

    const [isContextVisible, setIsContextVisible] = useState<boolean>(false)

  return (

    <div onClick={() => setIsContextVisible(!isContextVisible)} className='cursor-pointer relative text-[1.2rem]'>

        <FaEllipsisVertical className='text-main'/>  

        <ContextWindow visible={isContextVisible} className='w-50'>
            <h2>Сменить пароль</h2>
            <h2>Редактировать</h2>
            <h2 className='text-main'>Удалить</h2>
        </ContextWindow>

    </div>

  )

}

export default UserContextMenu
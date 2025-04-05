import React from 'react'
import UserContextMenu from './UserContextMenu'

interface IProps {
    user: {
        id: number,
        login: string,
        name: string,
        createdAt: string,
        role: 'admin' | 'regular'
    }
}

const UserCard: React.FC<IProps> = ({user}) => {

  return (

    <div className='border-main border-[2px] rounded-2xl flex flex-col gap-2 p-3'>

        <div className='flex justify-between'>   <p>Логин: {user.login}</p>  <UserContextMenu/>   </div>
        <p>ФИО: {user.name}</p>
        <p>Роль: {user.role}</p>
        <p>Дата создания: {user.createdAt}</p>

    </div>

  )

}

export default UserCard
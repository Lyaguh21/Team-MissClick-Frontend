import {create} from 'zustand'

const url = 'http://localhost:3100/'

interface IUser {
    id: string;
    name: string;
    login: string;
    password: string;
}

interface IUsers {
    currentUser: IUser | null;
    users: IUser[] | null;
    fetchUsers: () => void;
    updateUser: (user: IUser) => void;
    deleteUser: (id: number) => void;
    postUser: (user: IUser) => void;
    setCurrentUser: (user: IUser) => void
}

export const usersSlice = create<IUsers>((set) => ({
    currentUser: null,
    users: null,
    setCurrentUser: (user) => {
        set({currentUser: user})
    },
    fetchUsers: async () => {
        const res = await fetch(url + 'users');
        set({users: await res.json()})
    },
    updateUser: async (newUser) => {
        await fetch(url + `users/${newUser.id}`, {method: 'PATCH', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(newUser)})
        set((state) => ({users: state.users!.map((user: IUser) => {
            if (user.id === newUser.id) {
                return newUser
            } else {
                return newUser
            }
        })}))
    },
    deleteUser: async (id) => {
        await fetch(url + `users/${id}`, {method: 'DELETE', headers: {'Content-Type': 'application/json'}})
        set((state) => ({users: state.users?.filter((user) => user.id !== String(id))}))
    },
    postUser: async (user) => {
        await fetch(url + `users`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(user)})
        set((state) => ({users: [...state.users!, user]}))  
    }
}))
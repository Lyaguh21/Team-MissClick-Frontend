import axios from "axios";
import { create } from "zustand";
import api from "../../axiosInstance";

const url = "http://localhost:3000/";

interface IUser {
  id: number;
  name: string;
  login: string;
  createdAt: string;
  roles: ("USER" | "ADMIN")[];
}

export interface IPost {
  id: string;
  title?: string;
  content?: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
  lastEditor?: string;
}

type status = "CURRENT" | "POSTPONED" | "COMPLETED";

interface ITaskPost {
  status: status;
  title: string;
  content: string;
  image: string;
  priority: string;
  plannedDate: Date;
  assignedTo: string;
}

interface ITask extends ITaskPost {
  id: string;
}

interface ITaskSlice {
  tasks: ITask[];
  fetchTasks: () => void;
  postTask: (task: ITaskPost) => void;
  deleteTask: (id: number) => void;
  updateTask: (task: ITask) => void;
  updateStatus: (id: string, status: status) => void;
}

interface IPostsSlice {
  posts: IPost[];
  fetchPosts: () => void;
  postPost: (post: IPost) => void;
  deletePost: (id: number) => void;
  updatePost: (post: IPost) => void;
}

interface IUsers {
  currentUser: { name: string; login: string } | null;
  users: IUser[] | null;
  fetchUsers: () => void;
  updateUser: (user: IUser) => void;
  deleteUser: (id: number) => void;
  postUser: (user: IUser) => void;
  setCurrentUser: (user: { name: string; login: string } | null) => void;
}

export const usersSlice = create<IUsers>((set) => ({
  currentUser: null,
  users: null,
  setCurrentUser: (user) => {
    set({ currentUser: user });
  },
  fetchUsers: async () => {
    const res = axios.get("http://localhost:3000/toAll");
    set({ users: (await res).data });
  },
  updateUser: async (newUser) => {
    await fetch(url + `users/${newUser.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
    set((state) => ({
      users: state.users!.map((user: IUser) => {
        if (user.id === newUser.id) {
          return newUser;
        } else {
          return user;
        }
      }),
    }));
  },
  deleteUser: async (id) => {
    await fetch(url + `users/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    set((state) => ({
      users: state.users?.filter((user) => user.id !== id),
    }));
  },
  postUser: async (user) => {
    await fetch(url + `/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    set((state) => ({ users: [...state.users!, user] }));
  },
}));

export const postsSlice = create<IPostsSlice>((set) => ({
  posts: [],
  fetchPosts: async () => {
    const res = api.get("http://localhost:3000/viewAll");
    console.log((await res).data);
    set({ posts: (await res).data });
  },
  postPost: async (post) => {
    await fetch(url + `posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    set((state) => ({ posts: [...state.posts, post] }));
  },
  updatePost: async (newPost) => {
    api.patch("http://localhost:3000/update", {
      id: newPost.id,
      title: newPost.title,
      content: newPost.content,
      images: [newPost.image],
    });
  },
  deletePost: async (id) => {
    await axios.patch("http://localhost:3000/delete", {
      id: id,
    });
  },
}));

export const tasksSlice = create<ITaskSlice>((set) => ({
  tasks: [],
  fetchTasks: async () => {
    const res = await api.get("http://localhost:3000/tasks/getall");
    set({ tasks: res.data });
  },
  postTask: async (task) => {
    await api.post("http://localhost:3000/tasks/create", task);
  },
  deleteTask: async (id) => {
    await api.patch("http://localhost:3000/tasks/delete", { id: id });
  },
  updateTask: async (task) => {
    await api.patch("http://localhost:3000/tasks/update", task);
  },
  updateStatus: async (id, status) => {
    await api.patch("http://localhost:3000/tasks/statusupdate", { id, status });
  },
}));

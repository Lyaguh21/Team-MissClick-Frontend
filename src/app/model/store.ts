import { create } from "zustand";

const url = "http://localhost:3000/";

interface IUser {
  id: string;
  name: string;
  login: string;
  password: string;
}

export interface IPost {
  id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  lastEditor: string;
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
    const res = await fetch(url + "users");
    set({ users: await res.json() });
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
      users: state.users?.filter((user) => user.id !== String(id)),
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
    const res = await fetch("http://localhost:3000/viewAll");
    set({ posts: await res.json() });
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
    await fetch(url + `posts/${newPost.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });
    set((state) => ({
      posts: state.posts.map((post: IPost) => {
        if (post.id === newPost.id) {
          return newPost;
        } else {
          return post;
        }
      }),
    }));
  },
  deletePost: async (id) => {
    await fetch(url + `posts/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    set((state) => ({
      posts: state.posts.filter((post) => post.id !== String(id)),
    }));
  },
}));

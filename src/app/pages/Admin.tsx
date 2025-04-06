import UserCard from "../ui/admin/UserCard";
import SearchBar from "../ui/admin/SearchBar";
import ModalWindow from "../ui/global/ModalWindow";
import { useEffect, useState } from "react";
import PasswordResetModal from "../ui/admin/PasswordResetModal";
import { usersSlice } from "../model/store";

export default function Info() {
  const usersLOCAL = [
    {
      id: 1,
      login: "Max Mihal",
      name: "Максим Масикович Максимов",
      createdAt: "06.04.2025",
      roles: "USER",
    },
    {
      id: 2,
      login: "Antonov",
      name: "Антон Атонович Антонов",
      createdAt: "06.04.2025",
      roles: "ADMIN",
    },
    {
      id: 3,
      login: "ADMIN",
      name: "admin",
      createdAt: "06.04.2025",
      roles: "ADMIN",
    },
    {
      id: 4,
      login: "Yarwd",
      name: "Ярослав Ярич Ярославович",
      createdAt: "06.04.2025",
      roles: "USER",
    },
    {
      id: 1,
      login: "ADMIN",
      name: "admin",
      createdAt: "06.04.2025",
      roles: "ADMIN",
    },
    {
      id: 2,
      login: "Antonov",
      name: "Ярослав Ярич Ярославович",
      createdAt: "06.04.2025",
      roles: "ADMIN",
    },
  ];

  const userSlice = usersSlice();
  const users = userSlice.users;

  useEffect(() => {
    userSlice.fetchUsers();
  }, []);

  const [isResetPasswordModalShow, setIsResetPasswordModalShow] =
    useState<boolean>(false);
  const [isEditUserModalShow, setIsEditUserModalShow] =
    useState<boolean>(false);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col pl-10 pt-5 dark:text-white">
        <h1 className="text-4xl">Управление пользователями</h1>

        <section className="taskScroll px-[5px] w-200 flex flex-col items-center gap-3 mt-4 overflow-y-scroll h-180 pb-10">
          <SearchBar />

          {users?.map((user) => (
            <UserCard user={{ ...user }} />
          ))}
        </section>
        <ModalWindow isShow={isResetPasswordModalShow}>
          <PasswordResetModal setShow={setIsResetPasswordModalShow} />
        </ModalWindow>
        <ModalWindow isShow={isEditUserModalShow}>alo</ModalWindow>
      </div>
    </div>
  );
}

import UserCard from "../ui/admin/UserCard";
import SearchBar from "../ui/admin/SearchBar";
import ModalWindow from "../ui/global/ModalWindow";
import { useEffect, useState } from "react";
import PasswordResetModal from "../ui/admin/PasswordResetModal";
import { usersSlice } from "../model/store";
import { div } from "motion/react-client";

export default function Info() {
  const userSlice = usersSlice();

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

        <section className="taskScroll w-200 flex flex-col items-center gap-3 mt-4 overflow-y-scroll h-180 pb-10">
          <SearchBar />

          {userSlice.users &&
            userSlice.users.length > 0 &&
            userSlice.users?.map((user) => <UserCard user={{ ...user }} />)}
        </section>
        <ModalWindow isShow={isResetPasswordModalShow}>
          <PasswordResetModal setShow={setIsResetPasswordModalShow} />
        </ModalWindow>
        <ModalWindow isShow={isEditUserModalShow}>alo</ModalWindow>
      </div>
    </div>
  );
}

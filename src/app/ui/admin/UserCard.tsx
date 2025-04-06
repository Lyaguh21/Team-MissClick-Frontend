import React from "react";
import UserContextMenu from "./UserContextMenu";

interface IProps {
  user: {
    id: number;
    login: string;
    name: string;
    createdAt: string;
    roles: ("USER" | "ADMIN")[];
  };
}

const UserCard: React.FC<IProps> = ({ user }) => {
  return (
    <div
      className="border-main border-[2px] w-full rounded-2xl flex flex-col gap-2 p-3"
      key={user.id}
    >
      <div className="flex justify-between">
        {" "}
        <p>Логин: {user.login}</p> <UserContextMenu />{" "}
      </div>
      <p>ФИО: {user.name}</p>
      <p>Роль: {user.roles}</p>
      <p>Дата создания: {user.createdAt}</p>
    </div>
  );
};

export default UserCard;

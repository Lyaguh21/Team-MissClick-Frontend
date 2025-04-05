import { Outlet } from "react-router";
import { usersSlice } from "../../app/model/store";
import { useEffect } from "react";

export default function Info() {
  const userSlice = usersSlice();

  useEffect(() => {
    userSlice.fetchUsers();
  }, []);

  return (
    <div className="flex h-screen">
      <div className="basis-1/2 h-full flex justify-center items-center border-r-[1px] border-border-gray">
        <img src="\img\MainLogo.png" className="w-[434px] h-[290px]" />
      </div>
      <div className="basis-1/2 h-full">
        <Outlet />
      </div>
    </div>
  );
}

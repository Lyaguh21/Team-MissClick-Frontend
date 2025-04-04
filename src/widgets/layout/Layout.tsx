import { NavLink, Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <div className="w-full h-[50px] bg-amber-300">
        <div className="flex gap-5">
          <NavLink to={"/"}>
            <h2>Полезная информация</h2>
          </NavLink>
          <NavLink to={"/tasks"}>
            <h2>Задачи</h2>
          </NavLink>
          <NavLink to={"/admin"}>
            <h2>Администрирование</h2>
          </NavLink>
          <NavLink to={"/auth/login"}>
            <h2>Регистрация</h2>
          </NavLink>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

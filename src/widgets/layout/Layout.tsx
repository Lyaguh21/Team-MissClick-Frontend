import { Outlet } from "react-router";
import Logotype from "./components/Logotype";
import LinkButton from "./components/LinkButton";

export default function Layout() {
  return (
    <div className='w-screen h-screen fixed'>
      <div className="w-full h-[74px] bg-gray-300 flex justify-between pl-10 pr-5">
          <section className='flex h-full items-center'>
          
          <Logotype/>
          <LinkButton to={'/'} text={'Полезная информация'}/>
          <LinkButton to={'/tasks'} text={'Задачи'}/>
          <LinkButton to={'/admin'} text={'Администрирование'}/>
          </section>
          <LinkButton to={'/auth/login'} text={'Авторизация'}/>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

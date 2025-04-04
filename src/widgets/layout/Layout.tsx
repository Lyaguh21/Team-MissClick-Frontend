import {motion} from 'motion/react'
import { Outlet } from "react-router";
import Logotype from "./components/Logotype";
import LinkButton from "./components/LinkButton";
import ProfileButton from './components/ProfileButton';

export default function Layout() {

  const headerVar ={
    initial: {y: '-110%'},
    animate: {y: 0, transition:{duration: .6, type: 'spring', stiffness: 60}}
  }
  
  return (
    <div className='w-screen h-screen fixed bg-lt-bg dark:bg-dk-bg'>
      <motion.div 
      className="w-full h-[74px] bg-lt-bg dark:bg-dk-bg dark:text-white flex justify-between pl-10 pr-5 border-main border-b-[2px]"
      variants={headerVar}
      initial='initial'
      animate='animate'
      >
          <section className='flex h-full items-center'>
          <Logotype/>
          <LinkButton to={'/'} children={'Полезная информация'}/>
          <LinkButton to={'/tasks'} children={'Задачи'}/>
          <LinkButton to={'/admin'} children={'Администрирование'}/>
          </section>
          <ProfileButton/>
      </motion.div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

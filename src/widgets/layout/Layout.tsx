import { motion } from "motion/react";
import { Outlet } from "react-router";
import Logotype from "./components/Logotype";
import LinkButton from "./components/LinkButton";
import ProfileButton from "./components/ProfileButton";
import { useState } from "react";
import UserModal from "./components/UserModal";

export default function Layout() {
  const [visibleUserModal, setVisibleUserModal] = useState(false);

  const headerVar = {
    initial: { y: "-110%" },
    animate: {
      y: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 60 },
    },
  };

  return (
    <div className="switchTheme w-screen h-screen fixed bg-lt-bg dark:bg-dk-bg ">
      <motion.div
        className="switchTheme w-full h-[74px] bg-lt-bg dark:bg-dk-bg dark:text-white flex justify-between pl-10 pr-5 border-main border-b-[2px]"
        variants={headerVar}
        initial="initial"
        animate="animate"
      >
        <section className="flex h-full items-center">
          <Logotype />
          <LinkButton to={"/"} children={"Полезная информация"} />
          <LinkButton to={"/tasks"} children={"Задачи"} />
          <LinkButton to={"/admin"} children={"Администрирование"} />
        </section>

        <ProfileButton onClick={() => setVisibleUserModal(!visibleUserModal)} />
      </motion.div>
      <div className="relative">
        <UserModal visible={visibleUserModal} />
        <Outlet />
      </div>
    </div>
  );
}

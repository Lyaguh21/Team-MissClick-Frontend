import cn from "classnames";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import { usersSlice } from "../../../app/model/store";

interface modalProps {
  visible: boolean;
}

export default function UserModal({ visible }: modalProps) {
  const navigate = useNavigate();

  const userSlice = usersSlice();

  const containerRef = useRef<HTMLButtonElement | null>(null);

  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const htmlElement = document.querySelector("html");
    if (isDark) {
      htmlElement?.classList.remove("dark");
      htmlElement?.classList.add("light");
    } else {
      htmlElement?.classList.remove("light");
      htmlElement?.classList.add("dark");
    }
    setIsDark(!isDark);
  };

  const switchVar = {
    off: { x: 0, transition: { duration: 0.4, ease: "easeInOut" } },
    on: { x: 20, transition: { duration: 0.4, ease: "easeInOut" } },
  };

  const ModalVar = {
    hide: {
      x: "110%",
      opacity: 0,
      transition: { duration: 0.8, type: "spring", stiffness: 60 },
    },
    show: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, type: "spring", stiffness: 60 },
    },
  };

  return (
    <motion.div
      variants={ModalVar}
      initial="hide"
      animate={visible ? "show" : "hide"}
      onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      className={cn(
        "switchTheme w-[400px] border-[1px] dark:text-white bg-modal-bg dark:bg-dl-cart-bg rounded-[22px] absolute z-10 top-[7px] right-[7px] flex-col"
      )}
    >
      <div className="px-[21px] pt-[23px] border-b-[1px] flex flex-col gap-[23px]">
        <h2 className="font-bold">УЧЕТНАЯ ЗАПИСЬ</h2>
        {userSlice.currentUser ? (
          <div className="flex gap-[19px] mb-[23px]">
            <IoPersonCircleOutline className="size-[50px]" />
            <div className="py-[7px] ">
              <h2 className="font-bold">{userSlice.currentUser.name}</h2>
              <h2 className="text-[12px] font-medium">
                {userSlice.currentUser.login}
              </h2>
            </div>
          </div>
        ) : (
          <p className="py-[7px]">Войдите в аккаунт</p>
        )}
      </div>
      <div className="p-[23px] flex flex-col gap-[23px]">
        <div className="flex gap-[27px]">
          <h2>Смена темы</h2>
          <button
            ref={containerRef}
            className="h-5 w-10 rounded-full border-black dark:border-white border-[1px]"
            onClick={toggleTheme}
          >
            <motion.div
              className="size-[18px] rounded-full bg-black dark:bg-white"
              variants={switchVar}
              initial="off"
              animate={isDark ? "on" : "off"}
            />
          </button>
        </div>
        <button>
          <h2
            className="text-main cursor-pointer"
            onClick={
              userSlice.currentUser
                ? () => {
                    userSlice.setCurrentUser(null);
                    localStorage.removeItem("token");
                    navigate("/auth/login");
                  }
                : () => navigate("/auth/login")
            }
          >
            {userSlice.currentUser ? "Выход" : "Вход"}
          </h2>
        </button>
      </div>
    </motion.div>
  );
}

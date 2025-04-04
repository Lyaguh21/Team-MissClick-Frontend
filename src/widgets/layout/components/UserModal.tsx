import cn from "classnames";
import { motion } from "motion/react";
import { useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";

interface modalProps {
  visible: boolean;
}

export default function UserModal({ visible }: modalProps) {
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
  return (
    <motion.div
      className={cn(
        "switchTheme w-[400px] border-[1px] dark:text-white bg-modal-bg dark:bg-dl-cart-bg rounded-[22px] absolute z-10 top-[7px] right-[7px] flex-col",
        {
          ["flex"]: visible,
          ["hidden"]: !visible,
        }
      )}
    >
      <div className="px-[21px] pt-[23px] border-b-[1px] flex flex-col gap-[23px]">
        <h2 className="font-bold">УЧЕТНАЯ ЗАПИСЬ</h2>
        <div className="flex gap-[19px] mb-[23px]">
          <IoPersonCircleOutline className="size-[50px]" />
          <div className="py-[7px] ">
            <h2 className="font-bold">Имя пользователя</h2>
            <h2 className="text-[12px] font-medium">Логин</h2>
          </div>
        </div>
      </div>
      <div className="p-[23px] flex flex-col gap-[23px]">
        <div className="flex gap-[27px]">
          <h2>Смена темы</h2>
          <button className="h-4" onClick={toggleTheme}>
            Switch
          </button>
        </div>
        <h2 className="text-main cursor-pointer">Выход</h2>
      </div>
    </motion.div>
  );
}

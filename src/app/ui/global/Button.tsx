import { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  appearance?: string;
}

export default function Button({
  children,
  className,
  appearance,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "",
        {
          ["w-[143px] h-[43px] bg-main hover:bg-hover-main active:bg-main text-white text-base font-normal rounded-full "]:
            appearance == "base",
          ["h-[60px] px-[30px]  bg-[#EAEAEA] dark:bg-[#2E2E2E] dark:text-white text-[24px] dark:hover:text-black hover:bg-[#bcbcbc] active:bg-[#EAEAEA] duration-300"]:
            appearance == "grayButton",
          ["w-[248px] h-[60px] uppercase bg-main hover:bg-hover-main active:bg-main text-white font-semibold rounded-full"]:
            appearance == "big",
          ["w-[143px] h-[43px] bg-none hover:bg-hover-main active:bg-none text-main hover:text-white border-[2px] border-main text-base font-normal rounded-full "]:
            appearance == "cancelModal",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

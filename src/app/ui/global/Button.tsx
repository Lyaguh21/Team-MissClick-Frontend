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
          ["px-[30px] py-[19px] bg-[#EAEAEA] text-[24px] hover:bg-[#bcbcbc] active:bg-[#EAEAEA] duration-300"]:
            appearance == "grayButton",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

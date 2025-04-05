import React from "react";
import { NavLink } from "react-router";

interface IProps {
  children: React.ReactNode;
  to: string;
}

const LinkButton: React.FC<IProps> = ({ children, to }) => {
  return (
    <div className="flex h-full justify-center items-center">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `h-full px-4 flex justify-center items-center transition-all duration-100 hover:bg-hover-main ${
            isActive ? "bg-main text-white" : "bg-transparent"
          }`
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default LinkButton;

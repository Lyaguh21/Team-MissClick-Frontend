import React, { useState } from "react";
import { RegisterOptions, UseFormRegisterReturn } from "react-hook-form";
import { IForm } from "../../pages/Register";

interface IProps {
  registerOps: RegisterOptions<IForm, 'check'>;
  register: (name: 'check', options?: RegisterOptions<IForm, 'check'>) => UseFormRegisterReturn;
  error: boolean
}

const Checkbox: React.FC<IProps> = ({registerOps, register, error}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className="size-[19px]">
      <input
        type="checkbox"
        onInput={() => {
          setIsChecked(!isChecked);
        }}
        {...register('check', registerOps)}
      />

      <svg
        className={`checkbox ${error ? 'checkbox--error': ''} ${isChecked ? "checkbox--active" : ""}`}
        aria-hidden="true"
        viewBox="0 0 15 11"
        fill="none"
      >
        <path
          d="M1 4.5L5 9L14 1"
          strokeWidth="2"
          stroke={isChecked ? "#fff" : "none"}
        />
      </svg>
    </label>
  );
}

export default Checkbox

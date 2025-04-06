import React from "react";
import { useForm } from "react-hook-form";

interface IForm {
  pass: string;
  passRep: string;
}

const PasswordResetModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  return (
    <form>
      <div className="flex w-full gap-2">
        <p>Введите пароль:</p>
        <input
          type="text"
          {...register("pass", {
            required: "Поле пароль не может быть пустым",
          })}
        />
      </div>
      <div className="flex w-full gap-2">
        <p>Повторите пароль:</p>
        <input type="text" />
      </div>
    </form>
  );
};

export default PasswordResetModal;

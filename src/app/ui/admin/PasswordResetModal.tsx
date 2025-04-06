import { useForm } from "react-hook-form";
import axios from "axios";

interface IForm {
  id: number; // добавим ID пользователя
  pass: string;
  passRep: string;
}

const PasswordResetModal = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit = async (data: IForm) => {
    if (data.pass !== data.passRep) {
      alert("Пароли не совпадают");
      return;
    }

    try {
      await axios.post("/admin/change-password", {
        id: data.id,
        newPassword: data.pass,
      });

      alert("Пароль успешно изменён");
      reset();
    } catch (err) {
      console.error(err);
      alert("Ошибка при смене пароля");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <p>ID пользователя:</p>
        <input
          type="number"
          {...register("id", { required: "Укажите ID пользователя" })}
          className="border p-1"
        />
      </div>

      <div className="flex gap-2 items-center">
        <p>Введите пароль:</p>
        <input
          type="password"
          {...register("pass", {
            required: "Пароль обязателен",
            minLength: { value: 6, message: "Минимум 6 символов" },
          })}
          className="border p-1"
        />
      </div>

      <div className="flex gap-2 items-center">
        <p>Повторите пароль:</p>
        <input
          type="password"
          {...register("passRep", {
            required: "Повторите пароль",
            validate: (value) =>
              value === watch("pass") || "Пароли не совпадают",
          })}
          className="border p-1"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Сменить пароль
      </button>

      <div className="text-red-500">
        {errors.id?.message}
        {errors.pass?.message}
        {errors.passRep?.message}
      </div>
    </form>
  );
};

export default PasswordResetModal;

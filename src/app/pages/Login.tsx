import { Link, useNavigate } from "react-router";
import Button from "../ui/global/Button";
import Input from "../ui/global/Input";
import Label from "../ui/global/Label";
import Title from "../ui/global/Title";
import { useForm } from "react-hook-form";
import { usersSlice } from "../model/store";

interface IForm {
  login: string;
  pass: string;
}

export default function Login() {
  const userSlice = usersSlice();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit = (data: IForm) => {
    if (!userSlice.users!.find((item) => item.login === data.login)) {
      setError("login", { type: "custom", message: "Пользователь не найден" });
      clearErrors("pass");
    } else if (
      userSlice.users!.find((item) => item.login === data.login)!.password !==
      data.pass
    ) {
      setError("pass", { type: "custom", message: "Пароль не верен" });
      clearErrors("login");
    } else {
      clearErrors("login");
      clearErrors("pass");
      userSlice.setCurrentUser(
        userSlice.users!.find((user) => user.login === data.login)!
      );
      navigate("/");
    }
  };

  return (
    <section className="px-[150px] pt-[180px] dark:bg-dk-bg h-full dark:text-white ">
      <Title className="mb-[30px]">Вход</Title>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[30px]"
      >
        <div>
          <Label htmlFor="name">Ваш логин</Label>
          <Input
            placeholder="Логин"
            type="text"
            className="mt-1"
            {...register("login")}
          />
          {errors.login && (
            <p className="text-red-500">{errors.login.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="name">Ваш пароль</Label>
          <Input
            placeholder="Пароль"
            type="password"
            className="mt-1"
            {...register("pass")}
          />
          {errors.pass && <p className="text-red-500">{errors.pass.message}</p>}
        </div>

        <div className="flex flex-col mt-[20px] items-center gap-[20px]">
          <Button appearance="big">Вход</Button>

          <h2 className="flex flex-col items-center">
            <div>Нет аккаунта?</div>
            <Link
              to={"/auth/register"}
              className="text-main hover:text-hover-main "
            >
              Зарегистрироваться
            </Link>
          </h2>
        </div>
      </form>
    </section>
  );
}

import { Link, useNavigate } from "react-router";
import Button from "../ui/global/Button";
import Input from "../ui/global/Input";
import Label from "../ui/global/Label";
import Title from "../ui/global/Title";
import { useForm } from "react-hook-form";

import axios from "axios";
import { usersSlice } from "../model/store";

interface IForm {
  login: string;
  pass: string;
}

export default function Login() {
  const navigate = useNavigate();
  const userSlice = usersSlice();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit = async (data: { login: string; pass: string }) => {
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        login: data.login,
        password: data.pass,
      });

      const token = response.data.access_token;
      localStorage.setItem("token", token);
      userSlice.setCurrentUser({
        name: response.data.name,
        login: response.data.login,
      });
      navigate("/");
    } catch (error: any) {
      console.error("Ошибка входа:", error);
      alert("Неверный логин или пароль");
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

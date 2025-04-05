import { Link, useNavigate } from "react-router";
import Button from "../ui/global/Button";
import Input from "../ui/global/Input";
import Label from "../ui/global/Label";
import Title from "../ui/global/Title";
import Checkbox from "../ui/global/Checkbox";
import { useForm } from "react-hook-form";
import { usersSlice } from "../model/store";
import axios from "axios";

export interface IForm {
  login: string;
  name: string;
  pass: string;
  passRep: string;
  check: boolean;
}

export default function Info() {
  const navigate = useNavigate();

  const userSlice = usersSlice();

  const {
    register,
    clearErrors,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit = (data: IForm) => {
    // if (data.pass !== data.passRep) {
    //   setError("passRep", {
    //     type: "custom",
    //     message: "Пароли не соответствуют",
    //   });
    // } else if (userSlice.users!.find((item) => item.login === data.login)) {
    //   setError("login", { type: "custom", message: "Логин уже используется" });
    //   clearErrors("passRep");
    // }
      axios.post("http://localhost:3000/auth/register", {
        name: data.name,
        login: data.login,
        password: data.pass,
      }).then((response) => {console.log(response)});
      navigate("/auth/login");
    // }
  };

  return (
    <section className="px-[150px] pt-[55px]">
      <Title className="mb-[30px]">Регистрация</Title>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[17px]"
      >
        <div>
          <Label htmlFor="name">Ваш логин</Label>
          <Input
            placeholder="Логин"
            type="text"
            className="mt-1"
            {...register("login", {
              minLength: {
                value: 4,
                message: "Логин должен быть не меньше 4 символов",
              },
              required: "Поле логин не может быть пустым",
              pattern: {
                value: /^[a-zA-Z]+$/g,
                message:
                  "Логин может содержать только символы английского алфавита",
              },
            })}
          />
          {errors.login && (
            <p className="text-red-500">{errors.login.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="name">Ваш ФИО</Label>
          <Input
            placeholder="ФИО"
            type="text"
            className="mt-1"
            {...register("name", {
              pattern: {
                value: /^[а-яА-Я]+$/g,
                message: "ФИО может содержать только символы русского алфавита",
              },
            })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <Label htmlFor="name">Ваш пароль</Label>
          <Input
            placeholder="Пароль"
            id="password"
            type="password"
            className="mt-1"
            {...register("pass", {
              required: "Поле пароль не может быть пустым",
              minLength: {
                value: 8,
                message: "Пароль должен содержать не меньше 8 символов",
              },
              pattern: {
                value: /^[a-zA-Z0-9,.?!_-]+$/g,
                message:
                  "Пароль может содержать только сиволы латиницы и спецсимволы(,.?!_-)",
              },
            })}
          />
          {errors.pass && <p className="text-red-500">{errors.pass.message}</p>}
        </div>

        <div>
          <Label htmlFor="name">Повторите пароль</Label>
          <Input
            placeholder="Пароль"
            id="password"
            type="password"
            className="mt-1"
            {...register("passRep", { required: "Повторите пароль" })}
          />
        </div>

        <div className="flex flex-col mt-[20px] items-center gap-[24px]">
          <Button appearance="big" type="submit">
            Зарегистрироваться
          </Button>
          <div className="flex gap-[13px]">
            <Checkbox
              error={errors.check ? true : false}
              register={register}
              registerOps={{ required: true }}
            />
            <label
              htmlFor="accept"
              className={`${
                errors.check ? "text-red-500" : "text-text-gray"
              } h-[18px] leading-[18px] mt-[3px]`}
            >
              Согласие на обработку персональных данных
            </label>
          </div>

          <h2 className="flex flex-col items-center">
            <div className="text-text-gray">Есть аккаунт?</div>
            <Link
              to={"/auth/login"}
              className="text-main hover:text-hover-main  "
            >
              Войти
            </Link>
          </h2>
        </div>
      </form>
    </section>
  );
}

import { Link } from "react-router";
import Button from "../ui/global/Button";
import Input from "../ui/global/Input";
import Label from "../ui/global/Label";
import Title from "../ui/global/Title";
import Checkbox from "../ui/global/Checkbox";

export default function Info() {
  return (
    <section className="px-[150px] pt-[70px]">
      <Title className="mb-[30px]">Регистрация</Title>

      <form action="" className="flex flex-col gap-[17px]">
        <div>
          <Label htmlFor="name">Ваш логин</Label>
          <Input
            placeholder="Логин"
            type="text"
            name="login"
            id="login"
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="name">Ваш ФИО</Label>
          <Input placeholder="ФИО" id="FIO" type="text" className="mt-1" />
        </div>

        <div>
          <Label htmlFor="name">Ваш пароль</Label>
          <Input
            placeholder="Пароль"
            id="password"
            type="password"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="name">Повторите пароль</Label>
          <Input
            placeholder="Пароль"
            id="password"
            type="password"
            className="mt-1"
          />
        </div>

        <div className="flex flex-col mt-[20px] items-center gap-[24px]">
          <Button appearance="big">Зарегистрироваться</Button>
          <div className="flex gap-[13px]">
            <Checkbox />
            <label
              htmlFor="accept"
              className="text-text-gray h-[18px] leading-[18px] mt-[3px]"
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

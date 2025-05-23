import React from "react";
import { useForm } from "react-hook-form";
import Button from "../global/Button";
import { tasksSlice } from "../../model/store";
import { ImCross } from "react-icons/im";

interface IProps {
  setCreateModal: (arg: boolean) => void;
}

interface IForm {
  title: string;
  content: string;
  img: string | null;
  plannedDate: string;
  priority: string;
}

const CreateTask: React.FC<IProps> = ({ setCreateModal }) => {
  const taskSlice = tasksSlice();
  const nowDate = new Intl.DateTimeFormat("ru-RU").format(new Date());

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit = (data: IForm) => {
    taskSlice.postTask({
      ...data,
      plannedDate: new Date(data.plannedDate),
      status: "POSTPONED",
      assignedTo: "1",
      image: "",
    });
    setTimeout(() => taskSlice.fetchTasks(), 300);
    setCreateModal(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-3 h-auto"
    >
      <div className="flex justify-between w-full ">
        <div className="flex flex-col gap-[30px] h-[100%] ">
          <div className="flex flex-col">
            <div className="flex justify-between w-full gap-[40px]">
              <input
                className=" bg-child-post dark:bg-[#2E2E2E] rounded-lg p-[14px] w-full  outline-none "
                type="text"
                placeholder="Название"
                {...register("title", {
                  minLength: {
                    value: 6,
                    message: "Название не может быть короче 6 символов",
                  },
                  required: "поле название не может быть пустым",
                })}
              />
              <ImCross
                className="self-center hover:opacity-65"
                onClick={() => setCreateModal(false)}
              />
            </div>

            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
          </div>
          <div className="flex gap-[36px]">
            <div className="bg-child-post rounded-[10px] p-[14px] ">
              Дата: {nowDate}
              {" - "}
              <input
                placeholder="Дедлайн"
                type="text"
                className="w-[90px] outline-none"
                {...register("plannedDate", {
                  required: "это обязательное поле",
                  pattern: {
                    value: /[0-9]{2}\.[0-9]{2}\.[0-9]{4}/g,
                    message: "Неверный формат даты",
                  },
                })}
              />
              {errors.plannedDate && (
                <p className="text-red-500">{errors.plannedDate.message}</p>
              )}
            </div>

            <div className="bg-child-post rounded-[10px] p-[14px] ">
              Приоритет:
              <select
                className="w-[90px] outline-none"
                {...register("priority")}
              >
                <option value={"HIGH"}>Высокий</option>
                <option value={"MEDIUM"}>Средний</option>
                <option value={"LOW"}>Низкий</option>
              </select>
            </div>

            <div className="bg-child-post rounded-[10px] p-[14px] ">
              Ответственный:
              <select className="w-[90px] outline-none">
                <option value={"id1"}>user1</option>
                <option value={"id2"}>user2</option>
                <option value={"id3"}>user3</option>
              </select>
            </div>

            <div className="bg-child-post rounded-[10px] p-[14px] flex">
              <label htmlFor="files">Прикрепить файл</label>
              <input type="file" id="files" className="w-[30px] hidden" />
            </div>
          </div>
          <textarea
            placeholder="Описание"
            className="resize-none bg-child-post dark:bg-[#2E2E2E]  rounded-lg px-2 py-1  w-full h-[320px] outline-none"
            {...register("content", {
              required: "поле описание не может быть пустым",
            })}
          />

          {errors.content && (
            <p className="text-red-500">{errors.content.message}</p>
          )}
        </div>
      </div>

      <Button className="w-full" type="submit" appearance="base">
        Создать задачу
      </Button>
    </form>
  );
};

export default CreateTask;

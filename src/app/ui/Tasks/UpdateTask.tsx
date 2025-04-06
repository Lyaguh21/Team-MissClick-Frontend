import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { tasksSlice } from "../../model/store";

interface IProps {
  setUpdateModal: (arg: boolean) => void;
  form: IForm;
  taskid: string;
}

interface IForm {
  title: string;
  content: string;
  image: string | null;
  id: string;
  plannedDate: Date;
}

const UpdateTask: React.FC<IProps> = ({ setUpdateModal, form, taskid }) => {
  const taskSlice = tasksSlice();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      ...form,
      plannedDate: form.plannedDate.slice(0, 10).split("-").reverse().join("."),
    },
  });

  const [img, setImg] = useState<string | null>(form.image);

  const imageChangeHandle = (e: any) => {
    const image = e.target.files[0];
    if (image) {
      setImg(URL.createObjectURL(image));
    }
  };

  const onSubmit = (data: IForm) => {
    taskSlice.updateTask({
      id: Number(taskid),
      title: data.title,
      content: data.content,
      image: img ? img : "",
      plannedDate: new Date(data.plannedDate),
    });
    setTimeout(() => taskSlice.fetchTasks(), 300)    ;
    setUpdateModal(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-3 z-30"
    >
      <div className="flex justify-between w-full h-50">
        <div className="flex flex-col justify-between h-[100%] ">
          <div className="flex flex-col gap-2">
            <p>Введите название:</p>

            <input
              className="outline-none bg-child-post rounded-lg px-2 py-1 w-80"
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

            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}

            <p>Крайний срок</p>

            <input
              type="text"
              className="outline-none bg-child-post rounded-lg px-2 py-1 w-80"
              placeholder={"дд.мм.гггг"}
              {...register("plannedDate", {
                required: "Поле не может быть пустым",
                pattern: {
                  value: /[0-9]{2}\.[0-9]{2}\.[0-9]{4}/g,
                  message: "неверный формат даты",
                },
              })}
            />

            {errors.plannedDate && (
              <p className="text-red-500">{errors.plannedDate.message}</p>
            )}
          </div>

          <p>Описание:</p>
        </div>

        <label
          className={
            (img ? `bg-[src(${img})]` : "bg-modal-bg ") +
            " size-50 rounded-xl overflow-hidden"
          }
        >
          {img && <img src={img} className="object-cover size-full" />}{" "}
          <input onChange={imageChangeHandle} className="hidden" type="file" />
        </label>
      </div>

      <div className="flex flex-col mt-4 w-full">
        <textarea
          className="resize-none bg-child-post rounded-lg px-2 py-1 h-40 w-full"
          {...register("content", {
            required: "поле описание не может быть пустым",
          })}
        />

        {errors.content && (
          <p className="text-red-500">{errors.content.message}</p>
        )}
      </div>

      <button
        className="w-full px-2 py-1 border-[2px] border-main text-white bg-main rounded-full"
        type="submit"
      >
        Сохранить статью
      </button>

      <button
        onClick={() => setUpdateModal(false)}
        className="w-full px-2 py-1 border-[2px] border-main text-main rounded-full"
        type="button"
      >
        Отмена
      </button>
    </form>
  );
};

export default UpdateTask;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../global/Button";
import { IoMdPhotos } from "react-icons/io";
import api from "../../../axiosInstance";
import { postsSlice } from "../../model/store";

interface IProps {
  setCreateModal: (arg: boolean) => void;
}

interface IForm {
  title: string;
  content: string;
  img: string | null;
}

const CreateModal: React.FC<IProps> = ({ setCreateModal }) => {
  const postSlice = postsSlice();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const [img, setImg] = useState<string | null>(null);

  const imageChangeHandle = (e: any) => {
    const image = e.target.files[0];
    if (image) {
      setImg(URL.createObjectURL(image));
    }
  };

  const onSubmit = (data: IForm) => {
    api
      .post("/create", {
        title: data.title,
        content: data.content,
        images: img ? [img] : [], // backend ждёт массив строк
      })
      .then(() => {
        postSlice.fetchPosts();
        setCreateModal(false);
      })
      .catch((err) => {
        console.error("Ошибка при создании статьи:", err);
        alert("Не удалось создать статью");
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-3"
    >
      <div className="flex justify-between w-full h-50">
        <div className="flex flex-col justify-between h-[100%] ">
          <div className="flex flex-col">
            <p>Введите название:</p>

            <input
              className=" bg-child-post dark:bg-[#2E2E2E] rounded-lg px-2 py-1 w-80  outline-none"
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
          </div>
          <p>Введите описание:</p>
        </div>

        <label
          className={
            (img
              ? `bg-[src(${img})]`
              : "bg-modal-bg dark:bg-[#2E2E2E] flex justify-center items-center") +
            " size-50 rounded-xl overflow-hidden"
          }
        >
          {img && <img src={img} className="object-cover size-full" />}
          {!img && <IoMdPhotos className="size-10" />}
          <input
            onChange={imageChangeHandle}
            className="hidden outline-none"
            type="file"
          />
        </label>
      </div>

      <div className="flex flex-col mt-4 w-full">
        <textarea
          placeholder="Описание"
          className="resize-none bg-child-post dark:bg-[#2E2E2E]  rounded-lg px-2 py-1 h-40 w-full outline-none"
          {...register("content", {
            required: "поле описание не может быть пустым",
          })}
        />

        {errors.content && (
          <p className="text-red-500">{errors.content.message}</p>
        )}
      </div>

      <Button className="w-full" type="submit" appearance="base">
        Сохранить статью
      </Button>

      <Button
        className="w-full"
        type="submit"
        appearance="cancelModal"
        onClick={() => setCreateModal(false)}
      >
        Отмена
      </Button>
    </form>
  );
};

export default CreateModal;

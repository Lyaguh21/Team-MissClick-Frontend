import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { postsSlice, usersSlice } from "../../model/store";
import Button from "../global/Button";
import { IoMdPhotos } from "react-icons/io";

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
  const userSlice = usersSlice();

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
    let id;
    const date = new Date();
    if (postSlice.posts.length < 1) {
      id = 1;
    } else {
      id = Number(postSlice.posts[postSlice.posts.length - 1].id) + 1;
    }
    postSlice.postPost({
      id: String(id),
      title: data.title,
      content: data.content,
      image: img ? img : "",
      createdAt: date.toLocaleDateString(),
      updatedAt: date.toLocaleDateString(),
      lastEditor: userSlice.currentUser!.login,
    });
    postSlice.fetchPosts();
    setCreateModal(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-3"
    >
      <div className="flex justify-between w-full h-50">
        <div className="flex flex-col justify-between h-[100%] ">
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

<<<<<<< HEAD
    <div className='flex justify-between w-full h-50'>

        <div className='flex flex-col justify-between h-[100%] '>
            <div className='flex flex-col gap-2'>
            <p>Введите название:</p>

            <input className='outline-none bg-child-post rounded-lg px-2 py-1 w-80' type="text" placeholder='Название' {...register('title', {minLength: {value: 6, message: 'Название не может быть короче 6 символов'}, required: 'поле название не может быть пустым'})}/>

            {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
            </div>

            <p>Описание:</p>
=======
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
>>>>>>> c6174a7709ea4c064ae0c3942fd0e41e3d9a7a83

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

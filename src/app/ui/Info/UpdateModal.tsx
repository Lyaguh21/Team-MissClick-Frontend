import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { postsSlice, usersSlice } from "../../model/store";

interface IProps {
  setUpdateModal: (arg: boolean) => void;
  form: IForm;
  postid: string;
}

interface IForm {
  title: string;
  content: string;
  img: string | null;
}

const UpdateModal: React.FC<IProps> = ({ setUpdateModal, form, postid }) => {
  const postSlice = postsSlice();
  const userSlice = usersSlice();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({ defaultValues: form });

  const [img, setImg] = useState<string | null>(form.img);

  const imageChangeHandle = (e: any) => {
    const image = e.target.files[0];
    if (image) {
      setImg(URL.createObjectURL(image));
    }
  };

  const onSubmit = (data: IForm) => {
    const date = new Date();
    postSlice.updatePost({
      id: String(postid),
      title: data.title,
      content: data.content,
      image: img ? img : "",
      createdAt: postSlice.posts.find((post) => post.id === postid)!.createdAt,
      updatedAt: date.toLocaleDateString(),
      lastEditor: userSlice.currentUser!.login,
    });
    postSlice.fetchPosts();
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

export default UpdateModal;

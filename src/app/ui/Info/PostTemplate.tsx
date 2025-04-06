import { useState } from "react";
import { TbDots } from "react-icons/tb";
import ContextWindow from "../global/ContextWindow";
import { IPost, postsSlice } from "../../model/store";
import { IoMdPhotos } from "react-icons/io";

interface PostTemplateProps {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  author: string;
  image?: string;
  viewContext: () => void;
  onClick?: () => void;
  setCurrentPost: (post: {
    id: string;
    title: string;
    content: string;
    image: string;
  }) => void;
  setUpdateModal: (arg: boolean) => void;
  setCurrentShowenPost: (post: IPost) => void;
}

export default function PostTemplate({
  id,
  title,
  content,
  createdAt,
  author,
  image = " ",
  viewContext,
  setCurrentPost,
  setUpdateModal,
  setCurrentShowenPost,
}: PostTemplateProps) {
  const postSlice = postsSlice();

  const deleteHandle = () => {
    postSlice.deletePost(id);
    setTimeout(() => postSlice.fetchPosts(), 500);
  };

  const [visibleContext, setVisibleContext] = useState(false);
  const [imageVisible, setImageVisible] = useState<boolean>(true);
  return (
    <div
      className="switchTheme max-h-90 basis-[calc(33.33%-6px)] h-auto flex flex-col justify-between relative dark:text-white bg-post-card-bg dark:bg-post-card-dk-bg rounded-[15px] border-[1px] border-main p-[15px]"
      onClick={(e) => {
        e.stopPropagation();
        setVisibleContext(false);
      }}
      key={id}
    >
      <ContextWindow visible={visibleContext}>
        <h2
          onClick={() => {
            viewContext();
            setVisibleContext(false);
            setCurrentShowenPost({
              title: title,
              content: content,
              lastEditor: author,
              updatedAt: createdAt,
              id: String(id),
              image: image!,
            });
          }}
          className=" cursor-pointer"
        >
          Просмотреть
        </h2>
        <h2
          onClick={() => {
            setCurrentPost({
              title: title,
              content: content,
              id: String(id),
              image: image,
            });
            setUpdateModal(true);
            setVisibleContext(false);
          }}
          className="cursor-pointer"
        >
          Редактировать
        </h2>

        <h2 onClick={deleteHandle} className="text-main cursor-pointer">
          Удалить
        </h2>
      </ContextWindow>
      <div className="flex justify-between mb-[10px]">
        <h2 className="text-[24px] w-[350px] text-ellipsis overflow-hidden text-nowrap">
          {title}
        </h2>
        <TbDots
          className="self-center size-7 hover:opacity-70 stroke-main"
          onClick={(e) => {
            e.stopPropagation();
            setVisibleContext(!visibleContext);
          }}
        />
      </div>
      <div className="flex justify-between gap-[10px]">
        <div className="flex flex-col justify-between h-50 overflow-hidden ">
          <p className="mb-4 h-[160px] overflow-hidden ">{content}</p>
          <div className="basis-1/2 flex flex-col justify-end">
            <h2 className="switchTheme w-full bg-child-post dark:bg-dk-bg p-[8px] rounded-br-[10px]">
              Создано: {createdAt}
            </h2>
          </div>
        </div>
        {imageVisible && (
          <img
            onError={() => setImageVisible(false)}
            src={image}
            className="switchTheme object-cover bg-child-post dark:bg-dk-bg aspect-square rounded-[10px] w-50 border-[1px] border-main"
          />
        )}
        {!imageVisible && (
          <div className="switchTheme object-cover bg-child-post dark:bg-dk-bg aspect-square rounded-[10px] w-50 border-[1px] border-main flex justify-center items-center">
            <IoMdPhotos className="size-10" />
          </div>
        )}
      </div>
      <h2 className="switchTheme w-full mt-[10px] bg-child-post dark:bg-dk-bg p-[8px] rounded-tr-[10px]">
        Редактор: {author}
      </h2>
    </div>
  );
}

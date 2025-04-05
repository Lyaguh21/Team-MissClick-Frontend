import { useState } from "react";
import { TbDots } from "react-icons/tb";
import ContextWindow from "../global/ContextWindow";
import { postsSlice } from "../../model/store";

interface PostTemplateProps {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  author: string;
  image?: string;
}

export default function PostTemplate({
  id,
  title,
  content,
  createdAt,
  author,
  image = '',
}: PostTemplateProps) {

  const postSlice = postsSlice()

  const deleteHandle = () => {
    postSlice.deletePost(id)
    postSlice.fetchPosts()
  }

  const [visibleContext, setVisibleContext] = useState(false);
  return (
    <div
      className="switchTheme max-h-90 basis-[calc(33.33%-6px)] h-auto flex flex-col justify-between relative dark:text-white bg-post-card-bg dark:bg-post-card-dk-bg rounded-[15px] border-[1px] border-main p-[25px]"
      onClick={(e) => {
        e.stopPropagation();
        setVisibleContext(false);
      }}
      key={id}
    >
      <ContextWindow visible={visibleContext}>
        <h2>Редактировать</h2>
        <h2 onClick={deleteHandle} className="text-main">Удалить</h2>
      </ContextWindow>
      <div className="flex justify-between mb-[10px]">
        <h2 className="text-[24px]">{title}</h2>
        <TbDots
          className="self-center size-7 hover:opacity-70 stroke-main"
          onClick={(e) => {
            e.stopPropagation();
            setVisibleContext(!visibleContext);
          }}
        />
      </div>
      <div className="flex justify-between gap-[10px]">
        <div className='flex flex-col justify-between h-50'>
        <p className='mb-4'>{content}</p>
        <div className="basis-1/2 flex flex-col justify-end">
          <h2 className="switchTheme w-full bg-child-post dark:bg-dk-bg p-[8px] rounded-br-[10px]">
            Создано: {createdAt}
          </h2>
        </div>
        </div>
        {image && <img src={image} className="switchTheme  object-cover bg-child-post dark:bg-dk-bg aspect-square rounded-[10px] w-50 border-[1px] border-main" />}
      </div>
      <h2 className="switchTheme w-full mt-[10px] bg-child-post dark:bg-dk-bg p-[8px] rounded-tr-[10px]">
        Редактор: {author}
      </h2>
    </div>
  );
}

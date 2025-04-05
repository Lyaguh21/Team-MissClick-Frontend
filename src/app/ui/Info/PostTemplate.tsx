import { useState } from "react";
import { TbDots } from "react-icons/tb";
import ContextWindow from "../global/ContextWindow";

interface PostTemplateProps {
  id: number;
  title: string;
  createdAt: any;
  author: string;
  image?: string;
}

export default function PostTemplate({
  id,
  title,
  createdAt,
  author,
  image,
}: PostTemplateProps) {
  const [visibleContext, setVisibleContext] = useState(false);
  const formateDate = new Intl.DateTimeFormat("ru-RU").format(createdAt);
  return (
    <div
      className="switchTheme basis-[calc(33.33%-6px)]  relative dark:text-white bg-post-card-bg dark:bg-post-card-dk-bg rounded-[15px] border-[1px] border-main p-[25px]"
      onClick={(e) => {
        e.stopPropagation();
        setVisibleContext(false);
      }}
      key={id}
    >
      <ContextWindow visible={visibleContext}>
        <h2>Редактировать</h2>
        <h2 className="text-main">Удалить</h2>
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
      <div className="flex gap-[10px]">
        <div className="basis-1/2 flex flex-col justify-end">
          <h2 className="switchTheme w-full bg-child-post dark:bg-dk-bg p-[8px] rounded-br-[10px]">
            Создано: {formateDate}
          </h2>
        </div>
        <div className="switchTheme bg-child-post dark:bg-dk-bg aspect-square rounded-[10px] basis-1/2 border-[1px] border-main" />
      </div>
      <h2 className="switchTheme w-full mt-[10px] bg-child-post dark:bg-dk-bg p-[8px] rounded-tr-[10px]">
        Редактор: {author}
      </h2>
    </div>
  );
}

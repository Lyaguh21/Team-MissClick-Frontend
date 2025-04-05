import { useState } from "react";
import { TbDots } from "react-icons/tb";
import ContextWindow from "../global/ContextWindow";
export default function PostTemplate() {
  const [visibleContext, setVisibleContext] = useState(false);
  return (
    <div
      className="basis-[calc(33.33%-6px)] relative bg-post-card-bg rounded-[15px] border-[1px] border-main p-[25px]"
      onClick={(e) => {
        e.stopPropagation();
        setVisibleContext(false);
      }}
    >
      <ContextWindow visible={visibleContext}>
        <h2>Редактировать</h2>
        <h2 className="text-main">Удалить</h2>
      </ContextWindow>
      <div className="flex justify-between mb-[10px]">
        <h2 className="text-[24px]">Название плитки</h2>
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
          <h2 className="w-full bg-[#D9D9D9] p-[8px] rounded-br-[10px]">
            Создано: 05.04.2025
          </h2>
        </div>
        <div className="bg-[#D9D9D9] aspect-square rounded-[10px] basis-1/2 border-[1px] border-main" />
      </div>
      <h2 className="w-full mt-[10px] bg-[#D9D9D9] p-[8px] rounded-tr-[10px]">
        Редактор: Иванов Иван Иванович
      </h2>
    </div>
  );
}

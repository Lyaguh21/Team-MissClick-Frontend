import { TbDots } from "react-icons/tb";
export default function PostTemplate() {
  return (
    <div className="w-[calc(25%-10px)]  bg-post-card-bg rounded-[15px] border-[1px] border-main p-[25px]">
      <div className="flex justify-between">
        <h2 className="text-[24px]">Название плитки</h2>
        <TbDots className="self-center size-7 hover:opacity-70 stroke-main" />
      </div>
      <div className="flex mt-[10x] gap-[5px]">
        <div className="basis-1/2 flex flex-col justify-end">
          <h2 className="w-full bg-[#D9D9D9] p-[8px]">Создано: 05.04.2025</h2>
        </div>
        <div className="bg-[#D9D9D9] w-[163px] aspect-square rounded-[10px] basis-1/2" />
      </div>
      <h2 className="w-full mt-[10px] bg-[#D9D9D9] p-[8px]">
        Редактор: Иванов Иван Иванович
      </h2>
    </div>
  );
}

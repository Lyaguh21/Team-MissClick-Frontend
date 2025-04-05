import { ReactNode } from "react";
import { IoSearchOutline } from "react-icons/io5";

interface TaskProps {
  nameCol: string;
  count: number;
  children: ReactNode;
}
export default function TaskBlock({ nameCol, count, children }: TaskProps) {
  return (
    <section className="basis-[calc(33.33%-50px)] rounded-[35px] border-collapse bg-white dark:text-white dark:bg-[#2E2E2E]">
      <div className="border-x-[2px] border-t-[2px] rounded-t-[35px] border-main w-full h-[71px] flex justify-between px-[30px] pt-1 items-center">
        <h2 className="text-[24px] ">{nameCol}</h2>
        <div className="flex gap-[24px]">
          <IoSearchOutline className="self-center size-7 hover:opacity-60" />
          <div className="bg-main rounded-full flex justify-center items-center size-[39px] text-white text-[24px]">
            {count}
          </div>
        </div>
      </div>
      <div className=" w-full overflow-hidden h-[570px] border-[2px] border-main rounded-b-[35px] ">
        <div className="overflow-y-scroll taskScroll py-[10px] px-[30px] flex flex-col gap-[17px] h-full">
          {children}
        </div>
      </div>
    </section>
  );
}

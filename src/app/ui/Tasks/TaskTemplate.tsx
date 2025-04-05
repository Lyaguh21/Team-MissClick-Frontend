import cn from "classnames";
import { useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
import ContextWindow from "../global/ContextWindow";
import { GoTriangleLeft } from "react-icons/go";
import { ITaskLess } from "../../pages/Tasks";

interface TaskTemplateProps {
  id: string;
  content: string;
  title: string;
  priority: string;
  createdAt: any;
  plannedDate: any;
  setOpenUpdateTask: any;
  openUpdateTask: any;
  image: string;
  setCurrentTask: (task: ITaskLess | null) => void;
}
export default function TaskTemplate({
  id,
  content,
  title,
  image,
  priority,
  createdAt,
  plannedDate,
  setOpenUpdateTask,
  openUpdateTask,
  setCurrentTask,
}: TaskTemplateProps) {
  const formateCreateDate = new Intl.DateTimeFormat("ru-RU").format(createdAt);
  const formatePlannedDate = new Intl.DateTimeFormat("ru-RU").format(
    plannedDate
  );

  const [visibleContextMenu, setVisibleContextMenu] = useState(false);
  const [visibleChangeCategory, setVisibleChangeCategory] = useState(false);

  return (
    <div
      className={cn(
        "w-full dark:bg-[#202020] p-[20px] border-[2px] rounded-[16px] shadow-lg relative",
        {
          [" border-main"]: priority === "Высокий",
          [" border-[#c7c22a]"]: priority === "Средний",
          [" border-[#21a637]"]: priority === "Низкий",
        }
      )}
      onClick={() => {
        setVisibleChangeCategory(false);
        setVisibleContextMenu(false);
      }}
    >
      <ContextWindow visible={visibleContextMenu}>
        <h2
          className="flex gap-[6px] cursor-pointer"
          onClick={() => {
            setVisibleChangeCategory(!visibleChangeCategory);
          }}
        >
          <GoTriangleLeft className="self-center " />
          Сменить статус
        </h2>
        <h2
          className="cursor-pointer"
          onClick={() => {
            setOpenUpdateTask(!openUpdateTask);
            setCurrentTask({
              id: id,
              title: title,
              content: content,
              image: image,
              plannedDate: plannedDate,
            });
          }}
        >
          Редактировать
        </h2>
        <h2 className="text-main cursor-pointer">Удалить</h2>
      </ContextWindow>
      <ContextWindow
        className="right-[170px] z-20"
        visible={visibleChangeCategory}
      >
        <h2 className="cursor-pointer">В работе</h2>
        <h2 className="cursor-pointer">Выполнено</h2>
      </ContextWindow>
      <div className="flex justify-between ">
        <h2>
          Название: <b>{title}</b>
        </h2>
        <FaEllipsisVertical
          className="self-center mr-[5px] "
          onClick={(e: any) => {
            e.stopPropagation();
            setVisibleContextMenu(!visibleContextMenu);
            if (visibleChangeCategory) {
              setVisibleChangeCategory(false);
            }
          }}
        />
      </div>

      <h2>
        Приоритет: <b>{priority}</b>
      </h2>
      <div className="mt-1 flex justify-between items-center">
        <h2 className="text-[14px] font-bold">
          {formateCreateDate}--{formatePlannedDate}
        </h2>
        <IoPersonCircleOutline className="size-[27px]" />
      </div>
    </div>
  );
}

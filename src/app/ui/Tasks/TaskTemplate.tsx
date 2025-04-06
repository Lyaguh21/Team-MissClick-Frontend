import cn from "classnames";
import { useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
import ContextWindow from "../global/ContextWindow";
import { GoTriangleLeft } from "react-icons/go";
import { ITaskLess } from "../../pages/Tasks";
import { tasksSlice } from "../../model/store";

interface TaskTemplateProps {
  id: string;
  status: string;
  content: string;
  title: string;
  priority: string;
  plannedDate: Date;
  setOpenUpdateTask: any;
  openUpdateTask: any;
  image: string;
  setCurrentTask: (task: ITaskLess | null) => void;
}
export default function TaskTemplate({
  id,
  status,
  content,
  title,
  image,
  priority,
  plannedDate,
  setOpenUpdateTask,
  openUpdateTask,
  setCurrentTask,
}: TaskTemplateProps) {
  const formatePlannedDate = plannedDate.slice(0, 10);

  const taskSlice = tasksSlice();

  const [visibleContextMenu, setVisibleContextMenu] = useState(false);
  const [visibleChangeCategory, setVisibleChangeCategory] = useState(false);

  const closeContext = () => {
    setVisibleChangeCategory(false);
    setVisibleContextMenu(false);
  };

  return (
    <div
      className={cn(
        "w-full dark:bg-[#202020] p-[20px] border-[2px] rounded-[16px] shadow-lg relative",
        {
          [" border-main"]: priority === "HIGH",
          [" border-[#c7c22a]"]: priority === "MEDIUM",
          [" border-[#21a637]"]: priority === "LOW",
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
        <h2
          className="text-main cursor-pointer"
          onClick={() => {
            taskSlice.deleteTask(Number(id));
            setTimeout(() => taskSlice.fetchTasks(), 300);
          }}
        >
          Удалить
        </h2>
      </ContextWindow>
      <ContextWindow
        className="right-[170px] z-20"
        visible={visibleChangeCategory}
      >
        {status !== "POSTPONED" && (
          <h2
            className="cursor-pointer"
            onClick={() => {
              taskSlice.updateStatus(id, "POSTPONED");
              setTimeout(() => taskSlice.fetchTasks(), 300);
              closeContext();
            }}
          >
            В планировании
          </h2>
        )}
        {status !== "CURRENT" && (
          <h2
            className="cursor-pointer"
            onClick={() => {
              taskSlice.updateStatus(id, "CURRENT");
              setTimeout(() => taskSlice.fetchTasks(), 300);
              closeContext();
            }}
          >
            В работе
          </h2>
        )}
        {status !== "COMPLETED" && (
          <h2
            className="cursor-pointer"
            onClick={() => {
              taskSlice.updateStatus(id, "COMPLETED");
              setTimeout(() => taskSlice.fetchTasks(), 300);
              closeContext();
            }}
          >
            Выполнено
          </h2>
        )}
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
        <h2 className="text-[14px] font-bold">{formatePlannedDate}</h2>
        <IoPersonCircleOutline className="size-[27px]" />
      </div>
    </div>
  );
}

import cn from "classnames";
import { FaEllipsisVertical } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
interface TaskTemplateProps {
  title: string;
  priority: string;
  createdAt: any;
  plannedDate: any;
}
export default function TaskTemplate({
  title,
  priority,
  createdAt,
  plannedDate,
}: TaskTemplateProps) {
  const formateCreateDate = new Intl.DateTimeFormat("ru-RU").format(createdAt);
  const formatePlannedDate = new Intl.DateTimeFormat("ru-RU").format(
    plannedDate
  );

  return (
    <div
      className={cn(
        "w-full bg-[#202020] p-[20px] border-[2px] rounded-[16px] shadow-lg",
        {
          [" border-main"]: priority === "Высокий",
          [" border-[#c7c22a]"]: priority === "Средний",
          [" border-[#21a637]"]: priority === "Низкий",
        }
      )}
    >
      <div className="flex justify-between">
        <h2>
          Название: <b>{title}</b>
        </h2>
        <FaEllipsisVertical className="self-center mr-[5px]" />
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

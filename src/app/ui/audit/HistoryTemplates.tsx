interface HistoryProps {
  title: string;
  type: string;
  user: any;
  dateChange: string;
}
export default function HistoryTemplates({
  title,
  user,
  type,
  dateChange,
}: HistoryProps) {
  return (
    <div className="text-[24px] basis-[calc(33.33%-10px)] dark:text-white">
      <div className="basis-[calc(33.33%-10px)] rounded-t-[35px] p-[20px] border-main border-t-[1px] border-x-[1px] gap-[37px] flex justify-between">
        <h2>Название:</h2>
        <b>{title}</b>
      </div>
      <div className="p-[20px] rounded-b-[35px] border-main border-[1px] flex flex-col gap-3">
        <div className="flex gap-5">
          Пользователь: <b>{user}</b>
        </div>
        <div className="flex gap-5">
          Тип события: <b>{type}</b>
        </div>
        <div className="flex gap-5 mt-[83px] self-end text-[22px]">
          Дата изменения: <b>{dateChange}</b>
        </div>
      </div>
    </div>
  );
}

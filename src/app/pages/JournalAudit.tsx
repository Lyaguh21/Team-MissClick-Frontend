import { FaHistory } from "react-icons/fa";
import Button from "../ui/global/Button";
import HistoryTemplates from "../ui/audit/HistoryTemplates";
import { Link } from "react-router";
import { useEffect } from "react";
import { auditSlice } from "../model/store";

interface auditData {
  event: string;
  title: string;
}

export default function JournalAudit() {
  const auditsSlice = auditSlice();

  useEffect(() => {
    auditsSlice.fetchAudit();
  }, []);

  console.log(auditsSlice.audit);
  return (
    <div className="px-[30px] w-full flex flex-col h-[calc(100vh-74px)] overflow-y-scroll scroll">
      <div className="py-[10px] lg:py-[30px] flex justify-between">
        <h2 className="text-[40px] font-bold dark:text-white">
          История изменений
        </h2>
        <Link to="/">
          <Button
            appearance="grayButton"
            className="flex gap-[14px] items-center"
          >
            <FaHistory />
            Назад
          </Button>
        </Link>
      </div>
      <div className="w-full flex flex-wrap gap-[10px]">
        {auditsSlice.audit.map((e) => (
          <HistoryTemplates
            key={e.id}
            title={e.article || "Без названия"}
            user={e.user}
            type={e.event}
            dateChange={new Date(e.date).toLocaleDateString("ru-RU")}
          />
        ))}
      </div>
    </div>
  );
}

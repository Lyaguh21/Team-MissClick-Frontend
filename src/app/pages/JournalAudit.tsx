import { FaPlus } from "react-icons/fa6";
import Button from "../ui/global/Button";
import { FaHistory } from "react-icons/fa";
import HistoryTemplates from "../ui/audit/HistoryTemplates";
import { Link } from "react-router";

export default function JournalAudit() {
  return (
    <div className="px-[30px] w-full flex flex-col h-[calc(100vh-74px)] overflow-y-scroll scroll ">
      <div className="py-[10px] lg:py-[30px] flex justify-between">
        <h2 className="text-[40px] font-bold">История изменений</h2>
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
      <div className="w-full flex gap-[10px]">
        <HistoryTemplates
          title="Как установить framework"
          user="Глава ТТК “111”"
          type="Удаление"
          dateChange="06.04.2025"
        />
        <HistoryTemplates
          title="Как установить framework"
          user="Глава ТТК “111”"
          type="Удаление"
          dateChange="06.04.2025"
        />
        <HistoryTemplates
          title="Как установить framework"
          user="Глава ТТК “111”"
          type="Удаление"
          dateChange="06.04.2025"
        />
      </div>
    </div>
  );
}

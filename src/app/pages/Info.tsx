import Button from "../ui/global/Button";
import { FaPlus } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import PostTemplate from "../ui/Info/PostTemplate";
export default function Info() {
  return (
    <div className="px-[26px]">
      <div className="py-[50px] flex justify-between">
        <Button appearance="grayButton" className="flex gap-[14px]">
          <FaPlus className="self-center" />
          Создать статью
        </Button>
        <Button appearance="grayButton" className="flex gap-[14px]">
          <FaHistory className="self-center" />
          История изменений
        </Button>
      </div>
      <div className="gap-[15px] flex">
        <PostTemplate />
        <PostTemplate />
        <PostTemplate />
        <PostTemplate />
      </div>
    </div>
  );
}

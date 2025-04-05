import Button from "../ui/global/Button";
import { FaPlus } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import PostTemplate from "../ui/Info/PostTemplate";
export default function Info() {
  return (
    <div className="px-[30px] flex flex-col h-[calc(100vh-74px)] overflow-y-scroll scroll ">
      <div className="py-[10px] lg:py-[30px] flex justify-between">
        <Button
          appearance="grayButton"
          className="flex gap-[14px] items-center"
        >
          <FaPlus />
          Создать статью
        </Button>
        <Button
          appearance="grayButton"
          className="flex gap-[14px] items-center"
        >
          <FaHistory />
          История изменений
        </Button>
      </div>
      <div className="gap-[6px] inline-flex flex-wrap ">
        <PostTemplate />
        <PostTemplate />
        <PostTemplate />
        <PostTemplate />
        <PostTemplate />
        <PostTemplate />

        <PostTemplate />
        <PostTemplate />
        <PostTemplate />

        <PostTemplate />
        <PostTemplate />
        <PostTemplate />
      </div>
    </div>
  );
}

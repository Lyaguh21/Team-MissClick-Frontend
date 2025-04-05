import Button from "../ui/global/Button";
import { FaPlus } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import PostTemplate from "../ui/Info/PostTemplate";
export default function Info() {
  return (
    <div className="px-[30px] flex flex-col ">
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
      <div className="h-[751px] lg:h-[855px] scroll gap-[6px] overflow-y-scroll inline-flex flex-wrap ">
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

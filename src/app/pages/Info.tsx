import Button from "../ui/global/Button";
import { FaPlus } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import PostTemplate from "../ui/Info/PostTemplate";
export default function Info() {
  return (
    <div className="px-[30px] flex flex-col ">
      <div className="py-[8px] lg:py-[30px] pr-3 flex justify-between">
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
      <div className="h-[700px] lg:h-[855px] scroll gap-[6px] overflow-y-scroll inline-flex flex-wrap ">
        <PostTemplate
          id={1}
          title="Тестовая статья"
          createdAt={Date.now()}
          author="Иванов Иван Иванович"
        />
        <PostTemplate
          id={1}
          title="Тестовая статья"
          createdAt={Date.now()}
          author="Иванов Иван Иванович"
        />
        <PostTemplate
          id={1}
          title="Тестовая статья"
          createdAt={Date.now()}
          author="Иванов Иван Иванович"
        />
        <PostTemplate
          id={1}
          title="Тестовая статья"
          createdAt={Date.now()}
          author="Иванов Иван Иванович"
        />
        <PostTemplate
          id={1}
          title="Тестовая статья"
          createdAt={Date.now()}
          author="Иванов Иван Иванович"
        />
        <PostTemplate
          id={1}
          title="Тестовая статья"
          createdAt={Date.now()}
          author="Иванов Иван Иванович"
        />
        <PostTemplate
          id={1}
          title="Тестовая статья"
          createdAt={Date.now()}
          author="Иванов Иван Иванович"
        />
        <PostTemplate
          id={1}
          title="Тестовая статья"
          createdAt={Date.now()}
          author="Иванов Иван Иванович"
        />
        <PostTemplate
          id={1}
          title="Тестовая статья"
          createdAt={Date.now()}
          author="Иванов Иван Иванович"
        />
      </div>
    </div>
  );
}

import React from "react";
import Button from "../global/Button";
import classNames from "classnames";
import { IoPersonCircleOutline } from "react-icons/io5";
interface IProps {
  setViewInfo: (arg: boolean) => void;
  title: string;
  content: string;
  image: string;
  updatedAt: string;
  lastEditor: string;
}

const ViewInfo: React.FC<IProps> = ({
  setViewInfo,
  title,
  content,
  image,
  updatedAt,
  lastEditor,
}) => {
  return (
    <div className="flex flex-col gap-[20px] items-center px-[20px] py-5">
      <div className="flex justify-between gap-[20px] ">
        <div className=" flex flex-col justify-between gap-[20px]">
          <h2 className="p-[13px] w-[440px] h-[78px]  bg-modal-bg dark:bg-[#2E2E2E] rounded-[10px]">
            {title}
          </h2>
          <h2 className="p-[13px] w-[440px] h-[78px] bg-modal-bg dark:bg-[#2E2E2E] rounded-[10px]">
            <div>Последнее обновление: {updatedAt}</div>
            <div className="flex gap-3">
              <IoPersonCircleOutline className="size-[24px] text-[24px]" />
              {lastEditor}
            </div>
          </h2>
        </div>
        <img
          src={image}
          className={classNames(
            "bg-modal-bg dark:bg-[#2E2E2E] flex justify-center items-center size-50 rounded-xl overflow-hidden"
          )}
        />
      </div>
      <div className="bg-modal-bg dark:bg-[#2E2E2E] rounded-[10px] w-[659px] h-[383px] p-[13px]">
        {content}
      </div>
      <Button
        className="w-full"
        type="button"
        appearance="base"
        onClick={() => setViewInfo(false)}
      >
        Закрыть статью
      </Button>
    </div>
  );
};
export default ViewInfo;

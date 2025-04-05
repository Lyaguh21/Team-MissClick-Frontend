import React from "react";
import Button from "../global/Button";
import classNames from "classnames";
import { IoPersonCircleOutline } from "react-icons/io5";
interface IProps {
  setViewInfo: (arg: boolean) => void;
}

const ViewInfo: React.FC<IProps> = ({ setViewInfo }) => {
  return (
    <div className="flex flex-col gap-[20px] items-center px-[20px] py-5">
      <div className="flex justify-between gap-[20px] ">
        <div className=" flex flex-col justify-between gap-[20px]">
          <h2 className="p-[13px] w-[440px] h-[78px]  bg-modal-bg dark:bg-[#2E2E2E] rounded-[10px]">
            Текст слайда
          </h2>
          <h2 className="p-[13px] w-[440px] h-[78px] bg-modal-bg dark:bg-[#2E2E2E] rounded-[10px]">
            <div>Последнее обновление: 05.04.2025</div>
            <div className="flex gap-3">
              <IoPersonCircleOutline className="size-[24px] text-[24px]" />
              Карпов степан
            </div>
          </h2>
        </div>
        <div
          className={classNames(
            "bg-modal-bg dark:bg-[#2E2E2E] flex justify-center items-center size-50 rounded-xl overflow-hidden"
          )}
        />
      </div>
      <div className="bg-modal-bg dark:bg-[#2E2E2E] rounded-[10px] w-[659px] h-[383px] p-[13px]">
        Основы игры: Постановка рук и пальцев. Кисти должны быть расслабленными,
        а пальцы — слегка изогнутыми, чтобы равномерно распределить нагрузку.
        Рекомендуется держать руки так, будто в кисти лежит мяч или яблоко.
        Важно работать над всеми пальцами, включая мизинец и большой палец. 12
        Правильная позиция за инструментом. Стул должен быть достаточно высоким,
        чтобы руки находились на уровне клавиш. Нужно сидеть ближе к краю стула,
        чтобы спина оставалась прямой, а ноги устойчиво стояли на полу. 1
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

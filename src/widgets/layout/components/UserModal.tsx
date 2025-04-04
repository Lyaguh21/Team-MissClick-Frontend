import cn from "classnames";

interface modalProps {
  visible: boolean;
}

export default function UserModal({ visible }: modalProps) {
  return (
    <div
      className={cn(
        "w-[400px] h-[411px] px-[21px] py-[23px]  bg-modal-bg dark:bg-dl-cart-bg rounded-[22px] absolute z-10 top-[7px] right-[7px]",
        {
          ["flex"]: visible,
          ["hidden"]: !visible,
        }
      )}
    >
      f
    </div>
  );
}

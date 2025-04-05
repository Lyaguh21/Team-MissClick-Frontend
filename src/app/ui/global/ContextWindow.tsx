import classNames from "classnames";
import { ReactNode } from "react";

export default function ContextWindow({
  visible,
  children,
  className,
}: {
  visible: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={classNames(
        "absolute z-10 rounded-[10px] p-3 right-[10px] top-[50px] bg-[#D9D9D9] dark:bg-dk-bg dark:shadow-main dark:shadow-sm shadow-2xl flex-col gap-2",
        className,
        { ["flex"]: visible, ["hidden"]: !visible }
      )}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {children}
    </div>
  );
}

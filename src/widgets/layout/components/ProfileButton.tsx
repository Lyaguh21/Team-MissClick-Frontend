import { IoPersonCircleOutline } from "react-icons/io5";
import cn from "classnames";

const ProfileButton = ({ onClick }: { onClick: any }) => {
  return (
    <button
      className={cn("h-full aspect-square flex justify-center items-center")}
      onClick={onClick}
    >
      <IoPersonCircleOutline className="size-[90%] hover:opacity-70 duration-300" />
    </button>
  );
};

export default ProfileButton;

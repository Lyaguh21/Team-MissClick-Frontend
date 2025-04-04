import { IoPersonCircleOutline } from "react-icons/io5";
import cn from "classnames";

interface ProfileButtonProps {
  onClick: () => void;
}

const ProfileButton = ({ onClick }: ProfileButtonProps) => {
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

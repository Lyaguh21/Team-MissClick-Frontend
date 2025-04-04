import { useState } from "react";

export default function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className="size-[19px]">
      <input
        type="checkbox"
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />

      <svg
        className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
        aria-hidden="true"
        viewBox="0 0 15 11"
        fill="none"
      >
        <path
          d="M1 4.5L5 9L14 1"
          strokeWidth="2"
          stroke={isChecked ? "#fff" : "none"}
        />
      </svg>
    </label>
  );
}

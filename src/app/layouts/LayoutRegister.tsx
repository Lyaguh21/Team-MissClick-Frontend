import { Outlet } from "react-router";

export default function Info() {
  return (
    <div>
      <div>Layout</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";
const GlobalLayout = (props) => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default GlobalLayout;

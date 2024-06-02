import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
  const location = useLocation();
  const noHF = location.pathname.includes("login");
  return (
    <div>
      {noHF || <NavBar></NavBar>}
      <Outlet></Outlet>
      {noHF || <Footer></Footer>}
    </div>
  );
};

export default Main;

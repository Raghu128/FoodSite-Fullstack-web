import Header from "../components/Headers";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
}

export default Layout;

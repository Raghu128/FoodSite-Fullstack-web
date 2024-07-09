import Cards from "../components/Card";
import Header from "../components/Headers";
import { useDispatch } from "react-redux";
import { fetchingLogin } from "../services/isLogin";
import { useEffect } from "react";

function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchingLogin(dispatch);
  }, [dispatch]);

  return (
    <>
      <Header />
      <Cards />
    </>
  );
}

export default Layout;

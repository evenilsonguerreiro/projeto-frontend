import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Main } from "./style";

const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default Layout;

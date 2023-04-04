import { Outlet } from "react-router-dom";
import Header from "./srceens/components/Header";

function Root() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  );
}

export default Root;

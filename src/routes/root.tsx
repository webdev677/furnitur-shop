import { Outlet } from "react-router-dom";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

export default function Root() {
  return (
    <>
      <div id="detail">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout({ cartLength }) {
  return (
    <>
      <Navbar cartLength={cartLength} />
      <Outlet />
      <Footer />
    </>
  );
}

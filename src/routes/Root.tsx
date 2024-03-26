import { Outlet } from "react-router";
import Navbar from "../components/navBar/Navbar";
import Header from "../components/header/Header";

export default function Root() {
  return (
    <main className="min-[320px]:h-[1000px] min-[320px]:p-0 md:h-[1100px] lg:h-[1200px]">
      <Header />
      <Outlet />
      <Navbar />
    </main>
  );
}

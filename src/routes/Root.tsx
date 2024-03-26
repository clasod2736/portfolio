import { Outlet } from "react-router";
import Navbar from "../components/navBar/Navbar";
import Header from "../components/header/Header";

export default function Root() {
  return (
    <main className="py-0 md:py-12">
      <Header />
      <Outlet />
      <Navbar />
    </main>
  );
}

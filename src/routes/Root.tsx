import { Outlet } from "react-router";
import Navbar from "../components/navBar/Navbar";
import Header from "../components/header/Header";

export default function Root() {
  return (
    <main>
      <Header />
      <Outlet />
      <Navbar />
    </main>
  );
}

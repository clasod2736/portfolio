import Intro from "../../components/home/Intro";
import Logo from "../../components/home/Logo";

export default function Home() {
  return (
    <section className=" z-[-10] h-[80%] md:h-[60%] lg:h-[70%] flex flex-col justify-center items-center gap-6">
      <Logo />
      <Intro />
    </section>
  );
}

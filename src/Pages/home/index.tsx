import Intro from "../../components/home/Intro";
import Logo from "../../components/home/Logo";
import { preloadingImg } from "../../util/preloadingImg";

export default function Home() {
  preloadingImg();

  return (
    <section className=" z-0 h-[80%] md:h-[60%] lg:h-[70%] flex flex-col justify-center items-center gap-6">
      <Logo />
      <Intro />
    </section>
  );
}

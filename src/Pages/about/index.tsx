import Background from "../../components/about/Background";
import MonoImg from "../../components/about/MonoImg";
import Skills from "../../components/about/Skills";

export default function About() {
  return (
    <section className=" grid gap-6 grid-rows-[70%_30%] min-[500px]:grid-rows-[60%_40%] md:grid-rows-[60%_35%] lg:grid-rows-[1fr_1fr] xl:grid-rows-[60%_30%] grid-cols-[1fr] lg:grid-cols-[65%_35%] h-full md:h-[60%] lg:h-[60%] w-[95%] px-6 lg:px-0">
      <Background />
      <MonoImg />
      <Skills />
    </section>
  );
}

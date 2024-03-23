import Background from "../../components/about/Background";
import MonoImg from "../../components/about/MonoImg";
import Skills from "../../components/about/Skills";

export default function About() {
  return (
    <section className=" grid grid-rows-[75%_25%] xl:grid-rows-[60%_30%] grid-cols-[65%_35%] h-[60%] w-[95%]">
      <Background />
      <MonoImg />
      <Skills />
    </section>
  );
}

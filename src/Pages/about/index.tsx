import Background from "../../components/about/Background";
import MonoImg from "../../components/about/MonoImg";
import Skills from "../../components/about/Skills";

export default function About() {
  return (
    <section
      className=" 
flex flex-col justify-start
    md:grid-rows-[60%_35%]
    md:grid lg:grid-rows-[1fr_1fr] xl:grid-rows-[60%_30%] grid-cols-[1fr] lg:grid-cols-[65%_35%] h-full min-[500px]:h-[70%] md:h-[60%] lg:h-[60%] w-[95%] px-6 lg:px-0"
    >
      <Background />
      <MonoImg />
      <Skills />
    </section>
  );
}

import Skills from "../../components/about/Skills";

export default function About() {
  return (
    <section className=" grid grid-rows-[75%_25%] xl:grid-rows-[60%_30%] grid-cols-[65%_35%] h-[60%] w-[95%]">
      <article className="w-full h-full flex flex-row">
        <h4 className="w-[20%] text-right lg:text-2xl xl:text-[32px] animate-slideToRight animation-delay-200">
          Background
        </h4>
        <p className="px-8 text-xl leading-8 w-[80%] flex-wrap animate-[slideUp_0.3s]">
          Hi! I'm <b>Joon</b>, based in Melbourne, and have been self-studying
          Web Development since early 2023. <br /> <br />
          As a web developer, I enjoy — combining my technical knowledge with my
          keen eye for details to create a solid functioning Website. <br />
          My goal is to always build applications that are <b>
            scalable
          </b> and <b>efficient</b> under the hood while providing engaging,
          pixel-perfect user experiences. <br />
          Currently, my focus lives on <b>Front-End</b>, which I find incredibly
          fulfilling. <br /> <br />
          <b>When I'm not in front of the computer screen</b>, I'm probably
          fishing, jogging, singing or crossing off another item on my bucket
          list.
        </p>
      </article>
      <div className="grid row-span-2 row-span-6 bg-mono bg-cover bg-[55%] blur-sm hover:blur-[0.8px] cursor-pointer animate-[slideToLeft_0.5s]"></div>
      <Skills />
    </section>
  );
}

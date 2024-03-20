import Initial from "../../components/home/Initial";

export default function Home() {
  return (
    <section className="h-[50%]">
      <Initial />
      <a
        href="#"
        className="h-[35%] w-full relative px-6 py-3 font-bold text-white rounded-lg group animate-slideUp animation-delay-800"
      >
        <span className="absolute inset-0 w-[30rem] h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-slate-500 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
        <span className="absolute inset-0 w-[30rem] h-full transition duration-300 transform translate-x-1 translate-y-1 bg-slate-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
        <span className="relative w-full">
          <p className="text-5xl ml-8 italic">Expolre</p>
        </span>
      </a>
    </section>
  );
}

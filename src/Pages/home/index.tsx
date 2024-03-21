import Initial from "../../components/home/Initial";

//type effect to article section

export default function Home() {
  return (
    <section className="h-[70%] flex flex-col justify-center">
      <Initial />
      <article className="h-[15%] text-3xl italic ">
        <p className="text-2xl animate-slideUp animation-delay-200">
          I'm a self-starter who passionate for simplifying complex task into a
          lean solution.
        </p>
        <p className="text-2xl animate-slideUp animation-delay-400">
          Make web applications with{" "}
          <a
            href="/about"
            className="hover:dark:text-zinc-50 hover:text-zinc-400 "
          >
            <b className="font-semibold">
              React.js, Typescript, Next.js, Node.js, Jest, AWS
            </b>
          </a>
        </p>
        <p className="text-2xl animate-slideUp animation-delay-600">
          Please, explore more about me with below sections.
        </p>
      </article>
    </section>
  );
}

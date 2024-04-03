export default function Intro() {
  return (
    <article className="flex flex-col justify-start min-[320px]:h-[35%] min-[500px]:h-[30%] md:h-[15%] w-[90%] min-[500px]:w-[75%] md:w-full italic min-[320px]:gap-2 md:gap-0">
      <ul className=" md:list-none">
        <li className="text-xl md:text-xl lg:text-2xl animate-slideUp animation-delay-200 my-2">
          I'm a self-starter who passionate for simplifying complex task into a
          lean solution.
        </li>
        <li className="text-xl md:text-xl lg:text-2xl animate-slideUp animation-delay-400 my-2">
          Make web applications with {""}
          <a
            href="/about"
            className="hover:dark:text-zinc-50 hover:text-zinc-400 "
          >
            <b className="font-semibold">
              React.js, Typescript, Next.js, Node.js, Jest and AWS.
            </b>
          </a>
        </li>
        <li className="text-xl  md:text-xl lg:text-2xl animate-slideUp animation-delay-600 my-2">
          Please, explore more about me with About, Experience, Projects and
          Contact sections.
        </li>
      </ul>
    </article>
  );
}

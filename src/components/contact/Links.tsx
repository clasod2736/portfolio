import { contactLinks } from "../../constants/contact";

export default function Links() {
  return (
    <article className="flex flex-col gap-4 md:gap-8 w-full md:w-[40%] h-[42%] md:h-full">
      <h1 className=" text-3xl animate-slideToRight">Links to reach me.</h1>
      <div>
        <p className="border-l-2 border-zinc-400 pl-2 text-lg">
          I'm always open to communicate with any topics tech relevant and happy
          to hear the comments or advises for my codes.
        </p>
        <p className="border-l-2 border-zinc-400 pl-2 text-lg">
          So please, don't hesitate to get in touch with me.
        </p>
      </div>
      {contactLinks.map((item, index) => {
        return (
          <div
            className={`gap-2 animate-slideToRight animation-delay-${
              (index + 1) * 100
            }`}
            key={item.id}
          >
            <h5 className="text-xl font-normal border-b-2 border-zinc-400">
              {item.id}
            </h5>
            <a
              className="flex flex-row text-base font-light hover:underline italic"
              href={item.link}
            >
              {item.title}
            </a>
          </div>
        );
      })}
    </article>
  );
}

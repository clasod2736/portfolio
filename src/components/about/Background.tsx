export default function Background() {
  return (
    <article className="w-full h-[75%] md:h-full flex flex-col md:flex-row">
      <h4 className="py-2 border-b-[1px] border-zinc-500 md:border-b-0 w-full md:w-[20%] md:text-right text-3xl md:text-2xl xl:text-[32px] animate-slideToRight animation-delay-200">
        Background
      </h4>
      <p className="md:pt-0 min-[320px]:pt-2 px-0 md:px-8 min-[500px]:text-lg lg:text-xl leading-8 w-full md:w-[80%] flex-wrap animate-[slideUp_0.3s]">
        Hi! I'm <b>Joon</b>, based in Melbourne and have been self-studying
        Software Engineering since early 2023. <br /> <br />
        I've focused my journey on front-end and full-stack development through{" "}
        <b>three personal projects.</b>
        <br />
        My goal is to build skillset and insight to create web applications that
        are <b>scalable</b> and <b>efficient</b> under the hood while providing
        engaging, pixel-perfect user experiences. <br />
        <br />
        To achieve that, I always approach coding with{" "}
        <b>multiple strategies,</b>
        {""} <b>a keen eye for detail</b>
        {""} and <b>creativity</b>
        <br />
        <br />
        <b>When I'm not in front of the computer screen</b>, I'm probably
        jogging, fishing, playing music or crossing off another item on my
        bucket list.
      </p>
    </article>
  );
}

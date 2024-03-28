import { useState, useRef, useEffect } from "react";

import { handleEmail } from "../../services/contact";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [warn, setWarn] = useState("");

  // Access DOM element with useRef. Set focus on first contact input in contact page automatically.
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [name]);

  const renderWarn = (type: string) => {
    if (warn === type) {
      return (
        <p
          data-testid="notice"
          className="text-base font-extrabold dark:text-zinc-400 text-zinc-600 animate-opacityIn"
        >
          *{type} required.
        </p>
      );
    } else {
      return null;
    }
  };

  return (
    <form
      className=" w-full md:w-[50%] h-[55%] md:h-full flex flex-col justify-end md:justify-start gap-2 lg:gap-0 animate-[opacityIn_0.8s]"
      onSubmit={(e) => handleEmail({ e, name, email, message, setWarn })}
    >
      <h1 className="text-3xl mb-0 lg:mb-6">or...Email me now :)</h1>
      <div className="flex flex-col justify-start h-[15%] gap-[3px]">
        <h5 className="text-xl font-semibold">Name</h5>
        <input
          type="text"
          name="name"
          role="input"
          data-testid="nameInput"
          placeholder="Your name"
          onChange={(e) => setName(e.target.value)}
          className="text-lg p-[0.3rem] outline-zinc-500 border-2 border-zinc-300 rounded-sm dark:text-zinc-700"
          ref={inputRef}
        />
        {renderWarn("name")}
      </div>
      <div className="flex flex-col justify-start h-[15%] gap-[3px]">
        <h5 className="text-xl font-semibold">Email</h5>
        <input
          type="text"
          name="email"
          role="input"
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
          className="text-lg p-[0.3rem] outline-zinc-500 border-2 border-zinc-300 rounded-sm dark:text-zinc-700"
        />
        {renderWarn("email")}
      </div>
      <div className="flex flex-col justify-start h-[42%] gap-[3px]">
        <h5 className="text-xl font-semibold">Message</h5>
        <textarea
          name="message"
          id="message"
          role="input"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          cols={30}
          rows={7}
          className="dark:text-zinc-700 text-lg p-2 outline-zinc-500 border-2 border-zinc-300 rounded-sm"
          placeholder="Your Message"
          style={{ resize: "none" }}
        />
        {renderWarn("message")}
      </div>
      <button
        role="submit"
        type="submit"
        className="text-xl font-semibold border-2 hover:dark:bg-neutral-700/30 dark:border-neutral-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition py-2 px-4 rounded-sm"
      >
        {warn === "submitted" ? "Thankyou!" : "Submit"}
      </button>
    </form>
  );
}

import { useState } from "react";

import { handleEmail } from "../../services/contact";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [warn, setWarn] = useState("");

  const renderWarn = (type: string) => {
    if (warn === type) {
      return (
        <p className="text-base font-extrabold text-zinc-600 animate-opacityIn">
          *{type} required.
        </p>
      );
    } else {
      return null;
    }
  };

  return (
    <form
      className="w-[50%] flex flex-col justify-start animate-[opacityIn_0.8s]"
      onSubmit={(e) => handleEmail({ e, name, email, message, setWarn })}
    >
      <h1 className="text-3xl mb-6">Or...Get in touch me now :)</h1>
      <div className="flex flex-col justify-start h-[15%] gap-[3px]">
        <h5 className="text-xl font-semibold">Name</h5>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          onChange={(e) => setName(e.target.value)}
          className="text-lg p-[0.3rem] outline-zinc-500 border-2 border-zinc-300 rounded-sm"
        />
        {renderWarn("name")}
      </div>
      <div className="flex flex-col justify-start h-[15%] gap-[3px]">
        <h5 className="text-xl font-semibold">Email</h5>
        <input
          type="text"
          name="email"
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
          className="text-lg p-[0.3rem] outline-zinc-500 border-2 border-zinc-300 rounded-sm"
        />
        {renderWarn("email")}
      </div>
      <div className="flex flex-col justify-start h-[42%] gap-[3px]">
        <h5 className="text-xl font-semibold">Message</h5>
        <textarea
          name="message"
          id="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          cols={30}
          rows={7}
          className="text-lg p-2 outline-zinc-500 border-2 border-zinc-300 rounded-sm"
        />
        {renderWarn("message")}
      </div>
      <button
        type="submit"
        className="text-xl font-semibold border-2 hover:dark:bg-neutral-700/30 dark:border-neutral-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition py-2 px-4 rounded-sm"
      >
        {warn === "submitted" ? "Thankyou!" : "Submit"}
      </button>
    </form>
  );
}
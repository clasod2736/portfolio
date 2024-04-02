import emailjs from "@emailjs/browser";
import { Email } from "../types";

export const handleEmail = ({ e, name, email, message, setWarn }: Email) => {
  e.preventDefault();

  if (name.length < 2) {
    setWarn("name");
    return;
  } else if (!email.includes("@")) {
    setWarn("email");
    return;
  } else if (!message.length) {
    setWarn("message");
    return;
  } else {
    setWarn("");

    emailjs
      .sendForm("service_ijmrfcq", "template_ohbne4b", e.currentTarget, {
        publicKey: "9m1D4QlE7wjFoy6VD",
      })
      .then(
        () => {
          console.log("Email sent.");
        },
        (error) => {
          console.log("Failed...", error.text);
        }
      );
  }
  setWarn("submitted");
};

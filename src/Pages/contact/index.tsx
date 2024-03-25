import Links from "../../components/contact/Links";
import Form from "../../components/contact/Form";

export default function Contact() {
  return (
    <section className="flex flex-row justify-between w-[70%] h-[60%] gap-4">
      <Links />
      <Form />
    </section>
  );
}

import Links from "../../components/contact/Links";
import Form from "../../components/contact/Form";

export default function Contact() {
  return (
    <section className="flex min-[320px]:flex-col md:flex-row justify-start md:justify-between w-[90%] lg:w-[75%] min-[320px]:h-[90%] md:h-[60%] gap-6">
      <Links />
      <Form />
    </section>
  );
}

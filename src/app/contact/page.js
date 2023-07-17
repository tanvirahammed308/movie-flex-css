import contactStyle from "@/app/contact/contact.module.css";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";

const page = () => {
  return (
    <>
      <div className={contactStyle.container}>
        <h1>Contact Us</h1>
        <ContactCard></ContactCard>
        <section className={contactStyle.contact_section}>
          <h2>
            We'd love to hear <span> from you </span>
          </h2>
        </section>
       <section className={contactStyle.contact_section}>

        <ContactForm ></ContactForm>
       </section>

      
      </div>
    </>
  );
};

export default page;

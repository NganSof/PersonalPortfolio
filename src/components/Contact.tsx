import { SectionWrapper } from "@/hoc";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";

// publicKey: pWuq-EjasuIHU6GWg
// template_q1ajvzm
// service_obbhe8f
const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    emailjs
      .send(
        "service_obbhe8f",
        "template_q1ajvzm",
        {
          from_name: form.name,
          to_name: "Nellie",
          from_email: form.email,
          to_email: "trinhngan.sof@gmail",
          message: form.message,
        },
        "pWuq-EjasuIHU6GWg"
      )
      .then(
        () => {
          setLoading(false);
          setForm({ name: "", email: "", message: "" });
          alert("Thank a lot. I will get back to you as soon as possible.");
        },
        (error) => {
          setLoading(false);
          console.log("error", error);
          alert("Somethings went wrong.");
        }
      )
      .catch();
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[var(--black-100)] !p-8 rounded-2xl"
      >
        <p className={styles.heroSubText}>Get in touch</p>
        <h3 className={styles.heroHeadText}>Contact</h3>
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className="!mt-12 flex !flex-col !gap-8"
        >
          <label className="flex flex-col">
            <span className="!font-medium !mb-4 text-white">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="!bg-[var(--tertiary)] !py-4 !px-6 placeholder:!text-[var(--secondary)] text-white rounded-lg font-medium outline-none border-none"
            />
          </label>
          <label className="flex flex-col">
            <span className="!font-medium !mb-4 text-white">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="!bg-[var(--tertiary)] !py-4 !px-6 placeholder:!text-[var(--secondary)] text-white rounded-lg font-medium outline-none border-none"
            />
          </label>
          <label className="flex flex-col">
            <span className="!font-medium !mb-4 text-white">Your message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleTextareaChange}
              placeholder="What do you want to say?"
              className="!bg-[var(--tertiary)] !py-4 !px-6 placeholder:!text-[var(--secondary)] text-white rounded-lg font-medium outline-none border-none"
            />
          </label>
          <button
            type="submit"
            className="!bg-[var(--tertiary)] !py-3 !px-8 outline-none w-fit text-white font-bold cursor-pointer !shadow-md !rounded-xl !shadow-[var(--primary)]"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

const WrappedContact = SectionWrapper(Contact, "contact");
export default WrappedContact;

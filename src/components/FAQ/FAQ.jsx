import { motion } from "framer-motion";
import faqData from "./faqData";
import FAQItem from "./FAQItem";

const FAQ = () => {
  return (
    <section
      id="faq"
      className="bg-[#F7FAFC] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="inline-flex rounded-full border border-[#D4AF37]/25 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0F2D52]">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-[#0F2D52] sm:text-5xl">
            Frequently Asked
            <span className="text-[#C49A2C]">
              {" "}Questions
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Find answers to the most common questions about our dental services and appointments.
          </p>

        </motion.div>

        <div className="mt-12 space-y-4">

          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQ;

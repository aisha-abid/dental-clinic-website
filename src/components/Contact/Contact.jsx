import { motion } from "framer-motion";
import contactData from "./contactData";
import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <span className="inline-flex rounded-full border border-[#D4AF37]/25 bg-[#F7FAFC] px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0F2D52]">

              CONTACT US

            </span>

            <h2 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-[#0F2D52] sm:text-5xl">

              Book Your Appointment

            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">

              We'd love to hear from you. Contact us today for professional dental care and a healthier smile.

            </p>

            <div className="mt-10 space-y-4">

              {contactData.map((item) => (
                <ContactCard
                  key={item.id}
                  item={item}
                />
              ))}

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="rounded-[1.75rem] border border-slate-200/80 bg-[#F7FAFC] p-5 shadow-[0_22px_60px_-44px_rgba(15,45,82,0.58)] sm:p-8 lg:p-10"
          >

            <form className="grid gap-5">

              <label className="grid gap-2 text-sm font-bold text-[#0F2D52]">
                Full Name
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-700 outline-none transition focus:border-[#0F2D52] focus:ring-4 focus:ring-[#0F2D52]/10"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-[#0F2D52]">
                Email Address
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-700 outline-none transition focus:border-[#0F2D52] focus:ring-4 focus:ring-[#0F2D52]/10"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-[#0F2D52]">
                Phone Number
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-700 outline-none transition focus:border-[#0F2D52] focus:ring-4 focus:ring-[#0F2D52]/10"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-[#0F2D52]">
                Message
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-700 outline-none transition focus:border-[#0F2D52] focus:ring-4 focus:ring-[#0F2D52]/10"
                />
              </label>

              <button
                className="
                w-full
                py-4
                rounded-full
                bg-[#0F2D52]
                text-white
                font-bold
                hover:bg-[#163b68]
                hover:-translate-y-0.5
                duration-300
                shadow-[0_18px_34px_-22px_rgba(15,45,82,0.65)]
                "
              >

                Book Appointment

              </button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;

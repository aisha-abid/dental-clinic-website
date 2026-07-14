import { motion } from "framer-motion";
import testimonials from "./testimonialsData";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="bg-[#F7FAFC] py-20 sm:py-24 lg:py-28">

      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-flex rounded-full border border-[#D4AF37]/25 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0F2D52]">
            TESTIMONIALS
          </span>

          <h2 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-[#0F2D52] sm:text-5xl">
            What Our
            <span className="text-[#C49A2C]">
              {" "}Patients Say
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Patient satisfaction is our greatest achievement.
            Here are a few words from people who trusted
            Sarmad Dental Clinic with their smiles.
          </p>

        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">

          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;

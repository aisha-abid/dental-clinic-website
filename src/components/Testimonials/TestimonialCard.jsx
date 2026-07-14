import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_16px_40px_-34px_rgba(15,45,82,0.55)] sm:p-7"
    >
      <Quote
        className="mb-5 text-[#C49A2C]"
        size={34}
      />

      <p className="leading-8 text-slate-600">
        "{testimonial.review}"
      </p>

      <div className="mt-6 flex">

        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            size={18}
            fill="#FACC15"
            color="#FACC15"
          />
        ))}

      </div>

      <div className="mt-7 flex items-center gap-4 border-t border-slate-100 pt-6">

        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-14 w-14 rounded-full object-cover ring-4 ring-slate-50"
        />

        <div>

          <h3 className="text-base font-black text-[#0F2D52]">
            {testimonial.name}
          </h3>

          <p className="text-sm font-medium text-slate-500">
            {testimonial.role}
          </p>

        </div>

      </div>

    </motion.div>
  );
};

export default TestimonialCard;

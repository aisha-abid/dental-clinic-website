import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_16px_40px_-34px_rgba(15,45,82,0.55)] transition-all duration-500 hover:border-[#D4AF37]/50 hover:shadow-[0_28px_60px_-40px_rgba(15,45,82,0.55)] sm:p-7"
    >
      {/* Hover Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-white to-amber-50 opacity-0 transition duration-500 group-hover:opacity-100"></div>

      {/* Icon */}
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0F2D52] text-white transition duration-500 group-hover:-rotate-3 group-hover:scale-105">
        <Icon size={26} />
      </div>

      <h3 className="text-xl font-black tracking-tight text-[#0F2D52]">
        {service.title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {service.description}
      </p>

      <button className="mt-7 flex items-center gap-2 text-sm font-bold text-[#0F2D52] transition group-hover:gap-3">
        Learn More
        <ArrowUpRight size={18} />
      </button>
    </motion.div>
  );
};

export default ServiceCard;

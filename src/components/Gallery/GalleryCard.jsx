import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";

const GalleryCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_16px_40px_-34px_rgba(15,45,82,0.55)]"
    >
      <img
        src={item.image}
        alt={item.title}
        className="aspect-[4/3] w-full object-cover duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#0F2D52]/88 via-[#0F2D52]/20 to-transparent p-5 opacity-0 duration-500 group-hover:opacity-100">

        <ZoomIn
          className="mb-4 text-white"
          size={30}
        />

        <h3 className="text-xl font-black text-white">
          {item.title}
        </h3>

      </div>

    </motion.div>
  );
};

export default GalleryCard;

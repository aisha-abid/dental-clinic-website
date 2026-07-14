import { motion } from "framer-motion";

const FeatureCard = ({ item, index }) => {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * .1 }}
      viewport={{ once: true }}
      whileHover={{
        y: -5,
      }}
      className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_16px_38px_-34px_rgba(15,45,82,0.55)] duration-500 hover:border-[#D4AF37]/60 hover:shadow-[0_24px_55px_-40px_rgba(15,45,82,0.56)]"
    >
      <div
        className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0F2D52] text-white"
      >
        <Icon size={25} />
      </div>

      <h3 className="text-lg font-black tracking-tight text-[#0F2D52]">
        {item.title}
      </h3>

      <p className="mt-2.5 leading-7 text-slate-600">
        {item.description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;

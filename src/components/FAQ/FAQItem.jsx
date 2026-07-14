import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_14px_32px_-30px_rgba(15,45,82,0.5)]">

      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-5 p-5 text-left sm:p-6"
      >
        <h3 className="text-base font-black text-[#0F2D52] sm:text-lg">
          {item.question}
        </h3>

        {open ? (
          <Minus className="shrink-0 text-[#0F2D52]" />
        ) : (
          <Plus className="shrink-0 text-[#0F2D52]" />
        )}
      </button>

      <AnimatePresence>

        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-5 pb-5 leading-7 text-slate-600 sm:px-6 sm:pb-6">
              {item.answer}
            </p>
          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
};

export default FAQItem;

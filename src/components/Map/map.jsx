import { motion } from "framer-motion";

const Map = () => {
  return (
    <section className="bg-[#F7FAFC] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="inline-flex rounded-full border border-[#D4AF37]/25 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0F2D52]">
            FIND US
          </span>

          <h2 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-[#0F2D52] sm:text-5xl">
            Visit
            <span className="text-[#C49A2C]"> Sarmad Dental Care</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Conveniently located at Main Alam Chownk, Gujranwala. Visit our
            clinic for professional and comfortable dental care.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_22px_60px_-44px_rgba(15,45,82,0.58)]"
        >
          <iframe
            title="Sarmad Dental Care"
            src="https://www.google.com/maps?q=Abdul+Majeed+Awan+Plaza,+Hafizabad+Rd,+opposite+Rose+Garden+Marriage+Hall,+Main+Alam+Chownk,+Gujranwala,+52250,+Pakistan&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[360px] w-full sm:h-[460px]"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Map;
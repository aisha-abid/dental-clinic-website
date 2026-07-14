import { motion } from "framer-motion";
import galleryData from "./galleryData";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-flex rounded-full border border-[#D4AF37]/25 bg-[#F7FAFC] px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0F2D52]">
            OUR GALLERY
          </span>

          <h2 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-[#0F2D52] sm:text-5xl">
            Inside
            <span className="text-[#C49A2C]">
              {" "}Mushtaq Dental Clinic
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Take a look inside our modern clinic, advanced equipment,
            comfortable treatment rooms, and caring environment.
          </p>

        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">

          {galleryData.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Gallery;

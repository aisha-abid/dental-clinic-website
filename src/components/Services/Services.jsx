import { motion } from "framer-motion";
import services from "./servicesData";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-[#D4AF37]/25 bg-[#F7FAFC] px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0F2D52]">
            OUR SERVICES
          </span>

          <h2 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-[#0F2D52] sm:text-5xl">
            Complete Dental Care
            <span className="text-[#C49A2C]">
              {" "}Under One Roof
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            We provide modern dental treatments using advanced technology,
            ensuring every patient receives comfortable, high-quality care.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

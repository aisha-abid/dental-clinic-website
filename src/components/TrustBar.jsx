import { motion } from "framer-motion";
import { Star, ShieldCheck, Smile, Award } from "lucide-react";

const items = [
  {
    icon: Star,
    title: "5.0 Google Rating",
    desc: "Trusted by our patients",
  },
  {
    icon: ShieldCheck,
    title: "100% Sterilized",
    desc: "Modern safety standards",
  },
  {
    icon: Smile,
    title: "500+ Happy Smiles",
    desc: "Healthy & confident patients",
  },
  {
    icon: Award,
    title: "Advanced Equipment",
    desc: "Latest dental technology",
  },
];

const TrustBar = () => {
  return (
    <section className="border-y border-slate-200/70 bg-white/80 py-6 shadow-[0_18px_55px_-48px_rgba(15,45,82,0.5)] backdrop-blur">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

          {items.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .5, delay: index * .2 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-slate-200/70 bg-slate-50/70 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_35px_-28px_rgba(15,45,82,0.42)]"
              >

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F2D52] text-white">

                  <Icon size={26} />

                </div>

                <h3 className="text-base font-black text-[#0F2D52]">

                  {item.title}

                </h3>

                <p className="mt-1.5 text-sm leading-6 text-slate-500">

                  {item.desc}

                </p>

              </motion.div>
            );

          })}

        </div>

      </div>
    </section>
  );
};

export default TrustBar;

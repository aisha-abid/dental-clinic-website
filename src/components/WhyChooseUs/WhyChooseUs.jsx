import { motion } from "framer-motion";
import CountUpModule from "react-countup";

import clinic from "../../assets/images/clinic2.png";
import whyChooseData from "./whyChooseData.js";
import FeatureCard from "./FeatureCard";

const CountUp = CountUpModule.default?.default || CountUpModule.default || CountUpModule;

const WhyChooseUs = () => {
  return (
    <section className="bg-[#F7FAFC] py-20 sm:py-24 lg:py-28">

      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        <div className="grid items-center gap-14 lg:grid-cols-[0.98fr_1.02fr] lg:gap-20">

          {/* Left */}

          <motion.div
            initial={{opacity:0,x:-80}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:.7}}
            viewport={{once:true}}
            className="relative"
          >

            <img
              src={clinic}
              alt="Modern dental treatment room"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-[0_28px_70px_-42px_rgba(15,45,82,0.55)]"
            />

            {/* Floating Card */}

            <div
              className="absolute -bottom-7 left-5 rounded-2xl border border-white/70 bg-white/90 p-5 shadow-[0_22px_55px_-34px_rgba(15,45,82,0.6)] backdrop-blur sm:left-10 sm:p-6"
            >

              <h2 className="text-4xl font-black tracking-tight text-[#0F2D52] sm:text-5xl">

                <CountUp
                  end={500}
                  duration={3}
                />

                +

              </h2>

              <p className="mt-1 text-sm font-semibold text-slate-500">

                Happy Patients

              </p>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{opacity:0,x:80}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:.7}}
            viewport={{once:true}}
          >

            <span
              className="
              px-5
              py-2
              rounded-full
              bg-white
              text-[#0F2D52]
              font-semibold
              border
              border-[#D4AF37]/25
              text-xs
              uppercase
              tracking-[0.16em]
              "
            >
              WHY CHOOSE US
            </span>

            <h2
              className="
              mt-6
              text-4xl
              font-black
              leading-[1.08]
              tracking-tight
              text-[#0F2D52]
              sm:text-5xl
              "
            >
              Excellence In{" "}

              <span className="text-[#C49A2C]">

                Dental Care

              </span>

            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">

              We combine advanced technology, compassionate care,
              and modern dentistry to deliver exceptional results
              for every patient.

            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-5">

              {whyChooseData.map((item,index)=>(
                <FeatureCard
                  key={item.id}
                  item={item}
                  index={index}
                />
              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;

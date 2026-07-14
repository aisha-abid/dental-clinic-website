import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import clinic from "../assets/images/clinic.png";
import doctor from "../assets/images/doctor.png";

const features = [
  "Advanced Digital Dental Equipment",
  "Highly Sterilized Environment",
  "Experienced & Caring Dentist",
  "Affordable Dental Treatments",
];

const stats = [
  {
    number: "500+",
    title: "Happy Patients",
  },
  {
    number: "5.0",
    title: "Google Rating",
  },
  {
    number: "8+",
    title: "Dental Services",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#F7FAFC] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">

          {/* Images */}

          <motion.div
            initial={{opacity:0,x:-80}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:.7}}
            viewport={{once:true}}
            className="relative"
          >

            <img
              src={clinic}
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-[0_28px_70px_-42px_rgba(15,45,82,0.55)]"
              alt="Sarmad Dental Clinic interior"
            />

            <img
              src={doctor}
              alt="Sarmad Dental Clinic doctor"
              className="absolute -bottom-8 right-4 hidden w-44 rounded-[1.5rem] border-[7px] border-white object-cover shadow-[0_22px_55px_-34px_rgba(15,45,82,0.58)] md:block lg:-right-6 lg:w-52"
            />

            {/* Experience Card */}

            <div
              className="absolute left-4 top-5 rounded-2xl border border-white/70 bg-white/88 p-5 shadow-[0_20px_45px_-30px_rgba(15,45,82,0.6)] backdrop-blur sm:-left-5 sm:top-8"
            >

              <h2 className="text-3xl font-black tracking-tight text-[#0F2D52] sm:text-4xl">

                10+

              </h2>

              <p className="mt-1 text-sm font-semibold text-slate-500">

                Years Experience

              </p>

            </div>

          </motion.div>

          {/* Content */}

          <motion.div
            initial={{opacity:0,x:80}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:.7}}
            viewport={{once:true}}
          >

            <span
              className="
              bg-white
              text-[#0F2D52]
              px-5
              py-2
              rounded-full
              border
              border-[#D4AF37]/25
              text-xs
              font-bold
              tracking-[0.16em]
              "
            >
              ABOUT OUR CLINIC
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
              Caring For Every
              <br />

              Smile With{" "}

              <span className="text-[#C49A2C]">

                Passion.

              </span>

            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600">

              At Sarmad Dental Clinic, we combine advanced technology,
              modern treatments, and compassionate care to create healthy,
              confident smiles. Our mission is to provide comfortable dental
              care for every member of your family.

            </p>

            {/* Features */}

            <div className="mt-9 grid gap-4 sm:grid-cols-2">

              {features.map((item,index)=>(

                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 text-sm font-semibold text-slate-700"
                >

                  <CheckCircle2
                    className="shrink-0 text-emerald-500"
                    size={20}
                  />

                  <span>

                    {item}

                  </span>

                </div>

              ))}

            </div>

            {/* Stats */}

            <div
              className="
              mt-10
              grid
              gap-4
              sm:grid-cols-3
              "
            >

              {stats.map((item,index)=>(

                <div
                  key={index}
                  className="
                  rounded-2xl border border-slate-200/70 bg-white p-5 text-center shadow-[0_16px_35px_-30px_rgba(15,45,82,0.45)] duration-300 hover:-translate-y-1"
                >

                  <h2
                    className="
                    text-3xl
                    font-black
                    text-[#0F2D52]
                    tracking-tight
                    sm:text-4xl
                    "
                  >

                    {item.number}

                  </h2>

                  <p
                    className="mt-2 text-sm font-semibold text-slate-500"
                  >

                    {item.title}

                  </p>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default About;

import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  PhoneCall,
  Star,
  ShieldCheck,
  Smile,
} from "lucide-react";

import doctor from "../assets/images/doctor.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#eef7fb_54%,#f7f0df_100%)]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-white/80" />

      <div className="mx-auto grid min-h-[100dvh] max-w-7xl items-center gap-12 px-5 pb-16 pt-32 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:pb-20 lg:pt-28">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="w-full"
        >
          <span className="inline-flex rounded-full border border-[#D4AF37]/25 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0F2D52] shadow-sm backdrop-blur">
            Premium Dental Care
          </span>

          <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.03] tracking-tight text-[#0F2D52] sm:text-5xl lg:text-6xl xl:text-7xl">
            Your Smile
            <br />
            Deserves
            <span className="text-[#C49A2C]"> The Best Care.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Experience modern dentistry with advanced technology,
            pain-free treatments, and compassionate care. Helping
            families in Gujranwala smile with confidence.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">

            <button className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#0F2D52] px-7 py-4 font-bold text-white shadow-[0_22px_40px_-24px_rgba(15,45,82,0.8)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#163d6d] active:translate-y-0">

              Book Appointment

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />

            </button>

            <button className="inline-flex items-center justify-center gap-3 rounded-full border border-[#0F2D52]/20 bg-white/65 px-7 py-4 font-bold text-[#0F2D52] shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-[#0F2D52] hover:bg-white active:translate-y-0">

              <PhoneCall size={18} />

              Call Now

            </button>

          </div>

          {/* Trust */}

          <div className="mt-11 grid gap-4 text-sm font-semibold text-slate-700 sm:grid-cols-3 sm:gap-6">

            <div className="flex items-center gap-2.5">

              <ShieldCheck className="text-green-500" />

              <span>100% Sterilized</span>

            </div>

            <div className="flex items-center gap-2.5">

              <Smile className="text-yellow-500" />

              <span>Friendly Staff</span>

            </div>

            <div className="flex items-center gap-2.5">

              <Star className="fill-yellow-400 text-yellow-400" />

              <span>5.0 Rating</span>

            </div>

          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="relative w-full"
        >

          <div className="absolute inset-x-8 bottom-0 top-14 rounded-[42%] bg-[#0F2D52]/10 blur-3xl" />

          <img
            src={doctor}
            alt="Doctor"
            className="relative mx-auto w-[300px] drop-shadow-[0_32px_45px_rgba(15,45,82,0.16)] sm:w-[390px] lg:w-[520px]"
          />

          {/* Card 1 */}

          <div className="absolute left-0 top-12 hidden rounded-2xl border border-white/70 bg-white/86 p-4 shadow-[0_20px_50px_-28px_rgba(15,45,82,0.6)] backdrop-blur md:block">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-emerald-50 p-3">

                <ShieldCheck className="text-green-600" />

              </div>

              <div>

                <h3 className="font-bold">

                  Safe Treatment

                </h3>

                <p className="text-sm text-gray-500">

                  Modern Equipment

                </p>

              </div>

            </div>

          </div>

          {/* Card 2 */}

          <div className="absolute right-0 top-48 hidden rounded-2xl border border-white/70 bg-white/86 p-4 shadow-[0_20px_50px_-28px_rgba(15,45,82,0.6)] backdrop-blur sm:block">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-amber-50 p-3">

                <Star className="fill-yellow-400 text-yellow-500" />

              </div>

              <div>

                <h3 className="font-bold">

                  5.0 Rating

                </h3>

                <p className="text-sm text-gray-500">

                  Happy Patients

                </p>

              </div>

            </div>

          </div>

          {/* Card 3 */}

          <div className="absolute bottom-8 left-6 rounded-2xl border border-white/70 bg-white/86 p-4 shadow-[0_20px_50px_-28px_rgba(15,45,82,0.6)] backdrop-blur sm:left-12">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-sky-50 p-3">

                <CalendarDays className="text-blue-600" />

              </div>

              <div>

                <h3 className="font-bold">

                  Same Day

                </h3>

                <p className="text-sm text-gray-500">

                  Appointment

                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

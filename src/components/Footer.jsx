import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B2442] text-white">

      {/* Top Footer */}

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.9fr_1.1fr] lg:gap-14">

          {/* Clinic Info */}

          <div>

            <h2 className="text-2xl font-black tracking-tight sm:text-3xl">

              Sarmad Dental Clinic

            </h2>

            <p className="mt-5 max-w-md leading-8 text-slate-300">

              Providing modern, comfortable and affordable dental care
              with advanced technology. We are committed to creating
              healthy, confident and beautiful smiles.

            </p>

            {/* Social Icons */}

            <div className="mt-7 flex gap-3">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 duration-300 hover:-translate-y-0.5 hover:bg-[#C49A2C]"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 duration-300 hover:-translate-y-0.5 hover:bg-[#C49A2C]"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://wa.me/923117175844"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 duration-300 hover:-translate-y-0.5 hover:bg-emerald-500"
              >
                <FaWhatsapp size={22} />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-5 text-lg font-black">

              Quick Links

            </h3>

            <ul className="space-y-3.5 text-slate-300">

              <li>
                <a href="#home" className="duration-300 hover:text-[#C49A2C]">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="duration-300 hover:text-[#C49A2C]">
                  About Us
                </a>
              </li>

              <li>
                <a href="#services" className="duration-300 hover:text-[#C49A2C]">
                  Services
                </a>
              </li>

              <li>
                <a href="#gallery" className="duration-300 hover:text-[#C49A2C]">
                  Gallery
                </a>
              </li>

              <li>
                <a href="#contact" className="duration-300 hover:text-[#C49A2C]">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="mb-5 text-lg font-black">

              Our Services

            </h3>

            <ul className="space-y-3.5 text-slate-300">

              <li>General Dentistry</li>

              <li>Dental Implants</li>

              <li>Teeth Whitening</li>

              <li>Root Canal Treatment</li>

              <li>Smile Makeover</li>

              <li>Dental Braces</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-5 text-lg font-black">

              Contact Info

            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <Phone className="shrink-0 text-[#C49A2C]" />

                <a
                  href="tel:+923117175844"
                  className="text-slate-300 duration-300 hover:text-white"
                >
                  +92 311 7175844
                </a>

              </div>

              <div className="flex gap-3">

                <Mail className="shrink-0 text-[#C49A2C]" />

                <a
                  href="mailto:info@sarmadclinic.com"
                  className="break-all text-slate-300 duration-300 hover:text-white"
                >
                  info@sarmaddentalclinic.com
                </a>

              </div>

              <div className="flex gap-3">

                <MapPin className="shrink-0 text-[#C49A2C]" />

                <p className="text-slate-300">

                  Abdul Majeed Awan Plaza, Hafizabad Rd, 
                  opposite Rose Garden Marriage Hall, Main Alam Chownk, 
                  Gujranwala, 52250, Pakistan

                </p>

              </div>

              <div className="flex gap-3">

                <Clock className="shrink-0 text-[#C49A2C]" />

                <p className="text-slate-300">

                  Monday - Sunday
                  <br />
                  	12 PM–4 PM
                    6 PM–10 PM

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 sm:px-6 md:flex-row">

          <p className="text-center text-sm text-slate-400">

            © {new Date().getFullYear()} Sarmad Dental Clinic.
            All Rights Reserved.

          </p>

          <p className="text-center text-sm text-slate-400">

            Designed & Developed by{" "}

            <span className="font-semibold text-[#C49A2C]">

              AestraTech Solutions

            </span>

          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;

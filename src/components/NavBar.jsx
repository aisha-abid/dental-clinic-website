import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-scroll";
import navLinks from "./navLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "border-b border-slate-200/70 bg-white/88 py-3 shadow-[0_18px_45px_-28px_rgba(15,45,82,0.42)] backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6">

        {/* Logo */}

        <h1 className="text-2xl font-black tracking-tight text-[#0F2D52] sm:text-3xl">
          Sarmad
          <span className="ml-1 text-[#C49A2C]">Dental</span>
        </h1>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 rounded-full border border-slate-200/70 bg-white/55 px-6 py-3 text-sm shadow-[0_16px_40px_-30px_rgba(15,45,82,0.45)] backdrop-blur lg:flex">

          {navLinks.map((item) => (

            <Link
              key={item.id}
              to={item.path.replace("#", "")}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer font-semibold text-slate-600 transition-all duration-300 hover:text-[#0F2D52]"
            >
              {item.name}
            </Link>

          ))}

        </nav>

        {/* Right Side */}

        <div className="hidden items-center gap-5 lg:flex">

          <a
            href="tel:923117175844"
            className="flex items-center gap-2 text-sm font-bold text-[#0F2D52]"
          >
            <Phone size={18} />
            +92 311 7175844
          </a>

          <button
            className="rounded-full bg-[#0F2D52] px-6 py-3 text-sm font-bold text-white shadow-[0_18px_34px_-22px_rgba(15,45,82,0.65)] duration-300 hover:-translate-y-0.5 hover:bg-[#163d6d] active:translate-y-0"
          >
            Book Appointment
          </button>

        </div>

        {/* Mobile Icon */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-[#0F2D52] shadow-sm lg:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden border-slate-200 bg-white transition-all duration-500 lg:hidden ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 py-6">

          {navLinks.map((item) => (

            <Link
              key={item.id}
              to={item.path.replace("#", "")}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-base font-semibold text-slate-700"
            >
              {item.name}
            </Link>

          ))}

          <button
            className="mt-2 rounded-full bg-[#0F2D52] py-3 font-bold text-white"
          >
            Book Appointment
          </button>

        </div>
      </div>

    </header>
  );
};

export default Navbar;

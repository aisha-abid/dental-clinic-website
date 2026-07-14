const ContactCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <div className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_14px_34px_-30px_rgba(15,45,82,0.48)]">

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0F2D52] text-white">

        <Icon size={23} />

      </div>

      <div>

        <h3 className="text-lg font-black text-[#0F2D52]">

          {item.title}

        </h3>

        <p className="mt-1.5 leading-7 text-slate-600">

          {item.value}

        </p>

      </div>

    </div>
  );
};

export default ContactCard;

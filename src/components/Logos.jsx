const Logos = () => {
  return (
    <div className="w-full bg-white px-4 my-4 sm:my-6 md:my-8 lg:my-12 xl:my-16 2xl:my-0">
      {/* Responsive flex container */}
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16">
        {[
          { name: "♦SWAY", className: "font-bold" },
          { name: "UNICEF", className: "font-bold tracking-wide" },
          { name: "TEPCO", className: "font-bold tracking-wide" },
          { name: "capgemini", className: "font-normal" },
          { name: "FASTCOMPANY", className: "font-bold" },
          { name: "Maimo", className: "font-bold" },
          { name: "TVS ✈", className: "font-bold" },
          { name: "⬛PLAID", className: "font-bold" },
          { name: "GROVE", className: "font-bold" },
        ].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-1 py-1"
          >
            <span
              className={`text-slate-700 ${logo.className} text-sm sm:text-base md:text-md lg:text-md xl:text-lg 2xl:text-3xl 4xl:text-4xl text-center`}
            >
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logos;

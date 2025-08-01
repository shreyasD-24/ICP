const Logos = () => {
  return (
    <div className="w-full bg-white px-4 my-4 sm:my-6 md:my-8 lg:my-12 xl:my-16 2xl:my-0">
      {/* Responsive flex container */}
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-8 2xl:gap-10">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((logoNumber) => (
          <div
            key={logoNumber}
            className="flex items-center justify-center px-1 py-1"
          >
            <img
              src={`./src/assets/logos/${logoNumber}.png`}
              alt={`Logo ${logoNumber}`}
              className="h-16 w-24 sm:h-20 sm:w-28 md:h-24 md:w-32 lg:h-28 lg:w-36 xl:h-32 xl:w-40 2xl:h-36 2xl:w-44 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logos;

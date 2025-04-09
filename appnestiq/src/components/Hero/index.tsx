import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-gradient-to-r from-[#1A1233] to-[#2C1C46] pb-16 pt-[120px] dark:bg-gray-900 md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-5 text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Apps Built for Your Startup&#39;s Success
          </h1>
          <p className="mb-12 text-lg text-white sm:text-xl md:text-2xl">
            Empower your startup with expert app development – smart investments without big budgets.
          </p>
          <Link
            href="#contact"
            className="rounded-md bg-white px-8 py-4 font-semibold text-purple-600 shadow-lg transition-colors duration-300 hover:bg-gray-200"
          >
            I'm Interested
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

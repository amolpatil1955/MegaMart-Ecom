



function AdSection() {
  return (
    <section className="w-full bg-linear-to-r from-[#1b254b] to-[#2a3570] text-white py-12 px-6 md:px-16 rounded-2xl mt-10 flex flex-col md:flex-row items-center justify-between">
      {/* Text content */}
      <div className="md:w-1/2 space-y-4">
        <h3 className="text-l font-bold uppercase tracking-wider text-gray-300">
          Exclusive Deal on Smart Gadgets
        </h3>
              {/* Image content */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src="https://www.gonoise.com/cdn/shop/files/section_2-mob.webp?v=1677744174"
          alt="Smart Watch"
          className="w-72 h-72 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
        />
      </div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Upgrade Your Style with <span className="text-blue-400">Smart Wearables</span>
        </h2>
        <p className="text-gray-300 text-1xl font-bold md:text-lg">
          Discover the latest smartwatches and accessories designed to make your life easier.
          Enjoy up to <span className="text-yellow-400 font-semibold">80% OFF</span> this season.
        </p>
        <button className="mt-4 bg-white text-[#1b254b] px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-100 transition duration-300">
          Shop Now
        </button>
      </div>


    </section>
  );
}

export default AdSection
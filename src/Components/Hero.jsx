const Hero = () => {
  return (
    <div className="container mx-auto px-4 md:px-0 my-20">
      <div className="flex flex-row items-center justify-center mx-auto space-x-10 md:space-x-44 my-20">
        <div>
          <h1 className="font-extrabold text-2xl md:text-4xl text-center mx-auto">
            Intuitive, Secure & Dynamic
          </h1>

          <div className="">
            <p className="w-screen mx-auto text-center lg:w-[30rem] lg:mx-0 pt-14 pb-5">
              Boost your campaigns by creating dynamic Links, QR codes and Bio
              Pages and get instant analytics.
            </p>
            <div className="px-4">
              <div className="flex justify-between px-4 border rounded-xl  items-center">
                <input
                  className="border-0 outline-none focus:border-0 rounded-sm p-3"
                  type="text"
                  placeholder="Paste a long URL"
                />
                <button className="bg-[#0088FF] h-9 w-[4.5rem] text-white rounded-lg">
                  Shorten
                </button>
              </div>
            </div>
            <div className="px-4">
              <button className="bg-[#0088FF] p-3 my-5 mx-auto rounded-lg text-white">
                Get Started for free
              </button>
            </div>

            <div className="px-4">
              <span className="flex items-center gap-2 py-1">
                <img src="src/assets/Symbol.png" alt="" />
                <h4>Start free, upgrade later</h4>
              </span>

              <span className="flex items-center gap-2 py-1">
                <img src="src/assets/Symbol.png" alt="" />
                <h4>No credit card required</h4>
              </span>

              <span className="flex items-center gap-2 py-1">
                <img src="src/assets/Symbol.png" alt="" />
                <h4>Easy to use</h4>
              </span>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex">
          <img
            className="h-[30rem] w-[25rem]"
            src="src/assets/div.col-md-10.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

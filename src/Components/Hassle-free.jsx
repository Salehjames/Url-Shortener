const Free = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-32 px-4 md:px-0">
        <img className="w-96 h-96" src="src/assets/Section.png" alt="" />
        <div className="flex flex-col gap-6">
          <h4 className="bg-[#F7F9FC] w-fit p-1 text-[#0088FF]">
            Collect data within minutes. Hassel Free!
          </h4>

          <h1 className="font-bold text-3xl w-80">
            One short link, Infinite possibilities
          </h1>

          <p className="w-full md:w-[550px] leading-8">
            A short link is a powerful marketing tool when you use it carefully.
            It is not just a link but a medium between your customer and their
            destination. A short link allows you to collect so much data about
            your customers and their behaviors.
          </p>

          <div className="flex flex-col gap-6">
            <span className="flex items-center gap-3">
              <img
                className="bg-[#F7F9FC] py-2 px-4 rounded-md"
                src="src/assets/ShortLinks.png"
                alt=""
              />

              <span>
                <h4
                  className="font-bold text-[
#343F52]"
                >
                  Short Links
                </h4>
                <p>Intuitive and trackable link</p>
              </span>
            </span>

            <span className="flex items-center gap-3">
              <img
                className="bg-[#F7F9FC] py-2 px-4 rounded-md"
                src="src/assets/QR.png"
                alt=""
              />

              <span>
                <h4
                  className="font-bold text-[
#343F52]"
                >
                  QR Codes
                </h4>
                <p>Customizable and secure QR code</p>
              </span>
            </span>

            <span className="flex items-center gap-3">
              <img
                className="bg-[#F7F9FC] py-2 px-4 rounded-md"
                src="src/assets/pages.png"
                alt=""
              />

              <span>
                <h4
                  className="font-bold text-[
#343F52]"
                >
                  Beautiful Bio Pages
                </h4>
                <p>Simple yet beautiful bio Pages for your links</p>
              </span>
            </span>
          </div>

          <button className="bg-[#0088FF] p-3 my-5 mx-auto rounded-lg text-white">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};
export default Free;

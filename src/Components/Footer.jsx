import ru from "../assets/RU.png"

const Footer = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-32 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:gap-8 lg:w-full max-w-6xl mx-auto">
          <p className="lg:w-1/2 w-full text-center lg:text-left text-sm lg:text-base mb-8 lg:mb-0">
            The best URL shortener script that you will ever find on the
            internet. It comes packed with tons of awesome features including a
            SaaS version that allows you to run your own business!
          </p>

          <div className="flex flex-col lg:flex-row items-center lg:gap-8">
            <div className="lg:border-b lg:border-r lg:pr-8 lg:pb-0 pb-4">
              <h2 className="font-bold text-lg lg:text-xl">Solutions</h2>
              <ul className="list-none">
                <li>QR Codes</li>
                <li>Bio Profiles</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg lg:text-xl">Resources</h4>
              <ul className="list-none">
                <li>Help Center</li>
                <li>Developer API</li>
                <li>Affiliate program</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between px-6 lg:px-12 py-4 bg-gray-200">
        <h4 className="text-center lg:text-left lg:w-1/2">
          © 2024 Premium URL Shortener Demo. All Rights Reserved
        </h4>

        <span className="flex items-center lg:gap-6 lg:w-1/2 lg:justify-end">
          <h4>Report</h4>
          <img src={ru} alt="" />
          <h4>RU</h4>
        </span>
      </div>
    </>
  );
};

export default Footer;

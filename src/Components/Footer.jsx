const Footer = () => {
    return(
        <>
        <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-32">
            <div className="flex flex-col lg:flex-row items-center lg:gap-60">
                <p className="lg:w-96 w-screen">
                The best URL shortener script that you will ever find on the
                internet. It comes packed with tons of awesome features
                including a SaaS version that allows you to run your own
                business!
                </p>

<div className="flex">
                <span className="hidden lg:block">
                    <h2 className="font-bold">Solutions</h2>
                    <ul className="list-none">
                    <li>QR Codes</li>
                    <li>Bio Profiles</li>
                    </ul>
                </span>
            </div>


            <div>
                <h4 className="font-bold text-center py-4">Resources</h4>
                <ul className="list-none text-center">
                    <li className="py-2">Help Center</li>
                    <li className="py-2">Developer API</li>
                    <li className="py-2">Affiliate program</li>
                    <li className="py-2">Contact Us</li>
                </ul>
            </div>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between px-12">
                <h4 className="text-center">© 2024 Premium URL Shortener Demo. All Rights Reserved</h4>

                <span className="flex items-center lg:gap-10">
                    <h4>Report</h4>
                    <img src="src/assets/RU.png" alt="" />
                    <h4>RU</h4>
                </span>
            </div>
        </>
    )
}
export default Footer
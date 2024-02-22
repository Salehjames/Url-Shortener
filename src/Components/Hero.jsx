const Hero = () => {
    return(
        <>
        <div className="flex flex-row items-center justify-center mx-auto my-20">
            <div>
                <h1 className="font-extrabold text-3xl text-center w-screen mx-auto lg:w-64">Intuitive, Secure & Dynamic</h1>

                <div>
                    <p className="w-screen mx-auto text-center lg:w-[30rem] lg:mx-0  pt-14 pb-5">Boost your campaigns by creating dynamic Links, QR codes and Bio
                    Pages and get instant analytics.</p>

                    <span className="flex justify-between px-4 w-screen border lg:w-[30rem] items-center">
                        <input className="border-0 focus:border-0 rounded-sm p-3" type="text" placeholder="Paste a long URL"/>
                        <button className="bg-[#0088FF] h-9 w-[4.5rem] text-white rounded-lg">Shorten</button>
                    </span>

                    <button className="bg-[#0088FF] p-3 my-5 mx-auto rounded-lg text-white">Get Started for free</button>


                    <div>
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
                <img className="h-[30rem] w-[25rem]" src="src/assets/div.col-md-10.png" alt="" />
            </div>
        </div>
        </>
    )
}
export default Hero
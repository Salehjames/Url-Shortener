import { useState } from "react"

const Navbar =() => {

    const [nav, setNav] = useState(true)

    const HandleNav = () => {
        setNav(!nav)
    }
    return(
        <>
        <div className="flex justify-between p-3 lg:justify-center">
        <img onClick={HandleNav} className="h-10 w-10 lg:hidden cursor-pointer" src="src/assets/bars.svg" alt="" />
            <nav className="flex justify-center items-center lg:p-7">
                <div>
                    <ul className={nav ? "list-none hidden h-[0.02rem] flex-col lg:flex lg:flex-row items-center gap-5 lg:h-3" : "absolute top-[4rem] left-0 w-screen shadow-2xl flex flex-col items-center justify-center bg-white"}>
                        <li className="p-3 font-semibold"><a href="">Solutions</a></li>
                        <li className="p-3 font-semibold"><a href="">Pricing</a></li>
                        <li className="p-3 font-semibold"><a href="">Blog</a></li>
                        <li className="p-3 font-semibold"><a href="">Support</a></li>
                        <li className="p-3 font-semibold"><a href="">Resources</a></li>
                    </ul>
                </div>

                <div className="lg:flex justify-end ml-44 gap-10">
                    <button className="border-[#0088FF] hidden text-[#0088FF] border rounded-lg w-[4.5rem] h-10 p-[0.5rem] lg:flex">Login</button>
                    <button className="border-[#0088FF] text-white border rounded-lg bg-[#0088FF] h-10 p-[0.5rem] lg:visible">Get Started</button>
                </div>
            </nav>
        </div>
        </>
    )
}
export default Navbar
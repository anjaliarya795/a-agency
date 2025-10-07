'use client';

import { useState, useEffect, useLayoutEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaHome, FaInfoCircle, FaServicestack, FaEnvelope } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { navLinks, socialIcons } from "@/constants/data";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


const brandName = 'Vyavasaya'

function Navbar() {
    const router = useRouter()
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = useState(false);
    const [openNav, setOpenNav] = useState(false)
    const [windowWidth, setWindowWidth] = useState();
    useLayoutEffect(()=>{
        setWindowWidth(window.innerWidth)
    },[])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);

        };
    }, []);

    useEffect(()=>{
        if(openNav && windowWidth <= 768) {
            console.log('lkj')
            document.getElementById('root-container').classList.add('overflow-hidden')
            document.getElementById('root-container').classList.add('max-h-screen')
        } else {
            document.getElementById('root-container').classList.remove('overflow-hidden')
            document.getElementById('root-container').classList.remove('max-h-screen')
        }
    },[openNav,windowWidth])

    function handleRouterForMobile(pathname='/') {
        router.push(pathname) 
        setOpenNav(false)
    }

    return (
        <>

            {/* Mobile view */}
            {
                openNav ?
                    <nav
                        className={`${isScrolled
                            ? "bg-white text-black"
                            : "bg-primary text-white"
                            } md:hidden block h-screen p-4 sticky top-0 z-[999] transition-all duration-500`}
                    >
                        <div className="flex flex-row w-full justify-center items-center">
                            <button onClick={()=>handleRouterForMobile('/')} className={`text-start mx-auto flex-1 font-extrabold lg:text-4xl text-2xl ${isScrolled && 'text-primary'}`}>{brandName}</button>
                            <IoCloseSharp onClick={()=>setOpenNav(false)} className="ml-auto my-auto text-4xl" />
                        </div>

                        <div className="w-full text-2xl gap-8 flex flex-col items-center flex-1 h-full py-12 overflow-auto justify-center">
                            {/* Loop over navLinks */}
                            <div className="nav-links flex flex-col gap-8 font-bold">
                                {navLinks.map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={()=>handleRouterForMobile(item.link)}
                                        className={`hover:text-secondary cursor-pointer duration-100 flex items-center gap-2 ${pathname===item.link && 'text-secondary'}`}
                                    >
                                        {item.icon} {item.label}
                                    </button>
                                ))}
                            </div>
                            {/* Loop over socialIcons */}
                            <div className="social-icons flex flex-row gap-8">
                                {socialIcons.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`hover:text-secondary ${isScrolled ? 'text-slate-950' : 'text-white'}`}
                                    >
                                        {item.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </nav> :
                    <nav
                        className={`${isScrolled
                            ? "bg-white text-black shadow-md"
                            : "bg-primary text-white shadow-sm shadow-primary-800"
                            } md:hidden flex flex-row justify-between py-4 md:px-12 px-4 items-center sticky top-0 z-[999] transition-all duration-500`}
                    >
                        <Link href='/' className={`logo lg:text-4xl text-2xl font-extrabold ${isScrolled && 'text-primary'}`}>{brandName}</Link>
                        <GiHamburgerMenu onClick={()=>setOpenNav(true)} size={24} />
                    </nav>
            }



            {/* desktop view */}
            <nav
                className={`${isScrolled
                    ? "bg-white text-black shadow-md"
                    : "bg-primary text-white  shadow-sm shadow-primary-800"
                    } md:flex hidden flex-row justify-between py-4 md:px-12 px-4 items-center sticky top-0 z-[999] transition-all duration-500`}
            >
                <Link href={'/'} className={`logo lg:text-4xl text-2xl font-extrabold ${isScrolled && 'text-primary'}`}>{brandName}</Link>

                {/* Loop over navLinks */}
                <div className="nav-links flex flex-row lg:gap-8 gap-4 font-bold text-lg">
                    {navLinks.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className={`hover:text-secondary duration-500 cursor-pointer flex items-center gap-2  ${pathname===item.link && 'text-secondary border-secondary border-b-[3px] pb-[1px]'}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Loop over socialIcons */}
                <div className="social-icons flex flex-row gap-6">
                    {socialIcons.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`hover:text-secondary duration-500 text-xl ${isScrolled ? 'text-slate-950' : 'text-white'}`}
                        >
                            {item.icon}
                        </Link>
                    ))}
                </div>
            </nav>
        </>
    );
}

export default Navbar;

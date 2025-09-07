import Image from 'next/image'
import React, { use, useEffect } from 'react'
import { assets } from '@/public/assets/assets';

const Navbar = () => {

    const [isScroll, setIsScroll] = React.useState(false);
    const sideMenuRef = React.useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'; // geser ke kanan, sembunyi
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }, [])

    return (
        <>
            <nav className={'w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}'}>

                <a href="" className='w-28 cursor-pointer mr-14 bold'>
                    Arfiansyah</a>

                <ul className={'hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"} '}>
                    <li><a className='font-Ovo' href="#top">Home</a></li>
                    <li><a className='font-Ovo' href="#about">About</a></li>
                    <li><a className='font-Ovo' href="#experiece">Experience</a></li>
                    <li><a className='font-Ovo' href="#project">Project</a></li>
                    <li><a className='font-Ovo' href="#contact">Contact</a></li>
                </ul>

                <div className='flex items-center gap-4'>

                    <button>
                        <Image src={assets.moon_icon} alt='' className='w-6' size={20} />
                    </button>

                    <div className='hidden lg:flex items-center gap-3 px-10 py-2.5 rounded-full ml-4'></div>

                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <Image src={assets.menu_black} alt='' className='w-6' />
                    </button>
                </div>

                {/* Mobile Menu */}

                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
                top-0 bottom-0 w-64 z-50 h-screen bg-blue-50 transition duration-500'>

                    <div className="absolute top-6 right-6" onClick={closeMenu}>
                        <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
                    </div>

                    <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#about">About</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#experiece">Experience</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#project">Project</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact</a></li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar

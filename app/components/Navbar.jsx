import Image from 'next/image'
import React, { useRef, useEffect, useState } from 'react'
import { assets } from '@/public/assets/assets';

const Navbar = () => {

    const [isScroll, setIsScroll] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
        setIsMenuOpen(true);
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'; // geser ke kanan, sembunyi
        setIsMenuOpen(false);
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
                    <li><a className='font-Ovo' href="#experience">Experience</a></li>
                    <li><a className='font-Ovo' href="#project">Project</a></li>
                    <li><a className='font-Ovo' href="#contact">Contact</a></li>
                </ul>

                <div className='flex items-center gap-4'>
                    {/* 
                        <button>
                            <Image src={assets.moon_icon} alt='' className='w-6' size={20} />
                        </button> */}

                    <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>Contact
                        <Image src={assets.arrow_icon_dark} alt='' className='w-4' />
                    </a>

                    {!isMenuOpen && (
                        <button className="block md:hidden ml-3" onClick={openMenu}>
                            <Image src={assets.menu_white} alt='' className='w-6' />
                        </button>
                    )}
                </div>

                {/* Mobile Menu */}

                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
                top-0 bottom-0 w-64 z-50 h-screen bg-darkTheme transition duration-500'
                >

                    <div className="absolute top-6 right-6" onClick={closeMenu}>
                        <Image src={assets.close_white} alt='' className='w-5 cursor-pointer' />
                    </div>

                    <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#about">About</a></li>
                    <li><a className="font-Ovo" onClick={closeMenu} href="#experience">Experience</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#project">Project</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact</a></li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar

import { assets } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'

const header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col
        items-center justify-center gap-4'>
            <div>
                <Image src={assets.profile} alt='' className='rounded-full w-32' />
            </div>

            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
                Hi I'm Mohamad Arfiansyah Putra</h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
                Passionate Fullstack Developer & Software Engineer.</h1>
            <p className='max-w-2xl mx-auto font-Ovo'>
                I am a Fullstack Developer and Software Engineer with a strong passion for designing and developing
                scalable web applications.
            </p>

            <div className='flex flex-col sm:flex-row items-center mt-4'>
                <a href="/simple-resume.pdf" download
                    className='px-10 py-3 border rounded-full border-gray-500 flex
                items-center gap-2'>Get My Resume <Image src={assets.download_icon} alt='' 
                className='w-4'/></a>
            </div>
        </div>
    )
}

export default header

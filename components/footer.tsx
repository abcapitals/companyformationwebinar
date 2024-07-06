import React from 'react'
import { MapPin, Phone, Map, Globe } from 'lucide-react'
import ContactFormTwo from './contact-form-two'

export default function Footer() {
    return (
        <footer className='p-4 border-t-2 border-gray-800 lg:flex'>
            <div className='flex flex-col gap-5 lg:w-1/2 lg:justify-center lg:items-center'>
                <h2 className='text-[#036B6D] text-center font-semibold text-lg md:text-xl'>Reach Our Expert Team</h2>
                <div className='flex flex-col w-4/5 lg:items-center lg:justify-center sm:flex-row gap-5 lg:flex-col lg:w-fit mx-auto'>
                    <div className='flex w-full flex-col justify-center items-center gap-3 border border-gray-800 p-1 rounded-md'>
                        <Phone className='sm:w-12 sm:h-12 w-6 h-6 text-[#036B6D]' />
                        <p className='text-xs lg:text-base text-gray-700 text-center font-semibold'><a href="tel:+971-523655193" className='cursor-pointer'>+971-523655193</a> <a href="tel:+971-585857119" className='cursor-pointer'>+971-585857119</a></p>
                    </div>
                    <div className='flex w-full flex-col items-center gap-3 border border-gray-800 p-1 rounded-md justify-center'>
                        <Globe className='sm:w-12 sm:h-12 w-6 h-6 text-[#036B6D]'/>
                        <p className='text-xs lg:text-base font-semibold text-center text-gray-700'>info@abcapital.ae</p>
                    </div>
                    <div className='flex w-full flex-col items-center gap-3 border border-gray-800 p-1 rounded-md justify-center'>
                        <Map className='sm:w-12 sm:h-12 w-6 h-6 text-[#036B6D]' />
                        <p className='text-xs lg:text-base font-semibold text-center text-gray-700'>Office No 404, Al Tawhidi Building, Bank Street, Bur Dubai, UAE</p>
                    </div>
                </div>
            </div>
            <div className='p-4 flex flex-col gap-4 lg:w-1/2'>
                <h2 className='text-[#036B6D] text-center font-semibold text-lg md:text-xl'>Get a Free Quote Now!</h2>
                <div>
                    <ContactFormTwo />
                </div>
            </div>
        </footer>
    )
}

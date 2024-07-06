"use client"

import React from 'react'
import Image from 'next/image';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export default function NavBar() {

    return (
        <nav className="bg-white bg-opacity-90 backdrop-blur-md border-gray-200 dark:bg-gray-900 fixed top-0 left-0 z-50 w-full h-fit">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-2">
                <div className='md:w-20 md:h-16 w-16 h-10'>
                    <Image src="/assets/images/logo.png" fill alt="Logo" className='object-contain' />
                </div>
            </div>
        </nav>
    )
}
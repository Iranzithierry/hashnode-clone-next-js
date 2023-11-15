import React, { useState } from 'react'
import NavbarSwitches from '@/components/NavbarSwitches'
import SocialMediaHandler from './SocialMediaHandler';
import Logo from './Logo';
import ManageSection from './ManageSection';
import HeaderTabs from './HeaderTabs';
import Canvas from './Canvas';
import * as SolidIcon from '@heroicons/react/24/solid'
export default function Navbar() {
    const [showCanvas, setShowCanvas] = useState(false);
    const closeCanvas = () => {
        setShowCanvas(false)
    }

    return (
        <nav className='flex flex-col gap-y-2 md:gap-y-10 w-full justify-between items-center'>
            <div className='flex w-full justify-between items-center px-0 md:px-16'>
                <div className='flex sm:hidden'>
                    <button onClick={() => setShowCanvas(true)} className='cursor-pointer rounded-full hover:bg-gray-0 dark:hover:bg-dark-1 p-2 transition-colors duration-300 focus:ring-4 primary-ring'>
                        <SolidIcon.Bars3Icon className="h-[1.8rem] w-[1.8rem] md:w-[2rem] md:h-[2rem] text-black dark:text-white" />
                    </button>
                </div>
                <a className='cursor-pointer hidden md:flex rounded-full focus:ring-4 primary-ring' href='#'>
                    <Logo />
                </a>
                <div>
                    <NavbarSwitches />
                </div>
            </div>
            <a className='cursor-pointer flex md:hidden rounded-full focus:ring-4 primary-ring' href='#'>
                <Logo />
            </a>
            <div className='flex flex-col-reverse md:flex-row w-full gap-y-2 md:gap-y-6 justify-center md:justify-between items-center '>
                <div className='place-center w-full md:w-fit'>
                    <SocialMediaHandler />
                </div>
                <div className='place-center w-full md:w-fit'>
                    <ManageSection />
                </div>
            </div>
            <div className='hidden sm:flex'>
                <HeaderTabs />
            </div>
            {showCanvas && (<Canvas onClose={closeCanvas} showSidebar={showCanvas} />)}
        </nav>
    )
}

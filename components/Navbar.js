import React, { useState } from 'react'
import NavbarSwitches from '@/components/NavbarSwitches'
import SocialMediaHandler from './SocialMediaHandler';
import Logo from './Logo';
import ManageSection from './ManageSection';
import HeaderTabs from './HeaderTabs';
import Canvas from './Canvas';
import * as SolidIcon from '@heroicons/react/24/solid'
import { AuthProvider } from '@/auth/Auth'
export default function Navbar() {
    const [showCanvas, setShowCanvas] = useState(false);
    const closeCanvas = () => {
        setShowCanvas(false)
    }

    return (
        <nav className='flex flex-col gap-y-6 md:gap-y-4 w-full justify-between items-center max-w-[2236px] pb-2 mt-4 sm:mt-0'>
            <div className='flex w-full justify-between items-center'>
                <div className='flex md:hidden'>
                    <button onClick={() => setShowCanvas(true)} className='sm:hidden cursor-pointer rounded-full hover:bg-gray-0 dark:hover:bg-dark-1 p-2 transition-colors duration-300 focus:ring-4 primary-ring'>
                        <SolidIcon.Bars3Icon className="h-[1.4rem] w-[1.4rem] sm:h-[1.8rem] sm:w-[1.8rem] md:w-[2rem] md:h-[2rem] text-black dark:text-white" />
                    </button>
                </div>
                <a className='cursor-pointer hidden md:flex rounded-full focus:ring-4 primary-ring' href='#'>
                    <Logo />
                </a>
                <div>
                    <AuthProvider>
                        <NavbarSwitches />
                    </AuthProvider>

                </div>
            </div>
            <a className='cursor-pointer flex md:hidden rounded-full focus:ring-4 primary-ring' href='#'>
                <Logo />
            </a>
            <div className='flex flex-col-reverse md:flex-row w-full gap-y-2 md:gap-y-6 justify-center md:justify-between items-center '>
                <div className='place-center w-full md:w-fit'>
                    <SocialMediaHandler />
                </div>
                <div className='place-center w-full md:w-fit'  placeholder='blur'>
                    <AuthProvider>
                        <ManageSection />
                    </AuthProvider>
                </div>
            </div>
            <div className='hidden sm:flex'>
                <HeaderTabs />
            </div>
          
            {showCanvas && ( <React.Suspense fallback={<p>Loading Canvas</p>}><Canvas onClose={closeCanvas} showSidebar={showCanvas} /> </React.Suspense>)}
        </nav>
    )
}

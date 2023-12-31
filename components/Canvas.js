import React, { useEffect, useState } from 'react'
import StyledImage from './Image'
import * as SolidIcon from '@heroicons/react/24/solid'
import SocialMediaHandler from './navbar_components/SocialMediaHandler';
export default function Canvas({ onClose, showSidebar }) {
    const items = ["Home", "Github", "Badges", "News Letter"]
    const [width, setWidth] = useState("transform -translate-x-full")
    const selectedItem = 1;
    const closeCanvas = () => {
        setWidth("transform -translate-x-full")
        setTimeout(() => onClose(),100)
    }

    useEffect(() => {
        setWidth("transform translate-x-0")
    }, [])
    return (
        <div>
            <div className='z-30 w-full flex sm:hidden  bg-dark-0/50 fixed bottom-0 top-0 right-0' onClick={() => closeCanvas()}/>
            <div className={`z-40 w-[78%] flex sm:hidden dark:bg-dark-1 bg-gray-0 fixed left-0 top-0 bottom-0 transition-all duration-600 ${width}`}>
                <div className='h-full  w-full flex flex-col justify-items-center space-x-2 py-6 px-4'>
                    <div className='flex justify-between w-full '>
                        <a className='z-50 cursor-pointer rounded-full focus:ring-4 primary-ring' href='#'>
                            <StyledImage Size={'sm'} />
                        </a>
                        <div>
                            <button onClick={() => closeCanvas()} className='cursor-pointer rounded-full bg-gray-1/100 dark:bg-dark-0/75 hover:bg-gray-0 dark:hover:bg-dark-1 p-2 transition-colors duration-300 focus:ring-4 primary-ring'>
                                <SolidIcon.XMarkIcon className="h-[1.8rem] w-[1.8rem] md:w-[2rem] md:h-[2rem] text-black dark:text-white" />
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-1 flex-col justify-center'>
                        <div className='w-full text-center flex justify-center'>
                            <p className='text-xl font-semibold font-inter text-slate-700 dark:text-white'>Blog menu</p>
                        </div>
                        <ul className='flex flex-col  justify-center items-start pt-2 space-y-4'>
                            {items.map((item, index) => {
                                let isSelected;
                                selectedItem === index ? isSelected = true : isSelected = false;
                                return (
                                    <a href='#' key={index} className='w-full text-start focus:ring-2 ring-primary-0 ring-offset-2 dark:ring-offset-transparent rounded-lg p-1.5'>
                                        <li className={`text-slate-700 dark:text-neutral-200 text-md font-inter ${isSelected ? 'font-bold !text-primary-0' : 'font-semibold'}`} key={index}>{item}</li>
                                    </a>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='w-full justify-center flex flex-1 flex-col'>
                        <div className='w-full text-center flex justify-center'>
                            <p className='text-xl font-semibold font-inter text-slate-700 dark:text-white'>Blog Socials</p>
                        </div>
                        <SocialMediaHandler isCanvas={true} />
                    </div>
                </div>
            </div>
        </div>

    )
}

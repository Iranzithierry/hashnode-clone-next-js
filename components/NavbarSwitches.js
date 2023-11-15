import * as SolidIcon from '@heroicons/react/24/solid'
import * as OutlinedIcon from '@heroicons/react/24/outline'
import Logo from './Logo';
import { useEffect, useState } from 'react';
import Modal from './Modal';
import { useCallback } from 'react';
export default function NavbarSwitches() {
    const [isDark, setIsDark] = useState(false)
    const [modal, showModal] = useState(false)
    const [queryOld, setQueryOld] = useState('');
    const [queryNew, setQueryNew] = useState('');
    const [data, setData] = useState('')

    const changeTheme = () => {
        if (localStorage.theme === 'dark') {
            localStorage.theme = "light";
            document.documentElement.classList.remove('dark')
            setIsDark(false)
        }
        else {
            localStorage.theme = "dark";
            document.documentElement.classList.add('dark')
            setIsDark(true)
        }
    }
    const autoChangeTheme = () => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            localStorage.theme = "dark";
            setIsDark(true)
        }
    }
    const closeModal = () => {
        showModal(false)
    }
    const handleTextChange = (event) => {
        setQueryOld(event.target.value);
    }
    useEffect(() => {
        autoChangeTheme();
        const timeoutId = setTimeout(() => {
            setQueryNew(queryOld);
        }, 500);
        return () => clearTimeout(timeoutId);
    }, [queryOld, 500]);

    return (
        <div className='flex place-center w-full gap-2'>
            <button onClick={() => showModal(true)} className='cursor-pointer rounded-full hover:bg-gray-0 dark:hover:bg-dark-1 p-2 transition-colors duration-300 focus:ring-4 primary-ring'>
                <SolidIcon.MagnifyingGlassIcon className="h-[1.8rem] w-[1.8rem] md:w-[2rem] md:h-[2rem] text-black dark:text-white" />
            </button>
            <button onClick={() => changeTheme()} className='cursor-pointer rounded-full hover:bg-gray-0 dark:hover:bg-dark-1 p-2 transition-colors duration-300 focus:ring-4 primary-ring'>

                {isDark ?
                    (
                        <SolidIcon.SunIcon className="h-[1.8rem] w-[1.8rem] md:w-[2rem] md:h-[2rem]  text-black dark:text-white" />
                    )
                    : (
                        <OutlinedIcon.MoonIcon className="h-[1.8rem] w-[1.8rem] md:w-[2rem] md:h-[2rem]  text-black" />
                    )}
            </button>
            <button className='cursor-pointer rounded-full focus:ring-4 primary-ring'>
                <Logo Size={'sm'} />
            </button>

            <Modal show={modal} onClose={closeModal}>
                <div className='w-full mx-auto space-y-2'>
                    <div>
                        <input
                            type='text'
                            onChange={handleTextChange}
                            placeholder='Start typing to search ...'
                            className='w-full focus:ring-primary-1 ring-2 shadow-lg rounded-3xl py-2 md:py-4 px-4 text-lg outline-none dark:bg-dark-0 dark:text-white'
                        />
                    </div>
                    <div className='flex w-full justify-center items-center space-x-2 mt-2'>
                        <span>
                            <OutlinedIcon.MagnifyingGlassIcon className="h-[1.2rem] w-[1.2rem] md:w-[1.6rem] md:h-[1.6rem]  text-black dark:text-white" />
                        </span>
                        <p className='dark:text-neutral-300 text-slate-600 text-base md:text-2xl font-inter font-semibold'>Search articles from this blog</p>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

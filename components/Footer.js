import React from 'react'
import Button from './Button'
import SVG from './SVGs';
export default function Footer() {
    return (
        <div className='py-2 sm:py-4 md:py-5 lg:py-6 w-full'>
            <div className='w-full justify-center items-center flex flex-col space-y-12'>
                <div className='text-center -mb-2'>
                    <p className='font-semibold text-base md:text-lg font-inter text-slate-500 dark:text-slate-300 hover:text-slate-600 dark:hover:text-slate-100'>
                    © {new Date().getFullYear()} IRANZI Dev
                    </p>
                </div>
                <ul className='flex space-x-5'>
                    <a href='#'>
                        <li className='text-base md:text-xl underline-offset-4 font-sans text-slate-500 dark:text-slate-300 hover:text-slate-600 dark:hover:text-slate-100 underline'>
                            Archive
                        </li>
                    </a>
                    <a href='#'>
                        <li className='text-base md:text-xl underline-offset-4 font-sans text-slate-500 dark:text-slate-300 hover:text-slate-600 dark:hover:text-slate-100 underline'>
                            Privacy Policy
                        </li>
                    </a>
                    <a href='#'>
                        <li className='text-base md:text-xl underline-offset-4 font-sans text-slate-500 dark:text-slate-300 hover:text-slate-600 dark:hover:text-slate-100 underline'>
                            Terms
                        </li>
                    </a>
                </ul>
                <div className='flex mt-4'>
                    <Button //icon={<SVG.hashnode/>}
                        classNameArg={'py-2 md:py-4 px-3 md:px-5 button rounded-lg md:rounded-xl shadow-2xl bg-transparent ring-2 ring-slate-500 text-slate-900 dark:text-slate-300 hover:text-white dark:hover:text-white hover:ring-transparent group'}
                        fontClassArg={'!font-bold md:!font-extrabold !text-base !md:text-xl !font-inter capitalize'}
                    >
                        Publish with Hashnode
                    </Button>
                </div>
                <div className='flex text-center mt-2'>
                    <p className='text-sm  md:text-xl text-slate-500 dark:text-slate-300'>
                        Powered by&nbsp;
                        <a href='#' className='underline underline-offset-2 text-2xl hover:text-slate-600 dark:hover:text-slate-100'>
                            Hashnode
                        </a>
                        -
                        Home for tech writers and readers.
                    </p>
                </div>
            </div>
        </div>
    )
}

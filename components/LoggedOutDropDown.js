import React from 'react'
import Dropdown from './DropDown'
import SVG from './SVGs';
import Button from './Button';
import Logo from './Logo';
import * as SolidIcon from '@heroicons/react/24/solid';
import * as OutlinedIcon from '@heroicons/react/24/outline'
export default function LoggedOutDropDown({ login }) {
    return (
        <Dropdown>
            <Dropdown.Trigger>
                <button className='cursor-pointer rounded-full hover:bg-gray-0 dark:hover:bg-dark-1 p-2 transition-colors duration-300 focus:ring-4 primary-ring'>
                    <SolidIcon.ChevronDownIcon className="h-[1.8rem] w-[1.8rem] md:w-[2rem] md:h-[2rem] text-black dark:text-white" />
                </button>
            </Dropdown.Trigger>

            <Dropdown.Content contentClasses='bg-white dark:bg-dark-1 w-72'>
                <div className='w-full'>
                    <div className='py-4 px-6 cursor-pointer rounded-t-3xl hover:bg-dark-0/5 dark:hover:bg-dark-0/20 dark:text-white'>
                        <SVG.hashnode />
                    </div>
                    <div className='h-[0.5px] w-full left-0 bg-slate-300 dark:bg-slate-700' />
                    <div className='py-4 px-6 grid grid-cols-4 cursor-pointer hover:bg-dark-0/5 dark:hover:bg-dark-0/20'>
                        <div className=' col-span-1'>
                            <div className='rounded-full focus:ring-2 ring-primary-0'>
                                <Logo Size={'sm'} />
                            </div>
                        </div>
                        <div className='col-span-3 flex flex-col'>
                            <p className='font-inter  font-semibold md:font-bold text-base text-slate-700 dark:text-slate-300'>IRANZI Thierry</p>
                            <p className='font-inter font-normal md:font-semibold text-sm text-neutral-600 dark:text-slate-400'>@datrue</p>
                        </div>
                    </div>
                    <div className='h-[0.5px] w-full left-0 bg-slate-300 dark:bg-slate-700' />
                    <div className='py-4 px-6'>
                        <p className='font-inter font-semibold md:font-bold text-base text-slate-700 dark:text-slate-300'>Ready to get started?</p>
                        <p className='font-inter font-normal md:font-semibold text-sm text-neutral-600 dark:text-slate-400'>Don't miss my next articles, sign in with a Hashnode account.</p>
                        <Button fontClassArg={`text-sm xl:text-lg font-semibold`} classNameArg={'button focus:ring-2 focus:md:ring-4 group w-full px-8 py-5 rounded-3xl !h-[1rem] space-x-2 mt-2'} icon={<SolidIcon.ArrowRightOnRectangleIcon className="h-[1.3rem] w-[1.3rem] md:w-[1.5rem] md:h-[1.5rem]  text-white" />} onPress={() => login()}>
                            Sing in
                        </Button>
                    </div>
                    <div className='h-[0.5px] w-full left-0 bg-slate-300 dark:bg-slate-700' />
                    <div className='py-4 px-4 cursor-pointer  hover:bg-dark-0/5 dark:hover:bg-dark-0/20 flex space-x-2'>
                        <span>
                            <OutlinedIcon.QuestionMarkCircleIcon className="h-[1rem] w-[1rem] md:w-[1.2rem] md:h-[1.2rem] text-black dark:text-white" />
                        </span>
                        <p className='font-inter md:font-semibold text-sm text-slate-700 dark:text-slate-300'>What's Hashnode?</p>
                    </div>
                    <div className='h-[0.5px] w-full left-0 bg-slate-300 dark:bg-slate-700' />
                    <div className='py-4 px-4 cursor-pointer rounded-b-3xl hover:bg-dark-0/5 dark:hover:bg-dark-0/20 flex space-x-2'>
                        <span>
                            <OutlinedIcon.PencilIcon className="h-[1rem] w-[1rem] md:w-[1.2rem] md:h-[1.2rem] text-black dark:text-white" />
                        </span>
                        <p className='font-inter md:font-semibold text-sm text-slate-700 dark:text-slate-300'>Start publishing on Hashnode</p>
                    </div>
                </div>
            </Dropdown.Content>
        </Dropdown>
    )
}

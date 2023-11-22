import React from 'react'
import StyledImage from './Image'

export default function AuthorSection() {
    return (
        <div className='py-2 sm:py-4 md:py-5 lg:py-6 bg-white dark:bg-dark-0 w-full'>
            <div className='w-full justify-center items-center flex flex-col'>
                <div>
                    <StyledImage
                        CustomSize={'h-20 md:h-44 w-full !object-fill !rounded-xl grow'}
                    />
                </div>
                <div className='flex flex-col text-center'>
                    <h3 className='font-black text-2xl md:text-3xl font-inter text-slate-900 dark:text-gray-0'>IRANZI Thierry</h3>
                    <p className='font-bold text-lg md:text-xl font-inter text-slate-900 dark:text-gray-0'>1 Follower</p>
                    <p className='font-semibold text-lg md:text-xl font-inter text-slate-900 dark:text-gray-0 capitalize'>A full stack developer</p>
                </div>
            </div>
        </div>
    )
}

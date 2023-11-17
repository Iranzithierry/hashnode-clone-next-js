import React, { useState } from 'react'
import Button from './Button'
import * as SolidIcon from '@heroicons/react/24/solid'
import * as OutlinedIcon from '@heroicons/react/24/outline'
import { useAuth } from '@/auth/Auth'
export default function ManageSection() {
    const { isLoggedIn} = useAuth();
    return (
        <div>
            {isLoggedIn ? (
                <div className='flex place-center w-full gap-2'>
                    <Button fontClassArg={`text-base xl:text-lg font-semibold`} classNameArg={'button focus:ring-2 focus:md:ring-4 group w-fit px-8 py-6 rounded-3xl  space-x-2'} icon={<SolidIcon.Cog6ToothIcon className="h-[1.5rem] w-[1.5rem] md:w-[1.8rem] md:h-[1.8rem]  text-white " />}>
                        Dashboard
                    </Button>
                    <Button classNameArg={'group button py-6 px-3 rounded-full border-primary-0 dark:border-white border border-2 hover:bg-primary-0'} backgroundColor={'bg-transparent'}>
                        <OutlinedIcon.EnvelopeOpenIcon className="h-[1.8rem] w-[1.5rem] md:w-[2rem] md:h-[2rem]  text-primary-0 dark:text-white group-hover:text-white transition-all duration-300" />
                    </Button>
                </div>
            ) : (
                <div className='flex place-center w-full gap-2'>
                    <Button  fontClassArg={`text-base xl:text-lg font-semibold`} classNameArg={'button focus:ring-2 focus:md:ring-4 group w-fit px-8 py-6 rounded-3xl  space-x-2'} icon={<SolidIcon.UserPlusIcon className="h-[1.5rem] w-[1.5rem] md:w-[1.8rem] md:h-[1.8rem]  text-white " />}>
                        Follow
                    </Button>
                    <Button classNameArg={'group button py-6 px-3 rounded-full border-primary-0 dark:border-white border border-2 hover:bg-primary-0 focus:ring-2 ring-offset-2'} backgroundColor={'bg-transparent'}>
                        <OutlinedIcon.EnvelopeIcon className="h-[1.8rem] w-[1.5rem] md:w-[2rem] md:h-[2rem]  text-primary-0 dark:text-white group-hover:text-white transition-all duration-300" />
                    </Button>
                </div>
            )}
        </div>
    )
}

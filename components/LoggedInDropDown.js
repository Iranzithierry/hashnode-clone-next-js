import React from 'react'
import Dropdown from './DropDown'
import * as SolidIcon from '@heroicons/react/24/solid'
import Logo from './Logo';
import { useAuth } from '@/auth/Auth'
export default function LoggedInDropDown() {
    const { logout } = useAuth();
    const items = [
        {
            Name: "New Draft",
            Icon: SolidIcon.PencilIcon,
            OnPress : null,
        },
        {
            Name: "All Drafts",
            Icon: SolidIcon.ClipboardDocumentIcon,
            OnPress : null,
        },
        {
            Name: "Blog Dashboard",
            Icon: SolidIcon.Cog6ToothIcon,
            OnPress : null,
        },
        {
            Name: "Back to Hashnode",
            Icon: SolidIcon.LanguageIcon,
            OnPress : null,
        },
        {
            Name: "Explore Hashnode",
            Icon: SolidIcon.MapIcon,
            OnPress : null,
        },
        {
            Name: "Profile Settings",
            Icon: SolidIcon.UserCircleIcon,
            OnPress : null,
        },
        {
            Name: "Logout",
            Icon: SolidIcon.ArrowRightOnRectangleIcon,
            OnPress : logout
        }

    ]
    return (
        <Dropdown>
            <Dropdown.Trigger>
                <button className='cursor-pointer rounded-full focus:ring-4 primary-ring'>
                    <Logo Size={'sm'} />
                </button>
            </Dropdown.Trigger>

            <Dropdown.Content contentClasses='bg-white dark:bg-dark-1 w-72'>
                <div className='w-full'>
                    {items.map((item, index) => {
                        const lastIndex = items.length-1
                        const firstIndex = 0
                        return (
                            <div key={index}>
                                <div className={`py-4 px-4 cursor-pointer ${firstIndex === index ? 'rounded-t-3xl' : ''} ${lastIndex === index ? 'rounded-b-3xl' : ''} hover:bg-dark-0/5 dark:hover:bg-dark-0/20 flex space-x-2`} onClick={() => item.OnPress()}>
                                    <span>
                                        <item.Icon className="h-[1rem] w-[1rem] md:w-[1.2rem] md:h-[1.2rem] text-slate-500 dark:text-white" />
                                    </span>
                                    <p className='font-inter  text-sm text-slate-500 dark:text-slate-300'>{item.Name}</p>
                                </div>
                                {index !== lastIndex && <div className='h-[0.5px] w-full left-0 bg-slate-300 dark:bg-slate-700' />  }
                            </div>

                        )
                    })}
                </div>
            </Dropdown.Content>
        </Dropdown >
    )
}

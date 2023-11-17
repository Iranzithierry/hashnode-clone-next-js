import React from 'react'

export default function HeaderTabs() {
    const items = ["Home", "Github", "Badges", "News Letter"]
    const selectedItem = 0;
    return (
        <div className='flex w-full'>
            <div className='flex justify-center items-center'>
                <ul className='flex space-x-6'>
                    {items.map((item, index) => {
                        let isSelected;
                        selectedItem === index ? isSelected = true : isSelected = false;
                        return (
                            <a href='#' key={index} className='focus:ring-2 ring-primary-0 ring-offset-2 rounded-lg p-1.5 hover:bg-gray-0 dark:hover:bg-dark-1'>
                                <li className={`text-slate-700 dark:text-neutral-200 text-xl font-inter  ${isSelected ? 'font-bold' : 'font-semibold'}`} key={index}>{item}</li>
                            </a>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

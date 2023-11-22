import React from 'react'
import StyledImage from '../Image'
import * as Icon from '@heroicons/react/24/outline'
export default function CardFooter({ blog, index }) {
  return (
    <div className='flex flex-col mt-2]'>
      <div className='flex w-full text-start'>
        <h3 className='font-extrabold text-3xl text-slate-900 dark:text-gray-0'>{blog.title}</h3>
      </div>
      {index === 0 && (
        <div className='flex whitespace-pre-line'>
          <p className='font-semibold text-xl text-slate-500 dark:text-slate-200 break-words line-clamp-[8] leading-7'>
            {/* {blog.description} */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quia rem voluptatem accusantium commodi cum tenetur, rerum voluptas vel, ducimus quaerat iste vitae quae fugit eum dolorem reprehenderit quis totam.lore
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quia rem voluptatem accusantium commodi cum tenetur, rerum voluptas vel, ducimus quaerat iste vitae quae fugit eum dolorem reprehenderit quis totam.lore
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt, reprehenderit iure expedita adipisci tempore officia eveniet ipsam at libero aliquid magni voluptas excepturi repudiandae facilis. Accusamus facilis nam illum.
          </p>
        </div>
      )}
      <div className='w-full flex flex-row flex-wrap space-x-3 mt-1 md:mt-2 place-self-end'>
        <div>
          <StyledImage Size={'sm'} />
        </div>
        <div className='flex-col flex'>
          <p className='font-bold text-base text-slate-600 dark:text-slate-200'>IRANZI Thierry</p>
          <div className='flex justify-between w-full space-x-4 items-center'>
            <div className='flex items-center space-x-1'>
              <Icon.BookOpenIcon className='h-[1.5rem] w-[1.5rem]  text-slate-500 dark:text-slate-200' />
              <p className='text-lg font-inter text-slate-500 dark:text-slate-200 items-center flex'>
                {`${blog.readMinutes} min read`}
              </p>
            </div>
            <div className='h-[5px] w-[5px] bg-slate-500 dark:bg-slate-200 rounded-full' />
            <div className='flex items-center space-x-1'>
              <Icon.ChartBarIcon className='h-[1.5rem] w-[1.5rem]  text-slate-500 dark:text-slate-200' />
              <p className='text-lg font-inter text-slate-500 dark:text-slate-200'>
                {`${blog.views} views`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

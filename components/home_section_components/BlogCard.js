import React from 'react'
import StyledImage from '../Image'
import CardFooter from './CardFooter'

export default function BlogCard({ blog, index }) {
  return (
    <a href='#' key={index} className={`${index === 0 ? 'row-span-2 h-fit' : ''} cursor-pointer hover:scale-[1.02] transition-all hover:shadow-2xl dark:shadow-slate-900 p-2 rounded-xl focus:ring-2 dark:focus:ring-1 ring-offset-4 dark:ring-offset-dark-1 ring-primary-0 dark:hover:bg-dark-0/20`}>
      <div className='flex flex-col justify-end'>
        <StyledImage
          CustomSize={'h-72 w-full !object-fill !rounded-xl grow'}
          Src={blog.imageSrc} />
        <CardFooter blog={blog} index={index} />
      </div>
    </a>
  )
}

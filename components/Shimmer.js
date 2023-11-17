import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
export default function Shimmer({ height = 52, count }) {
    console.log(height);
    return (
        <div className={`h-[${height}rem] w-[${height}rem] bg-red-500`}>
             <Skeleton height={height || 50} count={count || 5} />
        </div>
    )
}

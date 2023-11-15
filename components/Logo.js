import React from 'react'
import Image from "next/image";
export default function Logo({ Size }) {
    switch (Size) {
        case'sm':
            Size = "h-12 w-12 md:h-[55px] md:w-[55px]"
            break;
        default:
            Size = "h-16 w-16 md:h-[80px] md:w-[80px]"
            break;
    }
    return (
        <Image
            width={100}
            height={100}
            src={require('../public/logo.png')}
            alt="Logo"
            className={`object-cover ${Size}`}
        />
    )
}

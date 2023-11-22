import React from 'react'
import Image from "next/image";
export default function StyledImage({ Size, Src, CustomSize = null }) {

    const keyStr =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

    const triplet = (e1, e2, e3) =>
        keyStr.charAt(e1 >> 2) +
        keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
        keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
        keyStr.charAt(e3 & 63)

    const rgbDataURL = (r, g, b) =>
        `data:image/gif;base64,R0lGODlhAQABAPAA${triplet(0, r, g) + triplet(b, 255, 255)
        }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

    switch (Size) {
        case 'sm':
            Size = "h-10  w-10 sm:h-12 sm:w-12 md:h-[55px] md:w-[55px]"
            break;
        default:
            Size = "h-16 w-16 md:h-[80px] md:w-[80px]"
            break;
    }
    return (
        <Image
            width={100}
            height={100}
            placeholder="blur"
            blurDataURL={rgbDataURL(0, 105, 255)}
            src={`${Src || '/logo.png'}`}
            alt="Logo"
            className={`object-cover ${CustomSize ? CustomSize : Size} rounded-full`}
            decoding='async'
        />
    )
}

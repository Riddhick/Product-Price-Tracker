import Image from 'next/image'
import React from 'react'

export default function Landing() {
  return (
    <div className='flex flex-col justify-center items-center w-full gap-10'>
        <Image
        src='/assets/emptycart.png'
        width={300}
        height={300}
        className='mt-10 rounded-xl shadow-black shadow-2xl opacity-75 grayscale'
    />
    <div className='text-xl text-neutral-600 font-bold'>Search An Item To Track! </div>
    </div>
  )
}

import React from 'react'
import Image from 'next/image'


const navIcons=[
{src:'/assets/search.svg', alt:'Search'},
{src:'/assets/heart.svg',alt:'Heart'}
]
export default function Navbar() {
  return (
    
    <div className="p-4 flex justify-between ">
          <div ><Image
            src='/assets/logo.png'
            height={50}
            width={110}
            className='rounded-full'
          /></div>
          <div className="flex flex-row gap-6 lg:gap-20 lg:px-16">
            {navIcons.map((icon)=>(
                <Image
                    key={icon.alt}
                    src={icon.src}
                    alt={icon.alt}
                    width={27}
                    height={27}
                    className="object-contain"
                />
            ))}
          </div>  
    </div>
  )
}

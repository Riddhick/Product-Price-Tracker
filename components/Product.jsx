import React from 'react'
import Image from 'next/image'
export default function Product(props) {
  return (
    <div className='flex flex-col w-full px-6 gap-6 text-center'>
        <div className='font-semibold pt-4 '>{props.details.Title}</div>
        <div className='w-full flex flex-row justify-center'><Image
          src={props.details.ImageUrls}
          alt={props.details.Title}
          width={200}
          height={200} 
          className='shadow-black shadow-2xl rounded-xl'
        /></div>
        <div className='flex flex-col items-center'>
            <div>Current Price= {props.details.Currency}{props.details.CurrentPrice}</div>
            <div>Original Price= {props.details.Currency}{props.details.OriginalPrice}</div>
        </div>
        <div className='flex flex-row gap-2 items-center justify-center'> 
          <button className='bg-black w-24 text-white p-2 rounded '><a href={props.details.Link}>Buy Now</a></button>
          <button className='bg-black w-24 text-white p-2 rounded'>Track</button>
        </div>
    </div>
  )
}

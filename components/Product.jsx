import React from 'react'
import Image from 'next/image'
export default function Product(props) {
  return (
    <div className='flex flex-col w-full px-6 gap-4 text-center'>
        <div className=''>{props.details.Title}</div>
        <div className='w-full flex flex-row justify-center'><Image
          src={props.details.ImageUrls}
          alt={props.details.Title}
          width={200}
          height={200} 
        /></div>
        <div className='flex flex-col '>
            <div>Current Price= {props.details.Currency}{props.details.CurrentPrice}</div>
            <div>Original Price= {props.details.Currency}{props.details.OriginalPrice}</div>
        </div>
        <div className='flex flex-col gap-4 items-center'> 
          <button className='bg-black w-24 text-white p-2 rounded '><a href={props.details.Link}>Buy Now</a></button>
          <button className='bg-black w-24 text-white p-2 rounded'>Track</button>
        </div>
    </div>
  )
}

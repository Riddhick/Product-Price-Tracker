import React from 'react'
import Image from 'next/image'
export default function Product(props) {
  return (
    <div className='flex flex-col w-full px-6 gap-4'>
        <div className=''>{props.details.Title}</div>
        <div className='flex flex-col '>
            <div>Current Price= {props.details.CurrentPrice}</div>
            <div>Original Price={props.details.OriginalPrice}</div>
        </div>
    </div>
  )
}

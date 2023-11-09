import React from 'react'
import Image from 'next/image';
import { removeItem } from '@/lib/actions';
import { useState } from 'react';

export default function TrackedProduct(props) {
  const [links,setLinks]=useState(props.products)

  async function DeleteItem(url){
    console.log(url.Link)
    const temp=[]
    for(let i=0;i<props.products.length;i++){
      if(props.products[i].Link!==url.Link){
          temp.push(props.products[i])
      }
    }
    setLinks(temp);
    removeItem(url.Link);
  }
  return (
    <div className=" flex flex-row flex-wrap gap-20 justify-center align-items">
        {links.map((item)=>(
            <div className="p-4 w-11/12 shadow-black flex flex-col justify-center items-center shadow-2xl rounded-xl">
                <div className="">{item.Title}</div>
                <div className="my-4"><Image
                    src={item.ImageUrls}
                    alt={item.Title}
                    width={200}
                    height={200} />
                </div>
                <div className='flex flex-col items-center'>
                    <div>Current Price= {item.Currency}{item.CurrentPrice}</div>
                    <div>Original Price= {item.Currency}{item.OriginalPrice}</div>
                 </div>
                <div className='m-2 flex flex-row gap-2 items-center justify-center'> 
                    <button className='bg-black w-24 text-white p-2 rounded '><a href={item.Link}>Buy Now</a></button>
                    <button className='bg-black w-24 text-white p-2 rounded' onClick={()=>DeleteItem(item)} >Remove</button>
                </div>
            </div>
        ))}
    </div>
    
  )
}

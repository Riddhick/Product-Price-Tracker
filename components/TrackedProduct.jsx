import React from 'react'
import Image from 'next/image';
import { removeItem } from '@/lib/actions';

export default function TrackedProduct(props) {
 
  var items=[]
  for(let i=0;i<props.products.length;i++){
    items.push(props.products[i]);
  }  

  async function DeleteItem(url){
    //console.log(url.Link)
    removeItem(url.Link)
    const tempArr=[]
    for(let i=0 ;i<items.length;i++){
        if(items[i]!==url)
            tempArr.push(items[i])
    }
    items=tempArr;
    window.location.reload(false)
    console.log(items)
  }
  return (
    <div className=" flex flex-row flex-wrap gap-20 justify-center align-items">
        {items.map((item)=>(
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

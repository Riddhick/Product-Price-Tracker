import React, { useState } from 'react'
import { AutoUpdate, FetchProducts, ScrapeAndStore } from '@/lib/actions';


export default function Tracked() {
    const [isClicked,setClicked]=useState(0);
    const [buttonText,setButtonText]=useState("Tracked Items")
    const [productDetails,setProductDetails]=useState(null)


    async function getProducts(){
        if(isClicked===0){
            setButtonText("Clear");
            const Link=FetchProducts();
            setClicked(1);
        }
        else{
            setButtonText("Tracked Items");
            setClicked(0);
            //AutoUpdate();
        }
    }
  return (
    <div className="flex flex-row justify-center items-center">
        <button className="text-white bg-black p-1 rounded" onClick={getProducts}>{buttonText}</button>
        <div>
            {productDetails}
        </div>
    </div>
    
  )
}

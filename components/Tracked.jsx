import React, { useState } from 'react'
import {  FetchProductDetails, FetchProducts } from '@/lib/actions';
import TrackedProduct from './TrackedProduct';


export default function Tracked() {
    const [isClicked,setClicked]=useState(0);
    const [buttonText,setButtonText]=useState("Tracked Items")
    const [productDetails,setProductDetails]=useState(null)


    async function getProducts(){
        if(isClicked===0){
            setButtonText("Clear");
            const Link=await FetchProducts();
            const values=await FetchProductDetails(Link)
            setProductDetails(values)
           
            setClicked(1);
        }
        else{
            setButtonText("Tracked Items");
            setClicked(0);
            setProductDetails(null);
            //AutoUpdate();
        }
    }
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
        <button className="text-white bg-black p-1 rounded" onClick={getProducts}>{buttonText}</button>
        {productDetails==null?<></>:<TrackedProduct products={productDetails}/>}
    </div>
    
  )
}

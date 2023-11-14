import React, { useState } from 'react'
import {  FetchProductDetails, FetchProducts } from '@/lib/actions';
import TrackedProduct from './TrackedProduct';
import { PuffLoader } from 'react-spinners';

export default function Tracked() {
    const [isClicked,setClicked]=useState(0);
    const [buttonText,setButtonText]=useState("Tracked Items")
    const [productDetails,setProductDetails]=useState(null)
    const [loading,setLoading]=useState(false)

    async function getProducts(){
        if(isClicked===0){
            setButtonText("Clear");
            setLoading(true);
            const Link=await FetchProducts();
            const values=await FetchProductDetails(Link)
            setProductDetails(values)
            setClicked(1);
            setLoading(false);
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
        
      <PuffLoader loading={loading} color="#000000"/>
    
        {productDetails==null?<></>:<TrackedProduct  products={productDetails}/>}
    </div>
    
  )
}

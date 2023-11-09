"use client"
import { ScrapeAndStore } from "@/lib/actions";
import { useState } from "react"
import Product from "./Product";
import Landing from "./Landing";

export default function Searchbar() {
  const [searchPrompt,setSearchPrompt]=useState('');
  const [productDetails,setProductDetails]=useState(null)
  var product='null'
  const handleSubmit=async (event)=>{
    event.preventDefault()
    product=await ScrapeAndStore(searchPrompt)
   //console.log(product.Title)
    setProductDetails(product)
    
  }

  return (
    <>
    <form onSubmit={handleSubmit} className="m-2 px-2 flex flex-row justify-center gap-4">
        <input type="text" placeholder="Enter Product Link" value={searchPrompt} onChange={(e)=>setSearchPrompt(e.target.value)} className="lg:w-7/12 border-solid border-2 rounded px-2"></input>
        <button type="submit" className="bg-black text-white p-1 rounded">Search</button>
    </form>
    {productDetails==null?<Landing/>:<Product details={productDetails}/>}
    </>
  )
}

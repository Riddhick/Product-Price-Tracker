"use client"
import { ScrapeAndStore } from "@/lib/actions";
import { useState } from "react"

export default function Searchbar() {
  const [searchPrompt,setSearchPrompt]=useState('');

  const handleSubmit=async (event)=>{
    event.preventDefault()
    const product=await ScrapeAndStore(searchPrompt)
  }

  return (
    <form onSubmit={handleSubmit} className="m-4 px-2 flex flex-row justify-center gap-4">
        <input type="text" placeholder="Enter Product Link" value={searchPrompt} onChange={(e)=>setSearchPrompt(e.target.value)} className=""></input>
        <button type="submit" className="bg-black text-white w">Search</button>
    </form>
  )
}

import React from 'react'
import Image from 'next/image'
import { TrackProduct } from '@/lib/actions'
import Tracked from './Tracked';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';

export default function Product(props) {
  const track=async (event)=>{
    try{
    await TrackProduct(props.details);
    toast.success('Product Tracked', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    }
    catch(error){
      toast.error('Failed To Track ', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  }

  return (
    <div className="flex flex-col gap-10 items-center">
    <div className='flex flex-col w-10/12 p-6 gap-6 text-center shadow-black shadow-2xl rounded-xl'>
        <div className='font-semibold pt-4 '>{props.details.Title}</div>
        <div className='w-full flex flex-row justify-center'><Image
          src={props.details.ImageUrls}
          alt={props.details.Title}
          width={200}
          height={200} 
          className=''
        /></div>
        <div className='flex flex-col items-center'>
            <div>Current Price= {props.details.Currency}{props.details.CurrentPrice}</div>
            <div>Original Price= {props.details.Currency}{props.details.OriginalPrice}</div>
        </div>
        <div className='flex flex-row gap-2 items-center justify-center'> 
          <button className='bg-black w-24 text-white p-2 rounded '><a href={props.details.Link}>Buy Now</a></button>
          <button className='bg-black w-24 text-white p-2 rounded' onClick={track}>Track</button> 
        </div>
    </div>
    <div><Tracked /></div>
    <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
     />
    </div>
  )
}

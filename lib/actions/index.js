"use server"
import { AmazonScrapper } from "../scrapper";
import { connectDB } from "../mongoose";

export async function ScrapeAndStore(productUrl){
    if(!productUrl) return;
    try{
        //connectDB()
        const scrapeProduct=await AmazonScrapper(productUrl);
        //onsole.log(scrapeProduct)
        return scrapeProduct;
    }
    catch(error){
        throw new Error('Failed to create/update Product:'+error.message)
    }
}
export async function TrackProduct(products){
    await connectDB();
    console.log(products)
}
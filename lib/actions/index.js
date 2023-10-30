"use server"
import { AmazonScrapper } from "../scrapper";

export async function ScrapeAndStore(productUrl){
    if(!productUrl) return;
    try{
        const scrapeProduct=await AmazonScrapper(productUrl);
        //onsole.log(scrapeProduct)
        return scrapeProduct;
    }
    catch(error){
        throw new Error('Failed to create/update Product:'+error.message)
    }
}
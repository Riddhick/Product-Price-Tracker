"use server"
import { AmazonScrapper } from "../scrapper";

export async function ScrapeAndStore(productUrl){
    if(!productUrl) return;
    try{
        const scrapeProduct=await AmazonScrapper(productUrl);
    }
    catch(error){
        throw new Error('Failed to create/update Product:{error.message}')
    }
}
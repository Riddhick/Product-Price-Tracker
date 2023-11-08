"use server"
import { AmazonScrapper } from "../scrapper";
import { connectDB } from "../mongoose";
import Product from "../models/product.model";
import { revalidatePath } from "next/cache";

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
    let product=products
    const exstingProduct=await Product.findOne({url: products.Link});
    const date=new Date();
    if(exstingProduct){
        const updatePriceHistory = [
            ...exstingProduct.priceHistory,
            {price:products.CurrentPrice,date:date}
        ]

    product = {
        ...products,
        priceHistory: updatePriceHistory,
    }

    const newProduct= await Product.findOneAndUpdate(
        {url:products.Link },
        product,
        {upsert : true ,new:true},
    )
    revalidatePath(`/products/${newProduct._id}`);
    }
    else{
    const newProduct= await Product.findOneAndUpdate(
        {url:products.Link },
        {priceHistory:[{price:products.CurrentPrice,date:date}]},
        {upsert : true ,new:true},
    );
    revalidatePath(`/products/${newProduct._id}`);
    }
   
    //console.log(products)
}

export async function AutoUpdate(){
    //
    const links=await FetchProducts();
    const items=[]
    for(let i=0;i<links.length;i++){
        const item=await AmazonScrapper(links[i]);
        items.push(item);
    }
    console.log(links)
    await items.forEach(TrackProduct)
    console.log("Finished")
}

export async function FetchProducts(){
    await connectDB();
    const Products=await Product.find({});
    const Links=[]
    for(let i=0;i<Products.length;i++){
        Links.push(Products[i].url)
    }
   return Links;
}


export async function FetchProductDetails(links){
    const items=[]
    for(let i=0;i<links.length;i++){
        const item=await AmazonScrapper(links[i]);
        items.push(item);
    }
   // console.log(items)
    return items;
}

export async function removeItem(url){
    try{
    const deleteItem=await Product.findOneAndDelete({url:url}); 
    }
    catch(error){
        console.log(error)
    }
}
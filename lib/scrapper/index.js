import axios from "axios"
import * as cheerio from 'cheerio'
import  {extractPrice,extractCurrency}  from "../utils"


export async function AmazonScrapper(productUrl){
    /*curl --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_8d5af9a2-zone-unblocker:531pfpwv7lcu -k https://lumtest.com/myip.json
    */
    const username=process.env.BRIGHT_DATA_USERNAME
    const password=process.env.BRIGHT_DATA_PASSWORD
    const port=22225
    const session=(1000000 * Math.random())|0
    const options= {
        auth:{
            username:'${username}-session-${session-id}',
            password,
        },
        host:'brd.superproxy.io',
        port,
        rejectUnauthorized:false,
    }
    try{
        const response=await axios.get(productUrl,options)
        const $=cheerio.load(response.data)

        const title=$('#productTitle').text().trim()
        const currentPrice=extractPrice($('.a-price span.a-price-whole'),
        $('a.size.base.a-color-price'),
        $('.a-button-selected .a-color-base'));

        const originalPrice=extractPrice(
            $('#priceblock_ourprice'),
            $('.a-price.a-text-price span.a-offscreen'),
            $('#listprice'),
            $('#priceblock_dealprice'),
            $('.a-size-base.a-color-price')
        )
        
        const imageLink= $('#landingImage').attr('data-a-dynamic-image')
        const imageUrls=Object.keys(JSON.parse(imageLink))

        const currency=extractCurrency($('.a-price-symbol'))

        const data={
            'Title':title,
            'CurrentPrice':Number(currentPrice),
            'OriginalPrice':Number(originalPrice),
            'ImageUrls':imageUrls[0],
            'Currency':currency,
            'Link':productUrl,
        }
        //console.log(currency)
        return data;
    }
    catch(error){
        throw new Error('Failed to create/update Product:'+error.message)
    }

}
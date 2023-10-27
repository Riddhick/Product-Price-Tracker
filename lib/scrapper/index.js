import axios from "axios"
import * as cheerio from 'cheerio'

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
        console.log(response.data)
    }
    catch(error){
        throw new Error(`Failed to create/update Product:${error.message}`)
    }

}

export function extractPrice(...prices){
    for (const price of prices){
        const value=price.text().trim()
        
        if(value) return value.split(".")[0].replace(/\D/g,'');
    }
}

export function extractCurrency(currency){
    const currencyText=currency.text().trim().slice(0,1);
    return currencyText ? currencyText : ''
}
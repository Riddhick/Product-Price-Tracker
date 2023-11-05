import mongoose from "mongoose";

const ProductSchema=new mongoose.Schema({
    url:{type:String, required:true,unique:true},
    originalPrice:{type:Number,required:true},
    priceHistory:[
        {
            price:{type:Number,required:true},
            date:{type:Date,default:Date.Now},
        },
    ]
})

const Product=mongoose.models.Product||mongoose.model('Product',ProductSchema);
export default Product;
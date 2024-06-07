const mongoose=require('mongoose');

const productschema =new mongoose.Schema({
    
    img:{
        type:String,
        required:true
    },
    product:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    number:{
        type:Number,
        required:true
    },
   
    location:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true
    }
    
})
const Product=mongoose.model('Product',productschema);
module.exports=Product;
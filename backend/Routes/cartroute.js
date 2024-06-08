const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Product=require('../Models/Product')
const User=require('../Models/User')

router.post('/addcart/:prod_id',async (req,res)=>{
    let {prod_id}=req.params;
    let {id}=req.body;
    try {
        let prod= await Product.findById(prod_id);
    let user=await User.findById(id).populate('cart');
    user.cart.push(prod);
    user.save();
    res.json({});
    } catch (error) {
        console.log("error in cart");
    }
    
})



module.exports=router;
const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Product=require('../Models/Product')
router.post('/addprod',async (req,res)=>{
    try {
     let {img,product,price,number,location,id}=req.body;
     console.log(product);
     let data=await Product.create({img,product,price,number,location,id});
     res.status(201).json(data);
    } catch (error) {
        res.json({});
    }
    

})
router.get('/getprod/:id',async (req,res)=>{
    try {
        let id=req.params;
        let prod=await Product.find();
    res.json(prod);
    } catch (error) {
        res.json({});
    }
    
})
router.post('/delete/:id',async (req,res)=>{
    try {
    let {id}=req.params;
    console.log(id);
    let prod=await Product.findById(id);
   
    await Product.findByIdAndDelete(id);
    console.log(prod);
    res.json({msg:"deleted successfully"});
    } catch (error) {
        res.json({});
    }
    
})
router.post('/edit/:id',async (req,res)=>{
    try {
     let {img,product,price,number,location,sid}=req.body;
     let {id}=req.params;
     
     let data=await Product.findByIdAndUpdate(id,{img,product,price,number,location,sid});
     res.status(201).json(data);
    } catch (error) {
        res.json({});
    }
    

})
module.exports=router;
const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const User=require('../Models/User')
const generatetoken=(id)=>{
    return jwt.sign({id},"ashish",{
        expiresIn:"30d",
    })
}
router.post('/signup',async (req,res)=>{
    const {username,email,password,role}=req.body;
    console.log(username);
    console.log(req.body.password);
    const userexist=await User.findOne({username});
    console.log(userexist);
    console.log(req.body.role);
if(userexist)
{
  res.status(400);
  throw new Error("user already exist");
}

const hashpassword=await bcrypt.hash(password,10);
const user=await User.create({
  username,
  email,
  password:hashpassword,
  role,

});
if(user){
  res.status(201).json({
      _id:user.id,
      username:user.username,
      email:user.email,
      password:user.password,
      role:user.role,
      token:generatetoken(user._id),
  })
}
else{
  res.status(400)
  throw new Error("user can not be created");
}


})
router.post('/login',async (req,res)=>{
  let {username,email,password,role}=req.body;
console.log(role);
  let user=await User.findOne({username,email,role});
console.log(user);
  if(user){
  await bcrypt.compare(password,user.password,((err,result)=>{
    if(result)
      {
        res.json(user);
      }
      else{
        res.json({"msg":"error"});
      }
  }))}
  else{
    res.json({});
  }
})
module.exports=router;



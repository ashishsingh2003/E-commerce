const express=require('express');
const app=express();
const cors=require('cors');
const userroutes=require('./Routes/userroutes');
const productroutes=require('./Routes/productroutes');
const mongoose=require('mongoose');
app.use(express.urlencoded({extended:true}));

app.use(express.json());
const connectdb=async ()=>{
await mongoose.connect('mongodb+srv://ashishsinghrana39:LUOukWbPCUwZIqmN@cluster0.4gmg23m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log("db connected");
})
.catch((err)=>{

    console.log("error");
})}
connectdb();
app.use(cors({origin:['http://localhost:5173']}));
app.get('/',()=>{
  console.log("hello");
})

app.use(userroutes);
app.use(productroutes);
app.listen(8081,()=>{
    console.log("server connected");
})
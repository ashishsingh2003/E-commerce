import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Item(props) {
    console.log(props.id);
    console.log(props.sel_id);
    let navigate=useNavigate();
   const delet=async (e)=>{
    e.preventDefault();
    let res=await axios.post(`http://localhost:8081/delete/${props.prod_id}`);
    console.log(res);
    console.log("deleted");
     props.getprod();
   }
   const edit=async (e)=>{
    e.preventDefault();
      navigate(`/edit/${props.prod_id}`);
   }
  return (

     
    <div>
        
        <div className="card mt-3 mx-3" style={{width:"18rem", fontFamily:"cursive"}} >
        <img src={props.img} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h3 className="card-title">{props.prod}</h3>
       
        <h5 className="card-title">Available:{props.num}</h5>
        <h5 className="card-title">Price:{props.price}</h5>
        <h5 className="card-title">Location:{props.loc}</h5>
        <button className="btn btn-primary ml-3 mr-3">View</button>
        {
        props.id===props.sel_id ? 
        (<button  className="btn btn-primary mx-3 mr-3" onClick={delet}>Delete</button> )
        :(<button className="btn btn-primary mx-3 mr-3">Add to cart</button>)
        }
         {
        props.id===props.sel_id ? 
        (<button className="btn btn-primary " onClick={edit}>Edit</button> )
        :(div)
        }
        </div>
        </div>
    </div>
   
  )
}

export default Item
import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
function Edit() {
    let params=useParams();
    let image=useRef();
    let item=useRef();
   
    let num=useRef();
    let priceval=useRef();
    let loc=useRef();
    let navigate=useNavigate();
    const edit= async (e)=>{
       e.preventDefault();
       let img=image.current.value;
       let product=item.current.value;
   
       let number=num.current.value;
       let price=priceval.current.value;
       let location=loc.current.value;
       let id=params.id;
       try {
        let res=await axios.post(`http://localhost:8081/edit/${params.id}`,{img,product,price,number,location,id});
       console.log(res);
       } catch (error) {
        console.log("error in adding product");
       }
       
    }
  return (
    <div>
             <div className="row">
  <div className="col-md-6 mx-auto">
   <h1 className="display-6">Edit Your Product</h1>
      <form onSubmit={edit}>
          <div className="mb-3">
           <label htmlFor="img" className="form-label">Image</label>
           <input type="text" ref={image}className="form-control" name="img" placeholder="img"/>
          </div>
          <div  className="mb-3">
            <label htmlFor="event" className="form-label">Product</label>
            <input type="text" ref={item} className="form-control" name="event" placeholder="product name"/>
           </div>
         
          <div  className="mb-3">
           <label htmlFor="price" className="form-label">Price</label>
           <input type="number" ref={priceval} className="form-control" name="price" placeholder="price"/>
          </div>
         
          <div  className="mb-3">
           <label htmlFor="number" className="form-label">Number</label>
           <input type="number" ref={num} className="form-control" name="number" placeholder="number of items you have"/>
          </div>
          <div  className="mb-3">
           <label htmlFor="location" className="form-label">Location</label>
           <input type="text" ref={loc} className="form-control" name="location" placeholder="location"/>
          </div>
          <button className="btn btn-sm btn-success">Edit Product</button>
          
      </form>
      
  </div>

</div>
    </div>)
}

export default Edit
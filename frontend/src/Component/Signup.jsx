import React, { useRef } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Signup() {
  let name=useRef();
  let ema=useRef();
  let pass=useRef();
  let navigate=useNavigate();
  let rol=useRef();
  let rol2=useRef();
  const signup=async (e)=>{
        e.preventDefault();
        let username=name.current.value;
        let email=ema.current.value;
        let password=pass.current.value;
        let role;
        console.log(rol.value);
        console.log(rol2.value);
        if(rol.current.checked)
         role= rol.current.value;
        else{
          role= rol2.current.value;
        }

      console.log(role);
        let res=await axios.post('http://localhost:8081/signup',{username,email,password,role});
        console.log(res);
        navigate('/login');

  }
  return (
    <div>
       <div className="row">
  <div className="col-md-6 mx-auto">
   <h1 className="display-6">Signup</h1>
      <form onSubmit={signup}>
          <div className="mb-3">
           <label htmlFor="username" className="form-label">Username</label>
           <input type="text" ref={name}className="form-control" name="username" placeholder="username"/>
          </div>
          <div  className="mb-3">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input type="email" ref={ema}  className="form-control" name="email" placeholder="email"/>
           </div>
           <div  className="mb-3">
           <label htmlFor="password" className="form-label">Password</label>
           <input type="password" ref={pass} className="form-control" name="password" placeholder="password"/>
          </div>
           <div className="mb-3" >
            <p className="mb-2">Want to register as?</p>
             <div className="mx-2" > 
                <label htmlFor="seller" className="form-label">Seller:</label>
                <input type="radio" ref={rol} className="form-check-input" name="role" value="seller" id="seller"/>
             </div>
             <div className="mx-2">
                <label htmlFor="buyer" className="form-label">Buyer:</label>
                <input type="radio" ref={rol2} className="form-check-input" name="role" value="buyer" id="buyer"/>
             </div>
            </div>
          
          <button className="btn btn-sm btn-success">Signup</button>
          <p className="fw-light mt-2">Don't have an account,<a href="/signup">SignUp</a></p>
      </form>
    
  </div>

</div>
    </div>
  )
}

export default Signup
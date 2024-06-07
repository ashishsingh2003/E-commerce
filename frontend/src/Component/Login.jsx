import React, { useRef } from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import Navs from './Navs';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Login() {

  let navigate=useNavigate();
  let em=useRef();
  let pass=useRef();
  let rol=useRef();
  let rol2=useRef();
  let role;
  console.log(rol.value);
  console.log(rol2.value);
  
  const login=async (e)=>{
           e.preventDefault();
          let email=em.current.value;
           let password=pass.current.value;
           if(rol.current.checked)
            role= rol.current.value;
           else{
             role= rol2.current.value;
           }
           try {
            let res=await axios.post('http://localhost:8081/login',{email,password,role});
            console.log(res.data.email);
            if(res.data.email.length>0){
              console.log()
            navigate(`/dash/${res.data.username}/${res.data._id}/${res.data.role}`);}
          else{
            navigate('/signup');
          }
           } catch (error) {
              console.log("error in login");
           }
          
  }
  return (
    <div>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
         <div className="row">
  <div className="col-md-6 mx-auto">
   <h1 className="display-6">Login</h1>
      <form onSubmit={login}>
         
          <div  className="mb-3">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input type="email" ref={em}  className="form-control" name="email" placeholder="email"/>
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
          <button className="btn btn-sm btn-success">Login</button>
          <p className="fw-light mt-2">Don't have an account,<a href="/signup">SignUp</a></p>
      </form>
    
  </div>

</div>
    </div>
  )
}

export default Login
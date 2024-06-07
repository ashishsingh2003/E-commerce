import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import Navs from './Navs'
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Home.module.css'
function Home(){
  let [item,setitem]=useState([]);
  let navigate=useNavigate();
 
 
  return (
    <div>
          <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          
        </Container> </Navbar>
         <div className={styles.box}>
          <img className={styles.img} src="https://th.bing.com/th?id=OIP.uJ9jQsBkl79jame1m7MO1wHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" />
          
          <div className={styles.but}><button className="btn btn-sm btn-success"><Link className={styles.link} to="/login">Login</Link></button>
          <button className="btn btn-sm btn-success">SignUp</button></div>
           
         </div>
     

     
    </div>
  )
}

export default Home
import React, { useEffect, useState } from 'react'
import Navs from './Navs'
import { useNavigate, useParams } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import styles from './Dash.module.css'
import Item from './Item';
import axios from 'axios';
function Dash() {
  let [prod,setprod]=useState([]);
  let params=useParams();
  let navigate=useNavigate();
  console.log(params.id);
  console.log(params.role);
  const add=(e)=>{
       navigate(`/addprod/${params.id}`)
  }
  const getprod=async (e)=>{
    let res=await axios.get(`http://localhost:8081/getprod/${params.id}`);
    console.log(res.data);
    setprod(res.data);
    

  }
  useEffect(()=>{
    getprod();
  },[])
  return (
    <div>
      { 
       
       params.role=='seller' ? (
       <Navbar className="bg-body-tertiary"  bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
        <Nav className="me-auto">
          
            <Nav.Link  onClick={add} href="#" > Add product</Nav.Link>
            
          </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Hello, {params.user}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
       
    ):
    (
      <Navbar className="bg-body-tertiary"  bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
      
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Hello, {params.user}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
    }
    <div>
    <ul className={styles.plain}>
      {

            prod.map((item,index)=>{
              console.log(item._id);
                return <Item  getprod={getprod}img={item.img} key={index}sel_id={item.id} id={params.id} prod={item.product} prod_id={item._id}price={item.price} loc={item.location} num={item.number} />
            })
      }
    </ul>
    </div></div>
  )
}

export default Dash
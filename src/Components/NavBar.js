import React from 'react'
import logo from "../images/imlogo.svg"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import user from '../images/user.png'
import helpImage from "../images/Support.svg"

const NavBar = () => {
    const navStyle = {
        // background: "rgb(24,86,70)"

    }
    let userImageStyle = {
      borderRadius : "50%",
      border : "1px solid white",
      height :"40px",
      width  : "40px",

    }
    let imagelogo = {
      background : "rgb(24,86,70)",
      marginLeft : "-70px",
      paddingTop : "30px",
      paddingBottom : "30px",
      paddingLeft:"50px",
      paddingRight:"30px"


    }
  return (
    <div >
    <Navbar>
    <Container>
      <Navbar.Brand className = ''href="#home"><img style = {imagelogo} src = {logo}/></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <Button variant="outline-success"><img src = {helpImage} alt="Support" /> Get help</Button>{' '}
          <img style  = {userImageStyle} src = {user} alt = "user" />User
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
    </Navbar>
    </div>
  )
}

export default NavBar

import React from 'react'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import TabContent from './TabContent';

const Sidetab = () => {
  let btnBottom = {
    posotion:"fixed",


  }
  let mainDiv = {
    background : "rgb(24,86,70)",
    color :"white",
    fontWeight :"bold",
    fontSize:"22px",
    fontColor:"#ffffff",
    paddingTop:"30px",
    marginTop:"-30px"
  }
  let event ={
    color:"#FFF",
    background:"#0D3C31",
    borderRadius:"none"
  }


  return (
    <div >
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col style = {mainDiv} sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link style = {event} eventKey="first">Course</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Discussion</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <TabContent/>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur illum optio illo velit placeat sed harum ea debitis numquam magnam.</p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
      <footer><Button variant="outline-success">Get help</Button>{' '}</footer>
      
    </Tab.Container>

    </div>
  )
}

export default Sidetab

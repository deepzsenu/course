import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import imImage from '../images/imml.png';
import ProgressBar from 'react-bootstrap/ProgressBar';


const tabContentdata = () => {
    let now  = 20
    let upperStyle  = {
        display : "flex",
        gap:"20px",
      }

    let imgStyle = {
      borderRadius:"3%",
    }
    let btnStyle = {
      borderRadius:"3%",
      border :"none",
      background: "#E6EDEC",
      color :"#285746",
      paddingBottom : "7px",
      paddingTop : "7px",
      marginBottom : "5px"
    }
    let para = {
        marginLeft:"18px",
        color:"#8F949C",
        marginTop :"-5px",

    }
    let heading = {
        paddingBottom : "-15px"
    }
  return (
    <div>
        <Accordion>
        <div style = {upperStyle}>
            <div>
                <img  style ={imgStyle} src = {imImage} alt = "introduction to machine learning"/>

            </div>
            <div >
                <h2>Introduction to machine learning</h2>
                <button style = {btnStyle}>Batch:Default_Batch_162736763473_intr...</button>
                <ProgressBar  now={now} label={`${now}% Complete`} />
            </div>

        </div>
      <Accordion.Item eventKey="0">
        <Accordion.Header><h5 style = {heading}>1. Introduction to machine Learning </h5></Accordion.Header>
        <p style ={para}>1 Lecture</p>
        <Accordion.Body>
        <ListGroup>
            <ListGroup.Item><p>1. Introduction to Machine Learning</p></ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><h5 style = {heading}>2.Concept of Machine Learning</h5>  </Accordion.Header>
        <p style = {para}>3 Lecture 1 Quize</p>
        <Accordion.Body>
        <ListGroup>
            <ListGroup.Item><p>3. Application of Machine Learning</p></ListGroup.Item>
            <ListGroup.Item><p>4. Neural Network and Deep Learning</p></ListGroup.Item>
            <ListGroup.Item><p>5. Application of Deep Learning</p></ListGroup.Item>
            <ListGroup.Item><p>4. Neural Network and Deep Learning</p></ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><h5 style = {heading}>3. Application of Machine Learning </h5> </Accordion.Header>
        <p style = {para}>2 Lecture </p>
        <Accordion.Body>
        <ListGroup>
            <ListGroup.Item><p>4. Neural Network and Deep Learning</p></ListGroup.Item>
            <ListGroup.Item><p>5. Application of Deep Learning</p></ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><h5 style = {heading}>4. Neural Network and Deep Learning</h5></Accordion.Header>
        <p style = {para}> 5 Lecture</p>
        <Accordion.Body>
        <ListGroup>
            <ListGroup.Item><p>3. Application of Machine Learning</p></ListGroup.Item>
            <ListGroup.Item><p>4. Neural Network and Deep Learning</p></ListGroup.Item>
            <ListGroup.Item><p>5. Application of Deep Learning</p></ListGroup.Item>
            <ListGroup.Item><p>4. Neural Network and Deep Learning</p></ListGroup.Item>
            <ListGroup.Item><p>5. Application of Deep Learning</p></ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header><h5 style = {heading}>5. Application of Deep Learning </h5></Accordion.Header>
        <p style = {para}> 5 Lecture</p>
        <Accordion.Body>
        <ListGroup>
            <ListGroup.Item><p>3. Application of Machine Learning</p></ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default tabContentdata

import React, { Component } from 'react'
import { Card,  Form, Row, Col} from 'react-bootstrap';
 class CreateCertif extends Component {
    render() {
        return (
            <div>
          <Card size="lg" className="mobcard p-3"  >

<Card.Body>  
 <h3 style={{
color:"#5b1667",fontFamily:"sans-serif", fontWeight:"540"
}}>Create Certificate</h3>




<br/>



<Form>
 

  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="4">
    Student Name
    </Form.Label>
    <Col sm="8">
      <Form.Control  name="name" onChange={this.handlechange} type="text"
       placeholder="Enter the  Name of the Student" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="4">
   Institute Name
    </Form.Label>
    <Col sm="8">
      <Form.Control type="text" placeholder="Enter the Institute Name" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="4">
    Course Name
    </Form.Label>
    <Col sm="8">
      <Form.Control  name="institute_Owner"  onChange={this.handlechange} 
      type="text" placeholder="Enter  Course Name " />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="4">
    Class Number 
    </Form.Label>
    <Col sm="8">
      <Form.Control type="text" placeholder="Enter Class Number" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="4">
    Batch Number
    </Form.Label>
    <Col sm="8">
      <Form.Control type="number" placeholder="Enter the Batch Number" />
    </Col>
  </Form.Group>

  <button  onClick={this.handleSubmit}
style={{backgroundColor:"rgb(61, 73, 192)", border:"0px", 
height:"2.5rem", color:"#FFF",borderRadius:"1.5rem"}}
>Create</button>
 
</Form>


</Card.Body>
</Card>

            </div>
        )
    }
}

export default CreateCertif

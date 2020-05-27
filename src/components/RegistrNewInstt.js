import React, { Component } from 'react'
import { Card, Form, Row, Col} from 'react-bootstrap';
import axios from 'axios'



 class RegistrNewInstt extends Component {

state={
  institute_Name:'',
  address:'',
  contactNumber:'',
  website:'',
  email:'',
  short_Description:'',
  institute_Owner:'',
}





handlechange=(e) =>{
  this.setState({
    [e.target.name]: e.target.value
  })
}


handleSubmit =() =>{

axios.post('http://165.22.219.87:8000/requestAffiliation',this.state)
.then(
  Response=>{
    console.log("responsebend", Response)
  }
)

}


// axios.post('http://165.22.219.87:8000/requestAffiliation',{institute_Name:this.state.institute_Name,address:this.state.address})


    render() {
    
        return (
            <div>
            
              <Card size="lg" className="mobcard p-3"  >

<Card.Body>  
<span> <h3 style={{float:"left", 
color:"#5b1667",fontFamily:"sans-serif", fontWeight:"540"
}}>Register a New Institute</h3>


<button  onClick={this.handleSubmit}
style={{backgroundColor:"rgb(61, 73, 192)", border:"0px", 
float:"right",
height:"2.5rem", color:"#FFF",borderRadius:"1.5rem"}}
>Register</button>
</span>

<br/>
<nr/>

<br/>


<Form>
 

  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="4">
      Name of the Institute 
    </Form.Label>
    <Col sm="8">
      <Form.Control  name="institute_Name" onChange={this.handlechange} 
      type="text" placeholder="Enter the  Name of the Institute " />
    </Col>
  </Form.Group>


  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="4">
    Address 
    </Form.Label>
    <Col sm="8">
      <Form.Control type="text"  onChange={this.handlechange} 
      name="address"
      placeholder="Enter Address of the Institute" />
    </Col>
  </Form.Group>



  <Form.Group as={Row} >
    <Form.Label column sm="4">
    Institute Owner
    </Form.Label>
    <Col sm="8">
      <Form.Control  name="institute_Owner"  onChange={this.handlechange} type="text" 
      placeholder="Enter  Institute Owner " />
    </Col>
  </Form.Group>





  <Form.Group as={Row} >
    <Form.Label column sm="4">
    Contact Number
    </Form.Label>
    <Col sm="8">
      <Form.Control type="number"  onChange={this.handlechange} 
      name="contactNumber"
      placeholder="Enter the Contact Number" />
    </Col>
  </Form.Group>


  <Form.Group as={Row} >
    <Form.Label column sm="4">
    Website
    </Form.Label>
    <Col sm="8">
      <Form.Control type="text"   onChange={this.handlechange} 
      name="website"
      placeholder="Enter the Website" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} >
    <Form.Label column sm="4">
      Email
    </Form.Label>
    <Col sm="8">
    <Form.Control type="email"  onChange={this.handlechange} 
    name="email"
    placeholder="Enter the Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} >
    <Form.Label column sm="4">
    Short Description
    </Form.Label>
    <Col sm="8">
      <Form.Control type="text"   onChange={this.handlechange} 
      name="short_Description"
      placeholder="Enter Short Description" />
    </Col>
  </Form.Group>


  


 
</Form>


</Card.Body>
</Card>


            </div>
        )
    }
}

export default RegistrNewInstt
